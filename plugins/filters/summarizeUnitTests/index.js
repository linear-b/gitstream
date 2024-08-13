/*
- @module summarizeUnitTests
- @description Provide a summary of the unit tests contained in a PR.
- This is useful if you want gitStream to post summary comments.
- @param {Object} Input - Accepts the output of source.diff.files
- @param {String} testsDirectory - The directory that contains unit tests
- @param {String} testsExtension - The extension used by the unit test framework.
- @param {List[String]} fileTypes - A list of file types to check for tests.
- @returns {string} - A summary of the unit tests in markdown format
- @example {{ source.diff.files | summarizeUnitTests(testsDirectory=testsDirectory, testsExtension=testsExtension, requiredTestExtension=".js" ) }}
- @license MIT
*/

const commentLine = (filename, content) => `<details>
<summary>${filename}</summary>

\`\`\`
${content}
\`\`\`
</details>`;

const summarizeUnitTests = async (files, keywords, callback) => {
	let affectedFilesComment = "";
	let testFinderComment = "";
	
	const affectedFiles = files.filter(file => 
		file.original_file.startsWith(keywords.testsDirectory)
		|| file.new_file.startsWith(keywords.testsDirectory)
		|| file.original_file.endsWith(keywords.testsExtension)
		|| file.new_file.endsWith(keywords.testsExtension)
	);
	if (affectedFiles.length != 0) {
		let testFileLines = {
			New: [],
			Updated: [],
			Renamed: []
		};
		affectedFiles.forEach(file => {
			const line = commentLine(file.new_file, file.new_content);
			if (file.new_file == file.original_file) testFileLines.Updated.push(line);
			else if (!file.original_file) testFileLines.New.push(line);
			else testFileLines.Renamed.push(line);
		});
	
		affectedFilesComment = `## Changes to tests
Below are all the changes that this PR made to identifiable tests.

${
	Object
		.entries(testFileLines)
		.map(([type, arr]) => arr.length
			? [`### ${type} Tests - ${arr.length}`, ...arr].join("\n\n")
			: ""
		)
		.filter(section => !!section) // filter out empty sections
		.join("\n\n\n")
}`;
		
	}

	if (Array.isArray(keywords.fileTypes) && !!keywords.fileTypes.length && !!keywords.testsExtension) {
		let needTestFiles = {};
		files.forEach(file => {
			keywords.fileTypes.forEach(ext => {
				if (file.new_file.endsWith(ext)) {
					needTestFiles[ext] = !needTestFiles[ext] 
						? [file.new_file] 
						: [...needTestFiles[ext], file.new_file];
				}
			});
		});

		const newFilePaths = files.map(file => file.new_file);
		testFinderComment = [
			`## Files modified by this PR with extension in ${JSON.stringify(keywords.fileTypes)}`,
			...(
				Object
					.entries(needTestFiles)
					.map(([ext, path]) => {
						const testPath = path.slice(0, path.lastIndexOf(ext)) + keywords.testsExtension;
						return newFilePaths.includes(testPath)
							? `- ${path} -> test found at ${testPath} was modified or added by this PR`
							: `- ${path} -> no matching test was modified by this PR`
					})
			)
		].join("\n");
	}

	const comment = [affectedFilesComment, testFinderComment].filter(x => !!x).join("\n\n\n");
	if (!comment) return callback(null, ""); // no tests have been added or modified
	else return callback(
		null, 
		JSON.stringify(comment)
	);
};

module.exports = {
	async: true,
	filter: summarizeUnitTests
}