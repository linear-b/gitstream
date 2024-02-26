---
title: Automation - Flag Missing Project Tracking Info
description: Automatically flag PRs that lack references to related project tracking issues.
category: [project, quality]
---

# Flag Missing Project Tracking Info

Label PRs that lack a reference to a project tracker issue (Jira, Azure Boards, Shortcut and Asana) in the PR title or description.

<div class="automationImage" markdown="1">
![Label Missing Project Tracker](/automations/label-missing-project-tracker/label-missing-project-tracker.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR lacks a project tracker ticket number in the title, or a link to a project tracker resource in the PR description.

    Automation Actions:

    * Apply Label : `⚠️ Missing Project Tracker`
    * Post a comment asking the author to reference the associated project tracker resource.

</div>
<div class="automationExample" markdown="1">
!!! example "Label Missing Project Tracker"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/label_missing_project_tracker.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/label_missing_project_tracker.cm){ .md-button }
      </span>
    </div>
</div>
