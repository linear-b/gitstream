<a name="module_getCodeowners"></a>

## getCodeowners
Resolves the PR's code owners based on the repository's CODEOWNERS file

**Returns**: <code>Array.&lt;string&gt;</code> - user names  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| files | <code>Array.&lt;string&gt;</code> | the gitStream's files context variable |
| pr | <code>Object</code> | the gitStream's pr context variable |
| token | <code>string</code> | access token with repo:read scope, used to read the CODEOWNERS file |

**Example**  
```js
{{ files | getCodeowners(pr, env.CODEOWNERS_TOKEN) }}
```
