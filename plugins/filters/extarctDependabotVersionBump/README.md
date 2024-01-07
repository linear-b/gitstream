---
title: gitStream Plugin - extarctDependabotVersionBump
description: Extract version bump information from Dependabot PRs description.
---

--8<-- "plugins/filters/extarctDependabotVersionBump/reference.md"

??? note "Plugin Code: extarctDependabotVersionBump"
    ```javascript
    --8<-- "plugins/filters/extarctDependabotVersionBump/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: extarctDependabotVersionBump"
    ```yaml+jinja
    --8<-- "plugins/filters/extarctDependabotVersionBump/extarct_dependabot_version_bump.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/extarctDependabotVersionBump)