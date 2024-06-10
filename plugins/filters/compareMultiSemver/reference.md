<a name="module_compareSemver"></a>

## compareMultiSemver
Processes a list of pairs of semantic version numbers and determines the most significant change among them.

**Returns**: <code>string</code> - It returns a string of either:
'major' if any pair has a major version increment.
'minor' if no pair has a major version increment but has a minor version increment.
'patch' if no pair has major or minor version increments but has a patch version increment.
'downgrade' if no pairs have a higher version.
'equal' if all pairs are equal.
'error' if the comparison is abnormal or cannot be determined.

**License**: MIT

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| listOfPairs | <code>Array.&lt;Array&gt;</code> |  | An array of version pairs, where each pair is an array of two semantic version strings.|

**Example**
```js
{{ [["1.2.3", "0.2.1"], ["1.3.1", "1.2.3"]] | compareMultiSemver  == "major" }}
```
