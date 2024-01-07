---
title: gitStream Plugin - compareSemver
description: Compares two software version numbers (e.g., "1.2.1" or "1.2b") and determines the type of version change.
---

--8<-- "plugins/filters/compareSemver/reference.md"

??? note "Plugin Code: compareSemver"
    ```javascript
    --8<-- "plugins/filters/compareSemver/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: compareSemver"
    ```yaml+jinja
    --8<-- "plugins/filters/compareSemver/compare_semver.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/compareSemver)