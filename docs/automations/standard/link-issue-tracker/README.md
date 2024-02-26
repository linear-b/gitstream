---
title: Automation - Automatic Project Tracker Links
description: Automatically post PR comments that link to the associated project tracking resource.
category: [quality]
quickstart: true
---

# Automatic Project Tracker Links

Post a PR comment that links the associated resource in your issue tracker, such as Jira, Azure Boards, Shortcut, Asana, and more.

<div class="automationImage" markdown="1">
![Link Issue Tracker](/automations/standard/link-issue-tracker/link-issue-tracker.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains a reference to project tracking tickets in the title or branch name.

    Automation Actions:

    * Post a comment that provides a link to the associated project tracking resource.

</div>
<div class="automationExample" markdown="1">
!!! example "Link Issue Tracker"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/link_issue_tracker.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/link_issue_tracker.cm){ .md-button }
      </span>
    </div>
</div>
