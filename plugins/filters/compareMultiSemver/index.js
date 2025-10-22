/**
 * @module compareMultiSemver
 * @description Processes a list of pairs of semantic version numbers and determines the most significant change among them.
 * Each pair consists of two versions to be compared.
 * @param {string[][]} listOfPairs - An array of version pairs, where each pair is an array of two semantic version strings.
 * @returns {string} It returns a string of either:
 * 'major' if any pair has a major version increment.
 * 'minor' if no pair has a major version increment but has a minor version increment.
 * 'patch' if no pair has major or minor version increments but has a patch version increment.
 * 'downgrade' if no pairs have a higher version.
 * 'equal' if all pairs are equal.
 * 'error' if the comparison is abnormal or cannot be determined.
 * @example {{ [["1.2.3", "1.2.1"], ["1.3.1", "1.2.3"]] | compareMultiSemver  == "minor" }}
 * @license MIT
 */

/**
 * Compares two software version numbers (e.g., "1.2.1" or "1.2b") and determines the type of version change.
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
 */
const compareSemver = (v1, v2) => {
  const lexicographical = false;
  const zeroExtend = true;

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

module.exports = (listOfPairs) => {

  const priority = {
    'major': 3,
    'minor': 2,
    'patch': 1,
    'downgrade': 0,
    'equal': -1,
    'error': -2
  };

  let mostSignificantChange = 'equal';

  listOfPairs.forEach(pair => {
    const result = compareSemver(pair);
    if (priority[result] > priority[mostSignificantChange]) {
      mostSignificantChange = result;
    }
  });

  return mostSignificantChange;
}


const compareMultiSemver = require('./index.js');

// Test 1: Should return 'minor'
const test1 = compareMultiSemver([["1.2.3", "1.2.1"], ["1.3.1", "1.2.3"]]);
console.assert(test1 === 'minor', `Test 1 failed: compareMultiSemver([["1.2.3", "1.2.1"], ["1.3.1", "1.2.3"]]) returned '${test1}', expected 'minor'`);
console.log('✓ Test 1 passed: compareMultiSemver([["1.2.3", "1.2.1"], ["1.3.1", "1.2.3"]]) === "minor"');

// Test 2: Should return 'major'
const test2 = compareMultiSemver([["1.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]);
console.assert(test2 === 'major', `Test 2 failed: compareMultiSemver([["1.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) returned '${test2}', expected 'major'`);
console.log('✓ Test 2 passed: compareMultiSemver([["1.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) === "major"');

// Test 3: Should return 'major'
const test3 = compareMultiSemver([["2.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]);
console.assert(test3 === 'major', `Test 3 failed: compareMultiSemver([["2.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) returned '${test3}', expected 'major'`);
console.log('✓ Test 3 passed: compareMultiSemver([["2.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) === "major"');

// Test 4: Should return 'patch'
const test4 = compareMultiSemver([["1.2.3", "1.2.1"], ["1.2.4", "1.2.3"]]);
console.assert(test4 === 'patch', `Test 4 failed: compareMultiSemver([["1.2.3", "1.2.1"], ["1.2.4", "1.2.3"]]) returned '${test4}', expected 'patch'`);
console.log('✓ Test 4 passed: compareMultiSemver([["1.2.3", "1.2.1"], ["1.2.4", "1.2.3"]]) === "patch"');

console.log('\n🎉 All tests passed!');
