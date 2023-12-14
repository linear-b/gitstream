/**
 * Compares two software version numbers and determines the type of version change.
 *
 * This is can be useful if you want to auto-approve specific types of Dependabot or Renovate updates, 
 * or provide dependency update information to users
 * 
 * The first version to be compared is passed as v1, and the second version is passed as v2.
 * If v1 > v2, it means an upgrade.
 *
 * The options argument is optional and can include the following flags:
 *   - lexicographical: (true/[false]) compares each part of the version strings lexicographically instead of naturally.
 *                      This allows suffixes such as "b" or "dev", but it will cause "1.10" to be considered smaller than "1.2".
 *   - zeroExtend: ([true]/false) changes the result if one version string has fewer parts than the other.
 *                 If set to true, the shorter string will be padded with "zero" parts instead of being considered smaller.
 *
 * The function returns a string indicating the type of version change:
 *   - 'major' if the major version is incremented.
 *   - 'minor' if the minor version is incremented.
 *   - 'patch' if the patch version is incremented.
 *   - 'downgrade' if the second version is lower than the first.
 *   - 'equal' if both versions are equal.
 *   - 'error' if the comparison is abnormal or cannot be determined.
 *
 * Examples:
 *   - compareVersions("1.2.1", "1.2.2") returns 'patch'
 *   - compareVersions("2.0.0", "1.9.0") returns 'major'
 *   - compareVersions("1.2.3", "1.2.3") returns 'equal'
 *
 * @param {string} v1 - The first version to compare.
 * @param {string} v2 - The second version to compare.
 * @param {object} [options] - Optional flags that affect comparison behavior.
 * @param {boolean} [options.lexicographical=false] - Whether to compare each part of the version strings lexicographically.
 * @param {boolean} [options.zeroExtend=true] - Whether to pad the shorter version string with "zero" parts.
 * @returns {string} - The type of version change.
 */

module.exports = (v1, v2, options = {}) => {

  // support array as input 
  if (Array.isArray(v1) && v2 === undefined) {
    [v1, v2] = v1; // Destructure the first two elements of the array into v1 and v2
  }

  const { lexicographical = false, zeroExtend = true } = options;
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
