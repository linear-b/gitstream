/**
 * @module extractDependabotVersionBump
 * @description Extract version bump information from Dependabot PRs description.
 *              Handles both "Bumps" and "Updates" patterns.
 * @param {string} description - the PR description
 * @returns {string[]} An array with [to, from] versions, or null if no version info found
 * @example {{ pr.description | extractDependabotVersionBump | compareSemver }}
 * @license MIT
**/


module.exports = (desc) => {
  if (desc && desc !== '""' && desc !== "''" ) {
    // Match both "Bumps" and "Updates" patterns with version numbers
    // The regex captures version numbers that follow "from" and "to" keywords
    let parsedDesc = desc;
    try {
      parsedDesc = JSON.parse(desc);
    } catch (e) {
      // If parsing fails, use the description as is
    }
    const regex = /(Bumps|Updates).*?from ([\d\.]+[A-Za-zαß]*) to ([\d\.]+[A-Za-zαß]*)/;
    const matches = regex.exec(parsedDesc);
    if (matches && matches.length == 4) {
      var [_, action, from, to] = matches;
      // Remove trailing dot on the "to" version if present
      if (to && to.length > 0 && to[to.length - 1] === ".") {
        to = to.slice(0, -1);
      }
      // Return [to, from] format to be compatible with compareSemver
      return [to, from];
    }
  }

  return null;
}
