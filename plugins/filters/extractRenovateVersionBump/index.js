/**
 * @module extractRenovateVersionBump
 * @description Extract version bump information from Renovate PRs description
 * @param {string} description - the PR description
 * @returns {string[]} V1 (to) and V2 (from)
 * @example {{ pr.description | extractRenovateVersionBump | compareMultiSemver }}
 * @license MIT
**/


module.exports = (desc) => {
  let results = [];
  if (desc && desc !== '""' && desc !== "''" ) {
    const regex = /\[[\\]*`([\d\.]+[A-Za-zαß]*)[\\]*` -> [\\]*`([\d\.]+[A-Za-zαß]*)[\\]*`\]/g;

    let matches = null;
    do {
      matches = regex.exec(desc);
      if (matches && matches.length == 3) {
        var [_, from, to] = matches;
        // remove trailing dot on to
        if (to[to.length - 1] === ".") {
          to = to.slice(0, -1);
        }
        results.push([to, from]);
      }
    } while(matches !== null);
  }

  return results;
}
