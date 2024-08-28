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


const compareSemver = require('../compareSemver/index.js');

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
console.assert(compareMultiSemver([["1.2.3", "1.2.1"], ["1.3.1", "1.2.3"]]) === 'minor', `compareSemver([["1.2.3", "1.2.1"], ["1.3.1", "1.2.3"]]) == 'minor'`);
console.assert(compareMultiSemver([["1.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) === 'major', `compareMultiSemver([["1.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) === 'major'`);
console.assert(compareMultiSemver([["2.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) === 'major', `compareMultiSemver([["2.2.3", "0.2.1"], ["1.3.1", "1.2.3"]]) === 'major'`);
console.assert(compareMultiSemver([["1.2.3", "1.2.1"], ["1.2.4", "1.2.3"]]) === 'patch', `compareMultiSemver([["1.2.3", "1.2.1"], ["1.2.4", "1.2.3"]]) === 'patch'`);
