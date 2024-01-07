---
title: gitStream Plugin - extarctSnykVersionBump
description: Extract version bump information from Snyk PRs description.
---

--8<-- "docs/plugins/filters/extarctSnykVersionBump/reference.md"

??? note "Plugin Code: extarctSnykVersionBump"
    ```javascript
    --8<-- "docs/plugins/filters/extarctSnykVersionBump/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: extarctSnykVersionBump"
    ```yaml+jinja
    --8<-- "docs/plugins/filters/extarctSnykVersionBump/extarct_snyk_version_bump.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/docs/plugins/filters/extarctSnykVersionBump)