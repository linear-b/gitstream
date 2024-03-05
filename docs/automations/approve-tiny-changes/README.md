---
title: Automation - Approve Tiny Changes
description: Automatically approve small PRs.
category: [efficiency]
---
# Approve Tiny Changes

Approve single-line changes to a single file.

<div class="automationImage" style="align:right" markdown="1">
![Approve tiny change](approve_tiny_change.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * If the PR contains a one-line change to a single file.

    Automation Actions:

    * Apply a `single-line` label.
    * Approve the PR.
    * Post a comment explaining why the PR was approved.
</div>
!!! example "name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_tiny_changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_tiny_changes.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/safe-merge-automation.md::3"
--8<-- "docs/snippets/safe-merge-automation.md:5:"

--8<-- "docs/snippets/automation-footer.md"
