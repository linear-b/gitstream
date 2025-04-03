<a name="module_generateDescription"></a>

## suggestIssues
A gitStream plugin to suggest issues to link to the PR

![Example PR description](screenshots/suggestIssues.png)

**Returns**: <code>\[String\]</code> - Returns a list of suggested issues
**License**: MIT

| Param  | Type     | Description                                      |
| ------ | -------- | ------------------------------------------------ |
| pr     | `Object` | The pull request object from gitStream's context |
| branch | Object   | The branch object from gitStream's context       |
| apiKey | `string` | The API key used to authenticate requests.       |


**Example**
    
```yaml
{{ pr | suggestIssues(env.LINEARB_TOKEN) }}
```
