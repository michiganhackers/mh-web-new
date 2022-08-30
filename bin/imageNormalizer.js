#!/usr/bin/env node
/**
 * Given a directory or image with optional command line arguments,
 * normalizes it by converting it to a jpeg with a reasonable resolution
 * Warning: I don't know what exactly is happening when you run it multiple times on the same file
 * Default resolution for Carousel is 1024x768
 *
 * Usage
 * $ node imageNormalizer.js FILENAME|DIRECTORY [MAX_WIDTH] [MAX_HEIGHT] [--output FILENAME|DIRECTORY] [--type png|jpg]
 * Example runs
 * $ node imageNormalizer.js src/assets/carousel/
 *      Convert all files in directory to jpg
 * $ node imageNormalizer.js src/assets/c1.png 200 200 --type png
 *      Shrink target file into a 200x200 png if it is larger than 200px in either direction
 *      Will try to preserve aspect ratio, so dimensions aren't always respected.
 * $ node imageNormalizer.js src/assets/c1.png 200
 *      Convert target file into a jpg with a width no wider than 200px
 * $ node imageNormalizer.js src/assets/c1.png --output src/assets/c1_jpg.jpg
 *      Create a new converted file in a new location without modifying the original
 */

"use-strict";

const fs = require("fs");
const path = require("path");
const { Buffer } = require("buffer");
const sharp = require("sharp");

const args = process.argv.slice(2);
const options = { type: "jpg" };
const positional_args = [];
for (let i = 0; i < args.length; ++i) {
    switch (args[i]) {
        case "--output":
            options.output = args[++i];
            break;
        case "--type":
            options.type = args[++i]?.toLowerCase();
            if (!["jpg", "png"].includes(options.type)) {
                throw new Error(`Unknown image type "${options.type}"`);
            }
            break;
        default:
            positional_args.push(args[i]);
            break;
    }
}
if (options.output) {
    const { ext } = path.parse(options.output);
    // ext looks like ".jpg" or ".png", so we need to remove the dot for comparison
    if (ext && ext.slice(1).toLowerCase() !== options.type) {
        console.warn(
            `Output file extension '${ext}' does not match expected conversion type ${options.type}.`
        );
        console.warn(`The extension will be automatically modified.`);
    }
}
if (!fs.existsSync(positional_args[0])) {
    throw new Error("File or directory doesn't exist");
}
const location = positional_args[0];
const inputIsDirectory = fs.lstatSync(location).isDirectory();

if (
    inputIsDirectory &&
    options.output &&
    fs.existsSync(options.output) &&
    !fs.lstatSync(options.output).isDirectory()
) {
    throw new Error("Cannot write entries in a directory to a file");
}
// TODO: if input is directory, output must be directory and then create it if need be
if (
    !inputIsDirectory &&
    options.output &&
    fs.existsSync(options.output) &&
    fs.lstatSync(options.output).isDirectory()
) {
    throw new Error("Cannot write file to a directory");
}

const outputIsDirectory =
    options.output && fs.existsSync(options.output)
        ? fs.lstatSync(options.output).isDirectory()
        : false;

const width = parseInt(positional_args[1]);
const height = parseInt(positional_args[2]);
if (
    (isNaN(width) && positional_args[1] !== undefined) ||
    (isNaN(height) && positional_args[2] !== undefined)
) {
    throw new Error("Dimensions must be numbers");
}

if (inputIsDirectory) {
    const imagePromises = [];
    let failures = 0;
    try {
        const filenames = fs
            .readdirSync(location, { withFileTypes: true })
            .filter((dirent) => dirent.isFile())
            .map((dirent) => dirent.name);
        for (const filename of filenames) {
            imagePromises.push(
                convertImage(
                    path.join(location, filename),
                    width,
                    height,
                    options.type,
                    outputIsDirectory
                        ? path.join(options.output, filename)
                        : null
                ).catch((err) => {
                    ++failures;
                    console.error(
                        `Image operations failed for ${filename}: ${err}`
                    );
                })
            );
        }
    } catch (e) {
        throw new Error(`Failed to read directory '${location}': ${e}`);
    }
    Promise.all(imagePromises).then(() => {
        console.log(`${imagePromises.length - failures} images converted`);
        failures && console.warn(`${failures} images failed to convert`);
    });
} else {
    convertImage(location, width, height, options.type, options.output).catch(
        (e) => console.error(`Failed to convert '${location}': ${e}`)
    );
}

/**
 * Convert the image at filename to the target format, ensuring that it is within the max dimensions.
 * Optionally write the new image to a different location instead of overwriting the existing one.
 * @param {string} filename Input image and the default output (if type is different, it will change the extension)
 * @param {number} [width] Optional max width
 * @param {number} [height] Optional max height
 * @param {"jpg"|"png"} type Target image type
 * @param {string} [output] Output filename. Defaults to `filename`
 * @return {Promise} The file-saving promise
 */
async function convertImage(filename, width, height, type, output) {
    const image = await sharp(Buffer.from(fs.readFileSync(filename))).rotate();
    if (!isNaN(width)) {
        if (!isNaN(height)) {
            await image.resize(width, height, {
                fit: "outside",
                withoutEnlargement: true,
            });
        } else {
            await image.resize(width, null, {
                fit: "outside",
                withoutEnlargement: true,
            });
        }
    }

    switch (type) {
        case "jpg":
            await image.jpeg({
                quality: 100,
                chromaSubsampling: "4:4:4",
                mozjpeg: true,
            });
            break;
        case "png":
            await image.png();
            break;
    }

    const p = path.parse(output || filename);
    const output_filename = path.format({ ...p, base: null, ext: `.${type}` });

    return image.toFile(output_filename);
}
