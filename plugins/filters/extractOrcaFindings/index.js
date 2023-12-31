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
  console.log("ORCA PR", { pr });
  let orcaObject = {
    infrastructure_as_code: { count: null, rating: '' },
    vulnerabilities: { count: null, rating: '' },
    secrets: { count: null, rating: '' },
  };

  // Orca comments are added as PR review
  const orcaComment = pr.reviews.filter(x => x.commenter.includes('orca-security'));

  if (orcaComment.length) {
    const orcaCommentArray = orcaComment[0].content.split('\n');

    var rating = getOrcaPropertyRating(orcaCommentArray, /Infrastructure as Code/, 3);
    orcaObject.infrastructure_as_code = {
      count: rating.high + rating.medium + rating.low + rating.info,
      rating,
    };

    var rating = getOrcaPropertyRating(orcaCommentArray, /Vulnerabilities/, 3);
    orcaObject.vulnerabilities = {
      count: rating.high + rating.medium + rating.low + rating.info,
      rating,
    };

    var rating = getOrcaPropertyRating(orcaCommentArray, /Secrets/, 3);
    orcaObject.secrets = {
      count: rating.high + rating.medium + rating.low + rating.info,
      rating,
    };
  }

  return JSON.stringify(orcaObject);
}