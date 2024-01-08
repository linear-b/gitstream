---
title: gitStream Plugin - filterName
description: Indicate if a user is included in a specified list.
---
<!--
This is a template file for a gitStream plugin README.md files

In a nutshell, the custom filter pages are published under /docs/plugins, and all associated content and examples are imported via associated files inside that directory.

How to use this template.

1. Create a README.md file inside the plugin's directory and copy/paste the content of this file into it.
1. Find a replace the strings below with the appropriate information


Here are the strings to replace

- plugins/filters/filterName/ - change this to match the directory of the plugin. This should match the function exported in the plugin's index.js
- filterName - This should match the function exported in the plugin's index.js 
- filter_name - This should match the name of CM example file that is included with the plugin.
-->


--8<-- "plugins/filters/filterName/reference.md"

??? note "Plugin Code: filterName"
    ```javascript
    --8<-- "plugins/filters/filterName/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: filterName"
    ```yaml+jinja
    --8<-- "plugins/filters/filterName/filter_name.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/filterName)
