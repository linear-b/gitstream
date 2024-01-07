/**
 * @module extractOrcaFindings
 * @description Extract security issues information from Orca PR reviews
 * @param {Object} pr - the gitStream's PR context variable
 * @returns {Object} Findings
 * Findings.infrastructure_as_code: { count: null, priority: '' },
 * Findings.vulnerabilities: { count: null, priority: '' },
 * Findings.secrets: { count: null, priority: '' },
 * @example {{ pr | extractOrcaFindings }}
 * @license MIT
**/


function getOrcaPropertyRating(lines, lineIdentifierRegex, findingsCellIndex) {
  const matches = lines.filter(x => x.match(lineIdentifierRegex));
  const [firstMatch] = matches;
  const cells = firstMatch.split('|');
  const [_, high, medium, low, info] = /"High"> ([\d]+).*"Medium"> ([\d]+).*"Low"> ([\d]+).*"Info"> ([\d]+)/
    .exec(cells[findingsCellIndex])
    .map(x => parseInt(x));
  return {high, medium, low, info};
}

module.exports = (pr) => {
  let orcaObject = {
    infrastructure_as_code: { count: null, priority: '' },
    vulnerabilities: { count: null, priority: '' },
    secrets: { count: null, priority: '' },
  };

  // Orca comments are added as PR review
  const orcaComment = pr.reviews.filter(x => x.commenter.includes('orca-security'));

  if (orcaComment.length) {
    const orcaCommentArray = orcaComment[orcaComment.length - 1].content.split('\n');

    var priority = getOrcaPropertyRating(orcaCommentArray, /Infrastructure as Code/, 3);
    orcaObject.infrastructure_as_code = {
      count: priority.high + priority.medium + priority.low + priority.info,
      priority,
    };

    var priority = getOrcaPropertyRating(orcaCommentArray, /Vulnerabilities/, 3);
    orcaObject.vulnerabilities = {
      count: priority.high + priority.medium + priority.low + priority.info,
      priority,
    };

    var priority = getOrcaPropertyRating(orcaCommentArray, /Secrets/, 3);
    orcaObject.secrets = {
      count: priority.high + priority.medium + priority.low + priority.info,
      priority,
    };
  }

  return JSON.stringify(orcaObject);
}