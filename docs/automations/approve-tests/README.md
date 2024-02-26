---
title: Automation - Approve test changes
description: Automatically approve changes that only contains updates to tests.
category: [efficiency]
quickstart: true
---
# Approve test changes

Label and approve PRs that only include tests, and post an explanation comment.

<div class="automationImage" style="align:right" markdown="1">
![Adding tests example](approve_tests.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR only contains changes to tests

    Automation Actions:

    * Add a tests-only label
    * Approve the PR
    * Post a comment that explains why the PR was approved.
</div>
!!! example "Approve Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_tests.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/safe-merge-automation.md"

--8<-- "docs/snippets/automation-footer.md"
