/**
 * @module extractTerraformChanges
 * @description Extract the highest privilege level from modified JIT configurations in Terraform HCL files.
 *              Analyzes git diffs to identify which JIT objects were changed and returns the highest
 *              privilege level found (rw > ro).
 * @param {Array} changes - Array of file change objects with diff, original_content, and new_content
 * @returns {string|null} The highest privilege level found ('rw' or 'ro'), or null if no privileges found
 * @example {{ source.diff.files | extractTerraformChanges }}
 * @license MIT
**/

module.exports = (changes) => {
  if (!changes || !Array.isArray(changes) || changes.length === 0) {
    return null;
  }

  let highestPrivilege = null;

  for (const change of changes) {
    if (!change.diff || !change.original_content) {
      continue;
    }

    const changedLines = parseChangedLines(change.diff);
    if (changedLines.length === 0) {
      continue;
    }

    const jitObjects = parseJitObjects(change.original_content);
    const modifiedPrivileges = getModifiedPrivileges(jitObjects, changedLines);

    for (const privilege of modifiedPrivileges) {
      if (privilege === 'rw') {
        return 'rw'; // rw is highest, can return immediately
      } else if (privilege === 'ro' && !highestPrivilege) {
        highestPrivilege = 'ro';
      }
    }
  }

  return highestPrivilege;
};

/**
 * Parse git diff to extract changed line numbers
 * @param {string} diff - Git diff string
 * @returns {Array} Array of changed line numbers (1-based)
 */
function parseChangedLines(diff) {
  const changedLines = [];
  const lines = diff.split('\n');
  let currentLine = 0;

  for (const line of lines) {
    // Parse hunk headers like "@@ -50,7 +50,7 @@"
    const hunkMatch = line.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/);
    if (hunkMatch) {
      currentLine = parseInt(hunkMatch[2], 10);
      continue;
    }

    // Track line numbers for context and additions
    if (line.startsWith(' ') || line.startsWith('+')) {
      if (line.startsWith('+') && !line.startsWith('+++')) {
        changedLines.push(currentLine);
      }
      if (!line.startsWith('-')) {
        currentLine++;
      }
    } else if (line.startsWith('-') && !line.startsWith('---')) {
      changedLines.push(currentLine);
    }
  }

  return changedLines;
}

/**
 * Parse HCL content to extract JIT objects with their line ranges and privileges
 * @param {string} content - HCL file content
 * @returns {Array} Array of JIT objects with line ranges and privileges
 */
function parseJitObjects(content) {
  const lines = content.split('\n');
  const jitObjects = [];
  let inJitsArray = false;
  let braceLevel = 0;
  let currentJit = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNumber = i + 1;

    // Look for the start of jits array
    if (line.trim().includes('jits = [')) {
      inJitsArray = true;
      continue;
    }

    if (!inJitsArray) {
      continue;
    }

    // Track brace levels to identify JIT object boundaries
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;

    if (openBraces > 0 && braceLevel === 0) {
      // Start of new JIT object
      currentJit = {
        startLine: lineNumber,
        endLine: lineNumber,
        privileges: []
      };
      braceLevel += openBraces - closeBraces;
    } else if (currentJit) {
      braceLevel += openBraces - closeBraces;
      currentJit.endLine = lineNumber;

      // Look for privileges in this line
      const privilegeMatch = line.match(/privileges\s*=\s*"(rw|ro)"/);
      if (privilegeMatch) {
        currentJit.privileges.push(privilegeMatch[1]);
      }

      // End of JIT object
      if (braceLevel === 0) {
        jitObjects.push(currentJit);
        currentJit = null;
      }
    }

    // Check if we've left the jits array
    if (line.trim() === ']' && braceLevel === 0) {
      inJitsArray = false;
      break;
    }
  }

  return jitObjects;
}

/**
 * Get privileges from JIT objects that have been modified
 * @param {Array} jitObjects - Array of JIT objects with line ranges
 * @param {Array} changedLines - Array of changed line numbers
 * @returns {Array} Array of privilege strings from modified objects
 */
function getModifiedPrivileges(jitObjects, changedLines) {
  const privileges = [];

  for (const jit of jitObjects) {
    // Check if any changed line falls within this JIT object's range
    const isModified = changedLines.some(lineNum =>
      lineNum >= jit.startLine && lineNum <= jit.endLine
    );

    if (isModified) {
      privileges.push(...jit.privileges);
    }
  }

  return privileges;
}
