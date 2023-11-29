---
title: Automation - Flag Code That's Merged Without Review
description: Automatically notify your team when code is merged without review and provide additional context to the PR author and reviewers via labels and comments.
---
# Flag Code That's Merged Without Review

<!-- --8<-- [start:example]-->

Notify your team when code is merged without review and provide additional context to the PR author and reviewers via labels and comments.

![Flag Code That's Merged Without Review](/automations/standard/flag-merged-no-review/flag-merged-no-review.png)

![Slack Message](/automations/standard/flag-merged-no-review/slack-message.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * A PR is merged without at least one human review.
    
    Automation Actions:
    
    * Send a Slack notification to alert your team.
    * Apply a red DCF5-merge-without-approve label.
    * Post a comment explaining the automation.

<div class="automationExample" markdown="1">
!!! example "Flag Code That's Merged Without Review"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/flag-merged-no-review/flag_merged_no_review.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/flag-merged-no-review/flag_merged_no_review.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->