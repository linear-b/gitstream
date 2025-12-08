<a name="module_readMarkdownWithLinks"></a>

## readMarkdownWithLinks
Reads a markdown file and follows internal links to create a comprehensive document view. Prevents circular references and supports configurable depth limits.

**Returns**: <code>string</code> - Combined content of the file and all linked files with headers, or structured object if structured option is true  
**License**: MIT  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filePath | <code>string</code> |  | Path to the markdown file to read |
| [options] | <code>Object</code> | <code>{}</code> | Configuration options for link following |
| [options.followLinks] | <code>boolean</code> | <code>true</code> | Whether to follow internal markdown links |
| [options.maxDepth] | <code>number</code> | <code>3</code> | Maximum depth to follow links to prevent excessive recursion |
| [options.structured] | <code>boolean</code> | <code>false</code> | Return structured data instead of combined text |

**Example**  
```js
{{ "docs/README.md" | readMarkdownWithLinks }}
```
**Example**  
```js
{{ "docs/README.md" | readMarkdownWithLinks(maxDepth=2) }}
```
