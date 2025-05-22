/**
 * @module suggestIssues
 * @description Fetches ticket recommendations based on given pull request details.
 * @param {object} pr - The pull request object containing title, author, and created_at properties.
 * @param {object} branch - The branch object containing the branch name.
 * @param {string} apiKey - The API key used to authenticate requests.
 * @returns {Array} Returns an array of suggested issues related to the current Pull Request.
 * @example {{ pr | suggestIssues(branch, env.LINEARB_TOKEN) }}
 * @license MIT
**/

const suggestIssues = async (pr, branch, apiKey, callback) => {
  const url =
    "https://public-api.linearb.io/api/v1/inference/get_ticket_recommendation";

  const requestData = {
    request_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, // <-- local UUID per call
    pull_request: {
      title: pr.title, // PR title
      issuer_name: pr.author, // PR author
      created_at: pr.created_at, // PR creation date
      branch_name: branch.name, // PR branch name
    },
  };

  const result = await fetch(url, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("Error:", error));

  if (result && result.recommendations && result.recommendations.jira_tickets) {
    // Extract the first 3 issues
    const issues = result.recommendations.jira_tickets.slice(0, 3);

    // Map to the desired object format containing the issue URL and issue title
    const issuesMarkdown = issues
      .map((issue) => ({
        url: issue.url,
        title: issue.title.replace(/\n/g, "").trim(),
        key: issue.issue_provider_key,
        score: issue.similarity_score,
      }))
      // Map to the desired object format containing the issue URL and issue title
      .map((issue) => `- [ ] [${issue.key}](${issue.url}) ${issue.title} _(score: ${issue.score.toFixed(2)})_ `)
      .join("\\n");
    console.log("suggestedIssues:", {issuesMarkdown});

    return callback(null, issuesMarkdown);
  } else if (result && result.recommendations && Array.isArray(result.recommendations.jira_tickets) && result.recommendations.jira_tickets.length === 0) {
    console.log("No issues found.", JSON.stringify(result, null, 2));
    return callback(null, "No related issues found. The pull request title and the author were used to search the Jira board, but no good match was found.");
  } else {
    console.log("Invalid response structure:", JSON.stringify(result, null, 2) );
    return callback(null, "Error: Service returned an invalid response structure.");
  }
};

module.exports = {
    async: true,
    filter: suggestIssues
}