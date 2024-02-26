---
title: Automation - Review Godoc Changes
description: Automatically approve PRs for Godoc changes.
category: [docs, go]
---
# Review Godoc Changes
<!-- --8<-- [start:example]-->
Approve PRs that only contain changes to Godoc and assign optional reviewers.


<div class="automationImage" markdown="1">
![Review Godoc](/automations/integrations/godoc/review-godoc/review-godoc.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    **Conditions (all must be true):**

    * The PR only contains changes to Godoc content.

    **Automation Actions:**

    * Assign the org/tech-writers team for optional review.
    * Apply a green `📓 Godoc Only` label
    * Approve the PR

</div>
<div class="automationExample" markdown="1">
!!! example "Review Godoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/godoc/review_godoc.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/godoc/review_godoc.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
