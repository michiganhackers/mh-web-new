/**
 * Calculate the Optimal string alignment distance between two strings
 * Code adapted from https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance#Optimal_string_alignment_distance
 * @param {string} a First string
 * @param {string} b Second string
 * @return {number} Edit distance between the strings
 */
export function OSADistance(a, b) {
  const d = new Array(a.length + 1)
    .fill(0)
    .map(() => new Array(b.length + 1).fill(0));
  for (let i = 0; i < a.length + 1; ++i) {
    d[i][0] = i;
  }
  for (let j = 0; j < b.length + 1; ++j) {
    d[0][j] = j;
  }

  for (let i = 1; i < a.length + 1; ++i) {
    for (let j = 1; j < b.length + 1; ++j) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      // the algorithm assumes one-indexed strings
      //  so we one-index the parts interacting with d
      //  and zero-index the strings
      d[i][j] = Math.min(
        d[i - 1][j] + 1, // deletion
        d[i][j - 1] + 1, // insertion
        d[i - 1][j - 1] + cost // substitution
      );
      //transposition
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}
