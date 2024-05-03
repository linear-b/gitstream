<a name="module_hasJiraIssue"></a>

## hasJiraIssue
Check to see if the input string matches a specified field for one or more Jira issues.

**Returns**: <code>boolean</code> - Returns true if the input string matches a Jira task title.  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The string to search for a Jira task title. |
| password | <code>string</code> | Your Jira API token |
| key | <code>string</code> | The Jira key to search for matches against the input string. |
| jiraSpaceName | <code>string</code> | The name of the Jira space to search for tasks. |
| email | <code>string</code> | The email address associated with the Jira API token. |

**Example**  
```js
{{ "https://github.com/{{ repo.owner }}/{{ repo.name }}/pull/{{ pr.number }}" | hasJiraIssue(password, key, jiraSpaceName, email) }}
```
