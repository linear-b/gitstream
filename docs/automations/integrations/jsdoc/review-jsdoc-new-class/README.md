---
title: Automation - Enforce JSDoc for New JavaScript Classes
description: Enforce JSDoc requirements for PRs.
category: [docs, javascript]
---
# Enforce JSDoc for New JavaScript Classes

Require JSDoc for all new JavaScript classes.


<div class="automationImage" markdown="1">
![Enforce JSDoc for New JavaScript Classes](/automations/integrations/jsdoc/review-jsdoc-new-class/review-jsdoc-new-class.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR creates a new JavaScript class.
    * The PR lacks JSDoc content.

    Automation Actions:

    * Request changes and post a comment explaining that JSDoc is required
    * Apply a yellow `⚠️ Missing JSDoc` label.


</div>
<div class="automationExample" markdown="1">
!!! example "Enforce JSDoc for New JavaScript Classes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jsdoc/review_jsdoc_new_class.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jsdoc/review_jsdoc_new_class.cm){ .md-button }
      </span>
    </div>
</div>
