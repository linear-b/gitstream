---
title: gitStream Automation - Review Pydoc for Large Changes
description: Automatically flag large PRs that may require Pydoc updates.
---
# Review Pydoc for Large Changes

<!-- --8<-- [start:example]-->
Require more extensive reviews for large Python changes that lack Pydoc updates.


![Review Pydoc for Large changes](/automations/integrations/pydoc/review-pydoc-large-changes/review-pydoc-large-changes.png)

!!! info "Configuration Description"
    
    Conditions (all must be true):

    * The PR changes more than 100 lines of Python code.

    Automation Actions:

    * Post a comment asking the author to review all relevant Pydoc to identify necessary updates.
    * Require a review from the `ORG/tech-writers` team.
    * Apply a yellow `⚠️ Missing Pydoc` Label


<div class="automationExample" markdown="1">
!!! example "Review Pydoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/pydoc/review_pydoc_large_changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/pydoc/review_pydoc_large_changes.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
