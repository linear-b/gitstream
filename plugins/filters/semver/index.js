/**
 * Compares two software version numbers (e.g., "1.2.1" or "1.2b") and determines the type of version change.
 *
 * The first version to be compared, and the second are passed as argument 1 and 2 or as array of 2 items. 
 * When v1 > v2 the it means and upgrade.
 * 
 * The options arument is optional and flags that affect comparison behavior:
 *   lexicographical: (true/[false]) compares each part of the version strings lexicographically instead of naturally; 
 *                    this allows suffixes such as "b" or "dev" but will cause "1.10" to be considered smaller than "1.2".
 *   zeroExtend: ([true]/false) changes the result if one version string has less parts than the other. In
 *               this case the shorter string will be padded with "zero" parts instead of being considered smaller.
 *
 * It returns a string of either:
 *   'major' if the major version is incremented.
 *   'minor' if the minor version is incremented.
 *   'patch' if the patch version is incremented.
 *   'downgrade' if the second version is lower than the first.
 *   'equal' if both versions are equal.
 *   'error' if the comparison is abnormal or cannot be determined.
 */

module.exports = (v1, v2, options = {}) => {
  console.log("SEMVER", {v1, v2, options});

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
