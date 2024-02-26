---
title: Automation - Enforce PR Semantic Titles
description: Automatically enforce PR naming conventions across your GitHub organization.
category: [quality, review]
---
# Enforce PR Semantic Title Names

Automatically enforce PR naming conventions; this example expects the format: `<type>(<scope>): <short summary>`

<div class="automationImage" markdown="1">
![Enforce PR Semantic Title Names](/automations/standard/enforce-pr-title/enforce-pr-title.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR fails to follow a predefined semantic release format:

    Automation Actions:

    * Request changes and post a comment explaining why.

</div>
<div class="automationExample" markdown="1">
!!! example "Enforce PR Semantic Title Names"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard//enforce_pr_title.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard//enforce_pr_title.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/change-request-automation.md"

--8<-- "docs/snippets/automation-footer.md"
