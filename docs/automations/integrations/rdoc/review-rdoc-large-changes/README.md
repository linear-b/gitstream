---
title: gitStream Automation - Review Rdoc for Large Changes
description: Automatically flag large PRs that may require Rdoc updates.
---
# Review Rdoc for Large Changes

Require more extensive reviews for large Ruby changes that lack Rdoc updates.

<!-- --8<-- [start:example]-->

<div class="automationImage" markdown="1">
![Review Rdoc for Large changes](/automations/integrations/rdoc/review-rdoc-large-changes/review-rdoc-large-changes.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes more than 100 lines of Ruby code.

    Automation Actions:

    * Post a comment asking the author to review all relevant Rdoc to identify necessary updates.
    * Require a review from the `ORG/tech-writers` team.
    * Apply a yellow `⚠️ Missing Rdoc` Label


</div>
<div class="automationExample" markdown="1">
!!! example "Review Rdoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_rdoc_large_changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_rdoc_large_changes.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->