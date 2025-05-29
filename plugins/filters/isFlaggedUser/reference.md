<a name="module_isFlaggedUser"></a>

## isFlaggedUser
Returns true if the username that is passed to this function is specified in a predefined list of users. 
This is useful if you want gitStream automations to run only for specified users.

**Returns**: <code>boolean</code> - Returns true if the user is specified in the flaggedUsers list, otherwise false.  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| Input | <code>string</code> | The GitHub username to check. |

**Example**  
```js
{{ pr.author | isFlaggedUser }}
```
