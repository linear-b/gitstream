---
title: Automation - Review Javadoc Changes
description: Automatically approve PRs that only contain Javadoc changes.
category: [docs, java]
---
# Review Javadoc Changes

Unblock PRs that only change Javadoc content.


<div class="automationImage" markdown="1">
![Review Javadoc Changes](/automations/integrations/javadoc/review-javadoc/review-javadoc.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR only contains changes to Javadoc content.


    Automation Actions:

    * Assign the `org/tech-writers`team for optional review.
    * Apply a green `📓 Javadoc Only` label
    * Approve the PR

</div>
<div class="automationExample" markdown="1">
!!! example "Review Javadoc Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/javadoc/review_javadoc_changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/javadoc/review_javadoc_changes.cm){ .md-button }
      </span>
    </div>
</div>
