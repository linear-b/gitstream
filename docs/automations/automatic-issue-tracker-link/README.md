---
title: Automation - Automatic Issue Tracker Link
description: Automatically post PR comment with Issue Tracker Link.
---

# Automatic Issue Tracker Link

Post a comment on the PR that provides a link to the associated resource in the issue tracker, such as Jira, Azure Boards, Shortcut, Asana, and more if ID.

<div class="automationImage" markdown="1">
![Automatic Issue Tracker Link](/automations/automatic-issue-tracker-link/automatic-issue-tracker-link.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains a reference to project tracking tickets in the title or branch name.

    Automation Actions:

    * Post a comment that Providing Link to the Issue Tracker.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatic Issue Tracker Link"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/automatic_issue_tracker_link.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/automatic_issue_tracker_link.cm){ .md-button }
      </span>
    </div>
</div>
