/**
 * @module extractRenovateVersionBump
 * @description Extract version bump information from Renovate PRs description
 * @param {string} description - the PR description
 * @returns {string[]} V1 (to) and V2 (from)
 * @example {{ pr.description | extractRenovateVersionBump | compareMultiSemver }}
 * @license MIT
**/

const VERSION_BUMP_REGEX = /\[[\\]*`([\d\.]+[A-Za-z\u03B1-\u03C9\u00DF]*)[\\]*` -> [\\]*`([\d\.]+[A-Za-z\u03B1-\u03C9\u00DF]*)[\\]*`\]/g;

module.exports = (desc) => {
  const results = [];
  if (desc && desc !== '""' && desc !== "''") {
    VERSION_BUMP_REGEX.lastIndex = 0;
    let matches = null;
    do {
      matches = VERSION_BUMP_REGEX.exec(desc);
      if (matches?.length === 3) {
        let [_, from, to] = matches;
        // remove trailing dot on to
        if (to.at(-1) === ".") {
          to = to.slice(0, -1);
        }
        results.push([to, from]);
      }
    } while (matches !== null);
  }
  return results;
}
