<a name="module_extractTerraformChanges"></a>

## extractTerraformChanges

Extract the highest privilege level from modified JIT configurations in Terraform HCL source.diff.files.

**Returns**: Returns `rw` for read-write privileges, `ro` for read-only privileges, or `null` if no privileges found
**License**: MIT

## Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| changes | Array | Yes | `source.diff.files` context |


**Example**

```js
{{ (source.diff.files | extractTerraformChanges) == 'ro' }}
```
