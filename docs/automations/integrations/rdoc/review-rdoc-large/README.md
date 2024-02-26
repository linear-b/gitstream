---
title: Automation - Review RDoc for Large Changes
description: Automatically flag large PRs that may require RDoc updates.
category: [quality, ruby]
---
# Review RDoc for Large Changes

<!-- --8<-- [start:example]-->
Require more extensive reviews for large Ruby changes that lack RDoc updates.


![Review RDoc for Large changes](/automations/integrations/rdoc/review-rdoc-large/review-rdoc-large.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes more than 150 lines of Ruby code.

    Automation Actions:

    * Post a comment asking the author to review all relevant RDoc to identify necessary updates.
    * Require a review from the `ORG/tech-writers` team.
    * Apply a yellow `⚠️ Missing RDoc` Label


<div class="automationExample" markdown="1">
!!! example "Review RDoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_rdoc_large.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_rdoc_large.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
