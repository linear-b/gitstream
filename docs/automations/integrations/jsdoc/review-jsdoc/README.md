---
title: Automation - Review JSDoc Changes
description: Automatically approve PRs for JSDoc changes.
category: [docs, javascript]
---
# Review JSDoc Changes

Approve PRs that only contain changes to JSDoc and assign optional reviewers.

<div class="automationImage" markdown="1">
![Review JSDoc](/automations/integrations/jsdoc/review-jsdoc/review-jsdoc.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR only affects JavaScript and TypeScript files
    * The PR only contains changes to JSDoc content.

    Automation Actions:

    * Assign the `ORG/tech-writers` team.
    * Apply a green `📓 JSDoc Only label`
    * Approve the PR

</div>
<div class="automationExample" markdown="1">
!!! example "Review JSDoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jsdoc/review_jsdoc.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jsdoc/review_jsdoc.cm){ .md-button }
      </span>
    </div>
</div>
