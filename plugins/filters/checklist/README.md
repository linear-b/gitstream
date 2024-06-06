--8<-- "plugins/filters/checklist/reference.md"

With this plugin, you can easily customize the checklist using the object in the JavaScript code. To add a new check to the list, just add a new object with a descriptive `title` for your own benefit, a `label` that'll get posted in the comment, and the `condition` that, if true, would cause the entry in the checklist to be checked off.

??? note "Plugin Code: checklist"
    ```javascript
    --8<-- "plugins/filters/checklist/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: checklist"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/pr_checklist_general.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/checklist)


