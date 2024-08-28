/**
 * @module extractRenovateVersionBump
 * @description Extract version bump information from Renovate PRs description
 * @param {string} description - the PR description
 * @returns {string[]} V1 (to) and V2 (from)
 * @example {{ pr.description | extractRenovateVersionBump | compareMultiSemver }}
 * @license MIT
**/


module.exports = (desc) => {
  const results = [];
  if (desc && desc !== '""' && desc !== "''") {
    const regex =
      /\[[\\]*`([\d\.]+[A-Za-zαß]*)[\\]*` -> [\\]*`([\d\.]+[A-Za-zαß]*)[\\]*`\]/g;
    let matches = null;
    do {
      matches = regex.exec(desc);
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
