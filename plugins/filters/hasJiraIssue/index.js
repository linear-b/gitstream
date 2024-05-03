/**
 * @module hasJiraIssue
 * @description Check to see if the input string matches a specified field for one or more Jira issues.
 * @param {string} input - The string to search for a Jira task title.
 * @param {string} password - Your Jira API token
 * @param {string} key - The Jira key to search for matches against the input string.
 * @param {string} jiraSpaceName - The name of the Jira space to search for tasks.
 * @param {string} email - The email address associated with the Jira API token.
 * @returns {boolean} Returns true if the input string matches a Jira task title. 
 * @example {{ "https://github.com/{{ repo.owner }}/{{ repo.name }}/pull/{{ pr.number }}" | hasJiraIssue(password, key, jiraSpaceName, email) }}
 * @license MIT
 */
module.exports = {
	async: true,
	filter: async (inputString, password, key, jiraSpaceName, email, callback) => {
		const jql = `"${key}" = "${inputString}"`;
		
    const resp = await fetch(`https://${jiraSpaceName}.atlassian.net/rest/api/2/search`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic ' + btoa(`${email}:${password}`)
			},
			body: JSON.stringify({
				'jql': jql,
				'maxResults': 1,
				"fieldsByKeys": true,
				'fields': [ 'assignee' ]
			})
		});
		const results = await resp.json();
		return callback(null,  !!results.issues?.length);
	}
}