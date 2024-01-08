
Usage example, that adds lables based on Orca Secuirty findings.

It will add this label: `orca:{{ item.name }}-{{ item.priority | lower }}`
The color of the label will be red, orange, yellow or blue, according to the highest priority identified. Since the label text has the priority in it, the color will be consitent for each label.

`item.name` has the following values: `introduced-cves`, `iac-misconfigurations`, `exposed-secrets` 
`item.priority` has the following values: `HIGH`, `MEDIUM`, `LOW`, `INFO`

for example, an issue with serects which the has both MEDIUM and LOW prioriry will get this label:
`orca:exposed-secrets-medium` with color orange (`#d93f0b`)

It can be easily edited and adjusted as you like. For example, if you dont like the color, just delete line 20. if you dont like the text of the label edit line 19. If you want different colors edit their hexa values at the bottom.

--8<-- "plugins/filters/extractOrcaFindings/reference.md"

??? note "Plugin Code: extractOrcaFindings"
    ```javascript
    --8<-- "plugins/filters/extractOrcaFindings/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: extractOrcaFindings"
    ```yaml+jinja
    --8<-- "plugins/filters/extractOrcaFindings/extract_orca_findings.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/extractOrcaFindings)
