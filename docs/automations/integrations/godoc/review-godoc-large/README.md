---
title: Automation - Review Godoc for Large Changes
description: Automatically flag large PRs that may require Godoc updates.
category: [docs, go]
---
# Review Godoc for Large Changes
<!-- --8<-- [start:example]-->

Require more extensive reviews for large Golang changes that lack Godoc updates.


<div class="automationImage" markdown="1">
![Review Godoc for Large changes](/automations/integrations/godoc/review-godoc-large/review-godoc-large.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes more than 100 lines of Golang code.

    Automation Actions:

    * Post a comment asking the author to review all relevant Godoc to identify necessary updates.
    * Require a review from the `ORG/tech-writers` team.
    * Apply a yellow `⚠️ Missing Godoc` Label


</div>
<div class="automationExample" markdown="1">
!!! example "Review Godoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/godoc/review_godoc_large.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/godoc/review_godoc_large.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
