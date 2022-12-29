/**
 * Convert a string into a slug-like format
 * Replace spaces with dashes, casefold letters, and strip out non-alpha-numeric chars
 * @param {string} str First string
 * @return {string} Slugified string
 */
export function slugify(str) {
    return str
        .toLowerCase()
        .replaceAll(/ /g, "-")
        .replaceAll(/[^a-z0-9-]/g, "");
}
