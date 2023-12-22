<a name="module_isGitstreamUser"></a>

## isGitstreamUser
Returns true if the username that is passed to this function is specified in a predefined list of users. 
This is useful if you want gitStream automations to run only for specified users.

**Returns**: <code>boolean</code> - Returns true if the user is specified in the gitstreamUsers list, otherwise false.  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | The GitHub username to check. |

**Example**  
```js
{{ pr.author | isGitStreamUser }}
```
