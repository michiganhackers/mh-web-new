#!/usr/bin/env node
/**
 * Download the leads' personal information and photos from the Google Sheets Spreadsheet
 * and saves the images to the `public` folder and data to src/ where it has to be built
 * Images can be updated by themselves
 *
 * We may want to change the data to instead be loaded as a global so it can be hot-swapped,
 *  but I don't think it's that big of a deal
 */

"use-strict";

const fs = require("fs");
const path = require("path");
const util = require("util");
const { Buffer } = require("buffer");
const fetch = require("cross-fetch");
require("dotenv").config();
const sheets = require("@googleapis/sheets");
const sharp = require("sharp");

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
// location of the default profile image
//  must be already properly sized and transformed
const DEFAULT_IMAGE = "src/assets/logo_square.png";
// Move the default image to this location
const { ext: default_ext } = path.parse(DEFAULT_IMAGE);
const DEFAULT_FILENAME = `DEFAULT${default_ext}`;

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
    display: 12,
};

const CATEGORY_FIELD_TO_COL = {
    name: 1,
    description: 2,
    imageUrl: 3,
};

const client = sheets.sheets({
    version: "v4",
    auth: process.env.REACT_APP_GOOGLE_API_KEY,
});

const sheetId = process.env.REACT_APP_LEADERSHIP_ID;

// set to true if any of the leads have not supplied a profile image
let hasDefaultImages = false;

