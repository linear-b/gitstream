---
title: Automation - Label PRs Without Tests
description: Automatically label PRs that lack required tests.
category: [review, quality]
---
# Label PRs Without Tests
Apply a `missing-tests` label to any PRs that don't update tests. gitStream will remove this label if the contributor adds a test change to the PR.

<div class="automationImage" style="align:right" markdown="1">
![Automation Name](label_prs_without_tests.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR has no changes to a test.

    Automation Actions:

    * Apply a `missing-tests` label.
</div>
<div class="automationExample" markdown="1">
!!! example "Label PRs Without Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/label_prs_without_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/label_prs_without_tests.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md::3"
--8<-- "docs/snippets/context-automation.md:5:"

--8<-- "docs/snippets/automation-footer.md"
