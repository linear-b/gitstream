/**
 * @module extractSnykVersionBump
 * @description Extract version bump information from Snyk PRs description
 * @param {string} description - the PR description
 * @returns {string[]} V1 (to) and V2 (from)
 * @example {{ pr.description | extractSnykVersionBump | compareSemver }}
 * @license MIT
**/



module.exports = (desc) => {
  if (desc && desc !== '""' && desc !== "''" ) {    
    const matches = /Upgrade.*from ([\d\.]+[A-Za-zαß]*) to ([\d\.]+[A-Za-zαß]*)/.exec(desc);
    if (matches && matches.length == 3) {
      var [_, from, to] = matches;
      // remove trailing dot on to
      if (to[to.length - 1] === ".") {
        to = to.slice(0, -1);
      }
      return [to, from];
    }
  }

  return null;
}
