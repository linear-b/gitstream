---
title: Automation - Review Javadoc for Large Changes
description: Automatically flag large PRs that may require Javadoc updates.
category: [docs, java]
---
# Review Javadoc for Large Changes

Require more extensive reviews for large Java changes that lack Javadoc updates.

<div class="automationImage" markdown="1">
![Review JavaDoc for Large Changes](/automations/integrations/javadoc/review-javadoc-large-change/review-javadoc-large-change.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes more than 25% of a Java class.
    * The PR lacks Javadoc changes.

    Automation Actions:

    * Post a comment asking the author to review all relevant Javadoc to identify necessary updates.
    * Require a review from the `my-organization/tech-writers` team.
    * Apply a yellow `⚠️ Missing Javadoc` Label

</div>
<div class="automationExample" markdown="1">
!!! example "Review Javadoc for Large Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/javadoc/review_javadoc_large_change.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/javadoc/review_javadoc_large_change.cm){ .md-button }
      </span>
    </div>
</div>