client.spreadsheets.values
    .get({
        spreadsheetId: sheetId,
        range: "Sheet1!A1:AA998",
    })
    .then((res) => {
        const categories = [];
        const personData = {};
        const rows = res.data.values;

        const categoryImagePromises = [];
        // Do a pass to find the categories. Categories must be nonempty.
        rows.forEach((row, index) => {
            if (row[0] === "CATEGORY") {
                const categoryName = row[CATEGORY_FIELD_TO_COL.name];
                const categorySlug = slugify(categoryName);
                categories.push({
                    name: categoryName,
                    startIndex: index,
                });
                personData[categoryName] = {
                    slug: categorySlug,
                    description: row[CATEGORY_FIELD_TO_COL.description],
                    imageUrl: "",
                    people: [],
                };
                if (!row[CATEGORY_FIELD_TO_COL.imageUrl]) {
                    throw new Error(`Category ${categoryName} missing image`);
                }
                const imageProcessing = fetch(
                    row[CATEGORY_FIELD_TO_COL.imageUrl]
                )
                    .then((res) => {
                        if (!res.ok) {
                            if (res.status === 403) {
                                throw new Error(
                                    "Too many requests. Try again later."
                                );
                            }
                            throw new URIError(
                                `Image for category ${categoryName} is not valid.`
                            );
                        }
                        return res.blob();
                    })
                    .then(async (blob) => {
                        const filename = `category-${categorySlug}.jpg`;
                        const localPath = path.join(IMAGE_DIR, filename);
                        // we don't need to include public/ since it is resolved by default
                        //  we also use posix paths because we need / instead of the platform specific option
                        personData[categoryName].imageUrl = path.posix.join(
                            LEADERSHIP,
                            filename
                        );
                        return (
                            sharp(Buffer.from(await blob.arrayBuffer()))
                                // rotate the image based on EXIF data
                                .rotate()
                                // resize the image to a small 4:3 since the view is small
                                .resize(720, 540, {
                                    fit: "inside",
                                    withoutEnlargement: true,
                                })
                                // convert it to a jpg if it isn't one already
                                .jpeg({
                                    quality: 100,
                                    chromaSubsampling: "4:4:4",
                                })
                                // automatically strips remaining exif data
                                .toFile(localPath)
                        );
                    })
                    .catch((err) => {
                        console.error(
                            `Image operations failed for category ${categoryName} \n${err}`
                        );
                        // process will exit with error after all tasks complete
                        process.exitCode = 1;
                    });
                categoryImagePromises.push(imageProcessing);
            }
        });

        Promise.all(categoryImagePromises).then(() => {
            console.log(
                `${categoryImagePromises.length} category images saved`
            );
        });

        const imagePromises = [];
        //put the people in their bins and add their information
        // TODO: mostly a port of the React template code, could be improved
        categories.forEach((category, catIndex) => {
            // const peopleInCategory = personData[category.name];
            const nextCategoryStart =
                catIndex === categories.length - 1
                    ? rows.length
                    : categories[catIndex + 1].startIndex;
            for (
                let rowIndex = category.startIndex + 1, personIndex = 0;
                rowIndex < nextCategoryStart;
                ++rowIndex
            ) {
                const row = rows[rowIndex];
                // ignore empty rows and hidden rows
                if (
                    row[0] !== "" &&
                    row[LEADERSHIP_FIELD_TO_COL["display"]] === "Y"
                ) {
                    const props = {};
                    for (const item in LEADERSHIP_FIELD_TO_COL) {
                        if (row[LEADERSHIP_FIELD_TO_COL[item]] !== "") {
                            props[item] = row[LEADERSHIP_FIELD_TO_COL[item]];
                        }
                    }
                    // write the props immediate with the google image url, and then later we only update the url
                    personData[category.name].people[personIndex] = props;
                    // TODO: a progress bar would be pretty cool *wink* *wink* *nudge* *nudge*
                    const myRow = personIndex;
                    if (props.imageUrl) {
                        // we want to keep the row counter in this scope so each fetch gets its own, unincremented one
                        const imageProcessing = fetch(props.imageUrl)
                            .then((res) => {
                                if (!res.ok) {
                                    if (res.status === 403) {
                                        throw new Error(
                                            "Too many requests. Try again later."
                                        );
                                    }
                                    throw new URIError(
                                        `Image for ${props["uniqname"]} is not valid.`
                                    );
                                }
                                return res.blob();
                            })
                            .then(async (blob) => {
                                const filename = `${props.uniqname}.jpg`;
                                const localPath = path.join(
                                    IMAGE_DIR,
                                    filename
                                );
                                // we don't need to include public/ since it is resolved by default
                                //  we also use posix paths because we need / instead of the platform specific option
                                personData[category.name].people[
                                    myRow
                                ].imageUrl = path.posix.join(
                                    LEADERSHIP,
                                    filename
                                );
                                return (
                                    sharp(Buffer.from(await blob.arrayBuffer()))
                                        // rotate the image based on EXIF data
                                        .rotate()
                                        // resize the image to a smallest dimension of 400 without growing small images
                                        .resize(400, 400, {
                                            fit: "outside",
                                            withoutEnlargement: true,
                                        })
                                        // convert it to a jpg if it isn't one already
                                        .jpeg({
                                            quality: 100,
                                            chromaSubsampling: "4:4:4",
                                        })
                                        // automatically strips remaining exif data
                                        .toFile(localPath)
                                );
                            })
                            .catch((err) => {
                                console.error(
                                    `Image operations failed for ${props.uniqname}. Default image used.\n${err}`
                                );
                                hasDefaultImages = true;
                                personData[category.name].people[
                                    myRow
                                ].imageUrl = path.posix.join(
                                    LEADERSHIP,
                                    DEFAULT_FILENAME
                                );
                                // process will exit with error after all tasks complete
                                process.exitCode = 1;
                            });
                        imagePromises.push(imageProcessing);
                    } else {
                        hasDefaultImages = true;
                        // we don't need to include public/ since it is resolved by default
                        personData[category.name].people[myRow].imageUrl =
                            path.posix.join(LEADERSHIP, DEFAULT_FILENAME);
                        console.warn(
                            `${props["uniqname"]} did not add an image.`
                        );
                    }
                    // only increment on rows containing people who will be added
                    ++personIndex;
                }
            }
        });
        if (hasDefaultImages) {
            // copy over the default image only if we have people using it
            fs.copyFileSync(
                DEFAULT_IMAGE,
                path.join(IMAGE_DIR, DEFAULT_FILENAME)
            );
        }
        Promise.all(imagePromises)
            .then(() => {
                console.log(`${imagePromises.length} profile images saved`);
                console.log(
                    `${
                        Object.keys(personData).reduce(
                            (sum, category) =>
                                sum + personData[category].people.length,
                            0
                        ) - imagePromises.length
                    } images missing`
                );
                return writeFile(
                    DATA_FILE,
                    JSON.stringify(personData, undefined, 4)
                );
            })
            .catch((err) => {
                console.error("Failed to write to json file");
                console.error(err);
                process.exitCode = 1;
            });
    });

/**
 * Convert a string into a slug-like format
 * Replace spaces with dashes, casefold letters, and strip out non-alpha-numeric chars
 * @param {string} str First string
 * @return {string} Slugified string
 */
function slugify(str) {
    return str
        .toLowerCase()
        .replaceAll(/ /g, "-")
        .replaceAll(/[^a-z0-9-]/g, "");
}
