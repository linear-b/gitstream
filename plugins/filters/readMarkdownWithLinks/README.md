??? note "Plugin Code: readMarkdownWithLinks"
    ```javascript
    --8<-- "plugins/filters/readMarkdownWithLinks/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

The main use case for this plugin is enhancing LinearB AI code reviews with comprehensive documentation context.

### Basic Usage
```yaml
guidelines: |
  {{ "REVIEW_RULES.md" | readMarkdownWithLinks }}
  
  Additional Context:
  {{ "README.md" | readMarkdownWithLinks(maxDepth=2) }}
```

## Configuration Options

- `followLinks` (boolean, default: `true`): Whether to follow internal markdown links
- `maxDepth` (number, default: `3`): Maximum depth to follow links to prevent excessive recursion

## API

### `readMarkdownWithLinks(filePath, options)`

Returns the combined content of the main file and all linked files as a formatted string.

### `readMarkdown(filePath, options)`

Returns a structured object containing:
- `path`: Absolute path to the file
- `content`: File content
- `error`: Any error encountered
- `linkedFiles`: Array of linked file objects with the same structure

## Example Output
```
=== main.md ===
# Main Document
Content of main document...

  === related.md ===
  # Related Document
  Content of related document...

    === subdoc.md ===
    # Sub Document
    Content of sub document...
```


??? example "gitStream CM Example: readMarkdownWithLinks"
    ```yaml+jinja
    --8<-- "plugins/filters/readMarkdownWithLinks/read_markdown_with_links.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/readMarkdownWithLinks)