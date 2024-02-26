---
title: Automation - Assign team members as reviewers
description: Automatically assign teammates to review PRs.
category: [efficiency]
---
# Assign team members as reviewers

Assign PR reviewer based on the owner team membership.

You can also omit the `| first` filter to assign all teams the owner is member of.

!!! example "name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/name.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md"

--8<-- "docs/snippets/automation-footer.md"
