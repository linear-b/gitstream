<a name="module_checklist"></a>

## checklist
Automatically check PRs against a checklist of conditions.
This is useful if you want to ensure that PRs meet certain criteria before they can be merged.

**Returns**: <code>string</code> - Returns a formatted GitHub comment with a checklist of conditions that the PR meets.  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| Input | <code>string</code> | A blank string (no input variable is required) |
| branch | <code>object</code> | The branch context variable. |
| files | <code>object</code> | The files context variable. |
| pr | <code>object</code> | The pr context variable. |
| repo | <code>object</code> | The repo context variable. |
| env | <code>object</code> | The env context variable. |
| source | <code>object</code> | The source context variable. |

**Example**  
```js
- action: add-comment@v1
        args:
        	comment: {{ "" | checklist(branch, files, pr, repo, env, source) }}
```
