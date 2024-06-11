<a name="module_checklist"></a>

## summarizeUnitTests

Generate a comment that summarizes the updates to unit tests. The comment includes:

- Total number of new test files and updates to existing test files (discovered with <code>testsDirectory</code> and <code>testsExtension</code>)
- A list of the new test files with an expandable box containing the complete code (discovered with <code>testsDirectory</code> and <code>testsExtension</code>)
- A list of updated code files in the PR with indicators to show if there is a corresponding unit test (discovered with <code>fileTypes</code> and <code>testsExtension</code>)

**Returns**: <code>string</code> - Returns a formatted GitHub comment with information about updated code and test files.  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>object</code> | The files context variable. |
| keywords | <code>object</code> | An object containing the optional keys <code>testsDirectory</code> (the filepath of the directory where the tests are stored, as a string) and/or <code>testsExtension</code> (the extension of the test files specifically, as a string) and/or <code>fileTypes</code> (an array of the file extensions as strings that are monitored for changes) |

Notes:

- The file extensions are compared against each changed filepath with the JavaScript function <code>String.endsWith()</code>, so how much of the extension you provide and whether you include the dot before the extension is up to you.
- If you include the <code>fileTypes</code> array to find all the files with those extensions that need tests, you need to include <code>testsExtension</code> for the function to determine what the corresponding test file would be and see if it exists.


**Example**  
```js
- action: add-comment@v1
        args:
        	comment: {{ "" | checklist(branch, files, pr, repo, env, source) }}
```