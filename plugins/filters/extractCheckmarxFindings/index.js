/**
 * @module extractCheckmarxFindings
 * @description Extract security findings from Checkmarx PR comments
 * @param {Object} pr - the gitStream's PR context variable
 * @returns {Object} Findings
 * Findings.sast: { count: null, severity: '' },
 * Findings.sca: { count: null, severity: '' },
 * Findings.kics: { count: null, severity: '' },
 * @example {{ pr | extractCheckmarxFindings }}
 * @license MIT
**/

const SCANNERS = ['sast', 'sca', 'kics'];
const SEVERITY_LEVELS = ['critical', 'high', 'medium', 'low', 'info'];

function emptySeverity() {
  return { critical: 0, high: 0, medium: 0, low: 0, info: 0 };
}

function emptyFindings() {
  return { count: null, severity: '' };
}

function detectScanner(line) {
  if (/\b(IaC[\s-]*Security|KICS)\b/i.test(line)) return 'kics';
  if (/\bSAST\b/i.test(line)) return 'sast';
  if (/\bSCA\b/i.test(line)) return 'sca';
  return null;
}

function parseCheckmarxComment(content) {
  const findings = {};
  SCANNERS.forEach(s => { findings[s] = emptyFindings(); });

  const severityCounts = {};
  SCANNERS.forEach(s => { severityCounts[s] = emptySeverity(); });

  const lines = content.split('\n');
  let currentScanner = null;
  let inNewIssues = false;

  for (const line of lines) {
    // Track whether we're in a "New Issues" or "Fixed Issues" section.
    // Only count findings from the "New Issues" section.
    if (/\bNew\s+Issues\b/i.test(line)) {
      inNewIssues = true;
    } else if (/\bFixed\s+Issues\b/i.test(line)) {
      inNewIssues = false;
    }

    // Update current scanner section when we see a scanner name
    const scanner = detectScanner(line);
    if (scanner) {
      currentScanner = scanner;
    }

    // Match table rows where the first cell contains a severity level
    // Checkmarx tables use: | SEVERITY | Issue | ... |
    if (!inNewIssues) continue;
    const tableMatch = line.match(/^\s*\|\s*(CRITICAL|HIGH|MEDIUM|LOW|INFO)\b/i);
    if (tableMatch && currentScanner) {
      const level = tableMatch[1].toLowerCase();
      severityCounts[currentScanner][level]++;
    }
  }

  SCANNERS.forEach(s => {
    const counts = severityCounts[s];
    const total = counts.critical + counts.high + counts.medium + counts.low + counts.info;
    findings[s] = { count: total, severity: counts };
  });

  return findings;
}

module.exports = (pr) => {
  let checkmarxObject = {};
  SCANNERS.forEach(s => { checkmarxObject[s] = emptyFindings(); });

  // Checkmarx comments can appear as PR comments or reviews
  const checkmarxComment = pr.comments
    .filter(x => x.commenter.includes('checkmarx'))
    .concat(pr.reviews.filter(x => x.commenter.includes('checkmarx')));

  if (checkmarxComment.length) {
    const latestComment = checkmarxComment[checkmarxComment.length - 1].content;
    checkmarxObject = parseCheckmarxComment(latestComment);
  }

  return JSON.stringify(checkmarxObject);
}
