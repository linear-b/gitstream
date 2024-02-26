---
title: Automation - Assign Reviewers by Directory
description: Automatically assign reviewers based on a watch list of files and directories.
category: [quality]
---
# Assign Reviewers by Directory

Automatically assign code reviewers based on directory structure. Optionally, you can substitue `require-reviewers` for `add-reviewers` to make review from the specified teams and individuals mandatory.

<div class="automationImage" style="align:right" markdown="1">
![Assign Reviewers by Directory](assign_reviewers_by_directory.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains changes to JavaScript files inside the `src/ui` directory.

    Automation Actions:

    * Add a user named `my-teamate` and a team named `my-organization/ui-team` as reviewers. These should be customized to match your organization.
    * Post a comment explaining why these reviewers were assigned.
</div>
<div class="automationExample" markdown="1">
!!! example "Assign Reviewers by Directory"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/assign_reviewers_by_directory.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/assign_reviewers_by_directory.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md::2"
--8<-- "docs/snippets/review-assignment-automation.md:4:"

--8<-- "docs/snippets/automation-footer.md"
