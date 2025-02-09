---
title: gitStream Automation - Enforce a Maximum Number of Lines That Can Be Changed in a PR.
description: Automatically enforce a maximum number of lines that can be changed in a PR.
---
# Enforce a Maximum Number of Lines That Can Be Changed in a PR
<!-- --8<-- [start:example]-->
Automatically enforce a maximum number of lines that can be changed in a PR.

![Enforce Changed Line Limit](/automations/standard/enforce-changed-lines-limit/enforce-changed-lines-limit.png)

!!! info "Configuration Description"

**Conditions (all must be true):**

* The PR changes a number of lines that exceeds a specified value.

**Automation Actions:**

* Request changes and post a comment asking the PR author to break up the changes.

<div class="automationExample" markdown="1">
!!! example "Enforce a Maximum Number of Lines That Can Be Changed in a PR"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/enforce-changed-lines-limit/enforce_changed_lines_limit.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/enforce-changed-lines-limit/enforce_changed_lines_limit.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

