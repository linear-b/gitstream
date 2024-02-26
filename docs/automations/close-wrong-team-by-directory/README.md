---
title: Automation - Close Wrong Team by Directory
description: Automatically close PRs to protected portions of your code.
category: [quality]
---
# Close Wrong Team by Directory

Close PRs to a specified directory if the PR author is not on an approved team.

<div class="automationImage" style="align:right" markdown="1">
![Close Wrong Team by Directory](close_wrong_team_by_directory.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes one or more files inside `/src/views`. Customize this value for your project.
    * The PR author is not a member of the `ui` team. Customize this value for your organization.

    Automation Actions:

    * Close the PR.
    * Post a comment that explains why the PR was closed.
</div>
<div class="automationExample" markdown="1">
!!! example "Close Wrong Team by Directory"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/close_wrong_team_by_directory.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/close_wrong_team_by_directory.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/change-request-automation.md::2"
--8<-- "docs/snippets/change-request-automation.md:4:"

--8<-- "docs/snippets/automation-footer.md"
