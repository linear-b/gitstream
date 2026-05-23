--8<-- "plugins/filters/extractCheckmarxFindings/reference.md"

Usage example, that adds labels based on Checkmarx scan findings.

??? note "Plugin Code: extractCheckmarxFindings"
    ```javascript
    --8<-- "plugins/filters/extractCheckmarxFindings/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: extractCheckmarxFindings"
    ```yaml+jinja
    --8<-- "plugins/filters/extractCheckmarxFindings/extract_checkmarx_findings.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/extractCheckmarxFindings)
