---
title: Automation - Welcome Newcomer.
description: Automatically post messages to first time PR contributors to help them get started.
category: [review]
---
# Welcome Newcomer

Post a welcome message when someone makes their first PR to a repo, and provide context to help them know what's next.

<div class="automationImage" style="align:right" markdown="1">
![Welcome Newcomer](welcome_newcomer.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR author made their first contribution to the repo during the current day.

    Automation Actions:

    * Add the `my-organization/mentors` team to review the PR. Customize this to match your organization.
    * Apply a `new-contributor` label to the PR.
    * Post a comment explaining the next steps. Customize this to match your project.
</div>
<div class="automationExample" markdown="1">
!!! example "Welcome Newcomer"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/welcome_newcomer.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/welcome_newcomer.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
