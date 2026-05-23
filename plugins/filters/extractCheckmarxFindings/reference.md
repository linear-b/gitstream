<a name="module_extractCheckmarxFindings"></a>

## extractCheckmarxFindings
Extract security findings from Checkmarx PR comments

**Returns**: <code>Object</code> - Findings
Findings.sast: { count: null, severity: '' },
Findings.sca: { count: null, severity: '' },
Findings.kics: { count: null, severity: '' },
**License**: MIT

| Param | Type | Description |
| --- | --- | --- |
| PR | <code>Object</code> | the gitStream's PR context variable |

**Example**
```js
{{ pr | extractCheckmarxFindings }}
```
