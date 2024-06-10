/**
 * @module compareSemver
 * @description Compares two software version numbers (e.g., "1.2.1" or "1.2b") and determines the type of version change.
 * The first version to be compared, and the second are passed as argument 1 and 2 or as array of 2 items.
 * When V1 > V2 the it means and upgrade.
 * @param {string[]} versions - V1 and V2 in Semver format
 * @returns {string} It returns a string of either:
 * 'major' if the major version is incremented.
 * 'minor' if the minor version is incremented.
 * 'patch' if the patch version is incremented.
 * 'downgrade' if the second version is lower than the first.
 * 'equal' if both versions are equal.
 * 'error' if the comparison is abnormal or cannot be determined.
 * @example {{ ["1.2.3", "1.2.1"] | compareSemver  == "patch" }}
 * @license MIT
**/


module.exports = (v1, v2) => {
  let options = {};
  const { lexicographical = false, zeroExtend = true } = options;

  // support array as input
  if (Array.isArray(v1) && v2 === undefined) {
    [v1, v2] = v1; // Destructure the first two elements of the array into v1 and v2
  }

  let v1parts = (v1 || "0").split('.');
  let v2parts = (v2 || "0").split('.');

  const isValidPart = x => lexicographical ? /^\d+[A-Za-zαß]*$/.test(x) : /^\d+[A-Za-zαß]?$/.test(x);

  if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
    return 'error';
  }

  if (zeroExtend) {
    const maxLength = Math.max(v1parts.length, v2parts.length);
    v1parts = [...v1parts, ...Array(maxLength - v1parts.length).fill("0")];
    v2parts = [...v2parts, ...Array(maxLength - v2parts.length).fill("0")];
  }

  const convertPart = x => {
    const match = /[A-Za-zαß]/.exec(x);
    return Number(match ? x.replace(match[0], "." + x.charCodeAt(match.index)) : x);
  };

  if (!lexicographical) {
    v1parts = v1parts.map(convertPart);
    v2parts = v2parts.map(convertPart);
  }

  for (let i = 0; i < v1parts.length; i++) {
    if (v1parts[i] !== v2parts[i]) {
      if (v1parts[i] < v2parts[i]) {
        return 'downgrade';
      }
      switch (i) {
        case 0: return 'major';
        case 1: return 'minor';
        case 2: return 'patch';
        default: return 'error';
      }
    }
  }

  return 'equal';
}


const compareSemver = require('./index.js');
console.assert(compareSemver(["1.2.3", "1.2.1"]) === 'patch', `compareSemver(["1.2.3", "1.2.1"]) == 'patch'`);
console.assert(compareSemver(["1.2.0", "1.2.1"]) === 'downgrade', `compareSemver(["1.2.0", "1.2.1"]) === downgrade'`);
console.assert(compareSemver(["1.3.0", "1.2.1"]) === 'minor', `compareSemver(["1.3.0", "1.2.1"]) == 'minor'`);
console.assert(compareSemver(["2.0.0", "1.2.1"]) === 'major', `compareSemver(["2.0.0", "1.2.1"]) == 'major'`);
console.assert(compareSemver(["1.2.1", "1.2.1"]) === 'equal', `compareSemver(["1.2.1", "1.2.1"]) == 'equal'`);
console.assert(compareSemver(["1.2b", "1.2.1"]) === 'minor', `compareSemver(["1.2b", "1.2.1"]) == 'error'`);
console.assert(compareSemver(["1.2.0", "1.2"]) === 'equal', `compareSemver(["1.2.0", "1.2"]) == 'equal'`);
console.assert(compareSemver(["1.2.1.0", "1.2.1"]) === 'equal', `compareSemver(["1.2.1.0", "1.2.1"]) == 'equal'`);
console.assert(compareSemver(["1.2.1.0a", "1.2.1"]) === 'error', `compareSemver(["1.2.1.0a", "1.2.1"]) === downgrade'`);
