---
title: Automation - Provide Estimated Time to Review
description: Automatically label PRs with an estimated time to review.
category: [efficiency, review]
quickstart: true
---
# Provide Estimated Time to Review
Label all PRs with an estimated number of minutes it would take someone to review. gitStream will automatically update this label whenever a PR changes.

<div class="automationImage" style="align:right" markdown="1">
![Estimated time to review](provide_estimated_time_to_review.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * Any new PR or change to an existing PR.

    Automation Actions:

    * Apply a color coded label that provides an estimated number of minutes someone will need to review the PR.
</div>
<div class="automationExample" markdown="1">
!!! example "Provide Estimated Time to Review"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/provide_estimated_time_to_review.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/provide_estimated_time_to_review.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md:2:"

--8<-- "docs/snippets/automation-footer.md"
