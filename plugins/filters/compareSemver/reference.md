<a name="module_compareSemver"></a>

## compareSemver
Compares two software version numbers (e.g., "1.2.1" or "1.2b") and determines the type of version change.
The first version to be compared, and the second are passed as argument 1 and 2 or as array of 2 items. 
When V1 > V2 the it means and upgrade.

**Returns**: <code>string</code> - It returns a string of either:
'major' if the major version is incremented.
'minor' if the minor version is incremented.
'patch' if the patch version is incremented.
'downgrade' if the second version is lower than the first.
'equal' if both versions are equal.
'error' if the comparison is abnormal or cannot be determined.  
**License**: MIT  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| versions | <code>Array.&lt;string&gt;</code> |  | V1 and V2 in Semver format |
| [lexicographical] | <code>boolean</code> | <code>false</code> | compares each part of the version strings lexicographically instead of naturally;  this allows suffixes such as "b" or "dev" but will cause "1.10" to be considered smaller than "1.2". |
| [zeroExtend] | <code>boolean</code> | <code>true</code> | changes the result if one version string has less parts than the other. In this case the shorter string will be padded with "zero" parts instead of being considered smaller. |

**Example**  
```js
{{ ["1.2.1", "1.2.3"] | compareSemver  == "patch" }}
```
