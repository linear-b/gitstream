module.exports = {
	async: true,
	filter: async (inputString, password, callback) => {
		const jql = `key = '${inputString}'`;
    
    // the following is non-sensitive information, so it's alright to put it here. 
    // it's the password specifically that must be loaded through a secret environment variable.
    const email = `emailhere@example.com`;
    const jiraSpaceName = `jiraSpaceName`;
		
    const resp = await fetch('https://${jiraSpaceName}.atlassian.net/rest/api/2/search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Basic ' + btoa(`${email}:${password}`)
			},
			body: JSON.stringify({
				'jql': jql,
				'maxResults': 1,
				'fields': [ 'assignee' ]
			})
		});

		const results = await resp.json();
		return callback(null,  !!results.issues?.length);
	}
}
