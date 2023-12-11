---
title: Automation - Flag Code That's Merged Without Review
description: Automatically send notifications to your team when code is merged without review.
---
# Flag Code That's Merged Without Review

<!-- --8<-- [start:example]-->

Automatically send notifications to your team when code is merged without review.

<div class="automationImage" markdown="1">
![Flag Code That's Merged Without Review](/automations/standard/flag-merged-no-review/flag-merged-no-review.png)

![Slack Message](/automations/standard/flag-merged-no-review/slack-message.png)
</div>


<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):
    
    * A PR is merged without at least one review.
    
    Automation Actions:
    
    * Send a Slack notification to alert your team.
    * Apply a red `DCF5-merged-without-review` label.
    * Post a comment explaining SOC II requirements.
</div>


<div class="automationExample" markdown="1">
!!! example "Flag Code That's Merged Without Review"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/flag_merged_no_review.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/flag_merged_no_review.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->