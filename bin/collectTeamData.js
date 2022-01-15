#!/usr/bin/env node
/**
 * Download the leads' personal information and photos from the Google Sheets Spreadsheet
 * and saves the images to the `public` folder and data to src/ where it has to be built
 * Images can be updated by themselves
 *
 * We may want to change the data to instead be loaded as a global so it can be hot-swapped,
 *  but I don't think it's that big of a deal
 */

'use-strict';

const fs = require("fs");
const path = require("path");
const util = require("util");
const fetch = require("cross-fetch");
require("dotenv").config();
const sheets = require("@googleapis/sheets");

const writeFile = util.promisify(fs.writeFile);

// images are written to public/
const PUBLIC = "public";
// data is written to src/
const SRC = "src";
// contains the text data for leadership
const DATA_FILE = path.join(SRC, "leadership.json");
const LEADERSHIP = "leadership";
// save location in the public folder for images
const IMAGE_DIR = path.join(PUBLIC, LEADERSHIP);

// remove any old files if need be and replace with a fresh output dir
if (fs.existsSync(IMAGE_DIR)) {
    for (const file of fs.readdirSync(IMAGE_DIR)) {
        fs.unlinkSync(path.join(IMAGE_DIR, file));
    }
} else {
    fs.mkdirSync(IMAGE_DIR);
}

const LEADERSHIP_FIELD_TO_COL = {
    name: 0,
    uniqname: 1,
    title: 2,
    gradYear: 3,
    interests: 4,
    funFact: 5,
    linkedinUrl: 6,
    githubUrl: 7,
    personalUrl: 8,
    facebookUrl: 9,
    instagramUrl: 10,
    imageUrl: 11,
    display: 12
};

const client = sheets.sheets({
    version: 'v4',
    auth: process.env.REACT_APP_GOOGLE_API_KEY,
});

const sheetId = process.env.REACT_APP_LEADERSHIP_ID;

client.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "Sheet1!A1:AA998",
}).then(res => {
    const categories = [];
    const personData = {};
    const people = res.data.values;

    // Do a pass to find the categories. Categories must be nonempty.
    people.forEach((row, index) => {
        if (row[0] === "CATEGORY") {
            categories.push({
                name: row[1],
                startIndex: index
            });
            personData[row[1]] = [];
        }
    });

    const imagePromises = [];
    //put the people in their bins and add their information
    // TODO: mostly a port of the React template code, could be improved
    categories.forEach((category, catIndex) => {
        // const peopleInCategory = personData[category.name];
        const nextCategoryStart = (catIndex === categories.length - 1) ?
            people.length :
            categories[catIndex + 1].startIndex;
        for (let rowIndex = category.startIndex + 1; rowIndex < nextCategoryStart; ++rowIndex) {
            const row = people[rowIndex];
            // ignore empty rows and hidden rows
            if (row[0] !== "" && row[LEADERSHIP_FIELD_TO_COL["display"]] === "Y") {
                const props = {};
                for (const item in LEADERSHIP_FIELD_TO_COL) {
                    if (row[LEADERSHIP_FIELD_TO_COL[item]] !== "") {
                        props[item] = row[LEADERSHIP_FIELD_TO_COL[item]];
                    }
                }
                // TODO: a progress bar would be pretty cool *wink* *wink* *nudge* *nudge*
                if (props.imageUrl) {
                    const imageProcessing = fetch(props.imageUrl).then(res => {
                        if (!res.ok) {
                            if (res.status === 403) {
                                throw new Error("Too many requests. Try again later.");
                            }
                            throw new URIError(`Image for ${props["uniqname"]} is not valid.`);
                        }
                        return res.blob();
                    }).then(async blob => {
                        const filename = `${props.uniqname}.${getExtension(blob.type)}`;
                        const localPath = path.join(IMAGE_DIR, filename);
                        // we don't need to include public/ since it is resolved by default
                        // one fun consequence is that the original path will be kept if this one doesn't work
                        props.imageUrl = path.posix.join(LEADERSHIP, filename);
                        // eslint-disable-next-line no-undef
                        const buffer = Buffer.from(await blob.arrayBuffer());
                        return writeFile(localPath, buffer);
                    }).then(err => {
                        if (err) {throw err;}
                        personData[category.name].push(props);
                    }).catch(err => {
                        console.error(err);
                        // process will exit with error after all tasks complete
                        process.exitCode = 1;
                    });
                    imagePromises.push(imageProcessing);
                } else {
                    console.warn(`${props["uniqname"]} did not add an image.`);
                    personData[category.name].push(props);
                }
            }

        }

    });
    Promise.all(imagePromises).then(
        () => {
            console.log(`${imagePromises.length} images saved`);
            console.log(`${imagePromises.length - Object.keys(personData).reduce((sum, category) => sum + personData[category].length, 0)} images missing`);
            return writeFile(DATA_FILE, JSON.stringify(personData, undefined, 4));
        }
    ).catch(err => {
        console.error("Failed to write to json file");
        console.error(err);
        process.exitCode = 1;
    });
});

function getExtension(mimeType) {
    switch (mimeType) {
    case "image/jpeg":
        return "jpg";
    case "image/gif":
        return "gif";
    case "image/png":
        return "png";
    case "image/webp":
        return "webp";
    default:
        throw new Error(`MIME type ${mimeType} not found.`);
    }
}
