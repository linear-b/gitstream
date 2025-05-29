<a name="module_extractRenovateVersionBump"></a>

## extractRenovateVersionBump
Extract version bump information from Renovate PRs description

**Returns**: <code>Array.&lt;string&gt;</code> - V1 (to) and V2 (from)
**License**: MIT

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | the PR description |

**Example**
```js
{{ pr.description | extractRenovateVersionBump | compareMultiSemver }}
```
