<a name="module_sortFiles"></a>

## sortFiles
Sorts PR file metadata by specified directory.

**Returns**: <code>object</code> - Returns an object containing a list of lists of FileDiff objects for each subdirectory under the specified directory.  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| Input | <code>string</code> | A list containing FileDiff objects. |
|  | <code>string</code> | The directory to sort by. |

**Example**  
```js
{{ source.diff.files | sortFiles("some/directory") }}
```
