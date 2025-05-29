<a name="module_extractOrcaFindings"></a>

## extractOrcaFindings
Extract security issues information from Orca PR reviews

**Returns**: <code>Object</code> - Findings
Findings.infrastructure_as_code: { count: null, priority: '' },
Findings.vulnerabilities: { count: null, priority: '' },
Findings.secrets: { count: null, priority: '' },  
**License**: MIT  

| Param | Type | Description |
| --- | --- | --- |
| PR | <code>Object</code> | the gitStream's PR context variable |

**Example**  
```js
{{ pr | extractOrcaFindings }}
```
