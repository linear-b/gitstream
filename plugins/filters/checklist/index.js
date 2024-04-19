const checklistFilter = async (empty, branch, files, pr, repo, env, source, callback) => { // made sync temporarily
	// Now that we have all the needed data here, we can use it to build our checklist
	
	/* 
		This is an array of objects, each of which represents a check.
		Not all *must* be true for the PR to be accepted, which is why
		we don't just put them as automation conditions in the .cm file.
	*/
	const checks = [
		{
			title: "low-risk",
			label: "The PR is a low-risk change",
			// our sample definition of a low-risk change is a docs-only PR from designated docs writers
			condition: files.every(file => /docs\//.test(file)) && pr.author_teams.includes("tech-writers")
		},
		{
			title: "has-jira",
			label: "The PR has a Jira reference in the title",
			condition: /\b[A-Za-z]+-\d+\b/.test(pr.title)
		},
		{
			title: "updates-tests",
			label: "The PR includes updates to tests",
			condition: files.some(file => /[^a-zA-Z0-9](spec|test|tests)[^a-zA-Z0-9]/.test(file))
		},
		{
			title: "includes-docs",
			label: "The PR includes changes to the documentation",
			condition: files.some(file => /docs\//.test(file))
		},
		{
			title: "first-time",
			label: "The PR author is a first-time contributor",
			condition: repo.author_age < 1 && repo.age > 0 // if the PR author made their first contirbution on the current day
		},
		{
			title: "requires-opsec",
			label: "The PR doesn't expose any secrets",
			condition: source.diff.files
				.map(file => file.new_content)
				.every(file_content => 
					[
						"MY_SECRET_ENVIRONMENT_VARIABLE"
					].every(env_var => !file_content.includes(env_var)) 
				       // nothing added to any file during this comment contains any of the secret environment variables in this array
				)
		}
	];

	const comment = await Promise.resolve(checks
		.map(check => `- [${check.condition ? "x" : " "}] ${check.label}`)
		.join("\n"));
	
	return callback(
		null, 
		JSON.stringify(comment)
	);
};

module.exports = {
	async: true,
	filter: checklistFilter
}
