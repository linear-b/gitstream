/**
 * Parse dependabot version bump, and extract the versions upgraded 
 *
 * It assumes a pattern `from`` v1 `to`` v2.
 * It returns a list of these 2 items, first the new version and then the original.
 */

module.exports = (desc) => {
  var [_, from, to] = /Bumps.*from ([\d\.]+[A-Za-zαß]*) to ([\d\.]+[A-Za-zαß]*)/.exec(desc);
  // remove trailing dot on to
  if (to[to.length - 1] === ".") {
    to = to.slice(0, -1);
  }

  return [to, from];
}
