---
title: Automation - Review JSDoc for Large Changes
description: Automatically flag large PRs that may require JSDoc updates.
category: [docs, javascript]
---
# Review JSDoc for Large Changes

Require more extensive reviews for large JavaScript changes that lack JSDoc updates.

<div class="automationImage" markdown="1">
![Review JSDoc for Large changes](/automations/integrations/jsdoc/review-jsdoc-large/review-jsdoc-large.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes more than 25% of a JavaScript class.

    Automation Actions:

    * Post a comment asking the author to review all relevant JSDoc to identify necessary updates.
    * Require a review from the `ORG/tech-writers` team.
    * Apply a yellow `⚠️ Missing JSDoc` Label


</div>
<div class="automationExample" markdown="1">
!!! example "Review JSDoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jsdoc/review_jsdoc_large.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jsdoc/review_jsdoc_large.cm){ .md-button }
      </span>
    </div>
</div>
