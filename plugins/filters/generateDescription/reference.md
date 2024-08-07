<a name="module_generateDescription"></a>

## generateDescription
A gitStream plugin to auto-generate pull request descriptions based on commit messages and other criteria.

![Example PR description](screenshots/generate-pr-description-example.png)

**Returns**: <code>Object</code> - Returns the generated PR description.
**License**: MIT

| Param | Type | Description |
| --- | --- | --- |
| branch | <code>Object</code> | The current branch object. |
| pr | <code>Object</code> | The pull request object. |
| repo | <code>Object</code> | The repository object. |
| source | <code>Object</code> | The source object containing diff information. |
| callback | <code>function</code> | The callback function. |

**Example**
```js
{{ branch | generateDescription(pr, repo, source) }}
```
