/**
 * Parse dependabot version bump and extract the versions upgraded.
 *
 * This function takes a description string as input and assumes a pattern of `from v1 to v2`.
 * It extracts the new version (v2) and the original version (v1) from the description.
 *
 * @param {string} desc - The description string containing the version bump information.
 * @returns {Array} - An array containing the new version (v2) at index 0 and the original version (v1) at index 1.
 */
module.exports = (desc) => {
  var [_, from, to] = /Bumps.*from ([\d\.]+[A-Za-zαß]*) to ([\d\.]+[A-Za-zαß]*)/.exec(desc);
  // Remove trailing dot on the 'to' version
  if (to[to.length - 1] === ".") {
    to = to.slice(0, -1);
  }

  return [to, from];
}
