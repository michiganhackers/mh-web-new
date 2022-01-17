/**
 * Calculate the Damerau–Levenshtein distance between two strings
 * Code adapted from https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance#Optimal_string_alignment_distance
 * @param a {string}
 * @param b {string}
 * @return editDistance {number}
 */
export function OSADistance(a, b) {
    const d = new Array(a.length + 1).fill(0).map(_ => new Array(b.length + 1).fill(0));
    for (let i = 0; i < a.length; ++i) {
        d[i][0] = i;
    }
    for (let j = 0; j < b.length; ++j) {
        d[0][j] = j;
    }

    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < b.length; ++j) {
            const cost = a[i] === b[j] ? 0 : 1;
            // the algorithm assumes one-indexed strings
            //  so we one-index the parts interacting with d
            //  and zero-index the strings
            const i1 = i + 1;
            const j1 = j + 1;
            d[i1][j1] = Math.min(
                d[i1 - 1][j1] + 1, // deletion
                d[i1][j1 - 1] + 1,        // insertion
                d[i1 - 1][j1 - 1] + cost  // substitution
            );
            //transposition
            if (i > 1 && j > 1 && a[i] === b[j - 1] && a[i - 1] === b[j]) {
                d[i1][j1] = Math.min(
                    d[i][j1],
                    d[i1 - 2][j1 - 2] + 1
                );
            }
        }
    }
    return d[a.length][b.length];
}
