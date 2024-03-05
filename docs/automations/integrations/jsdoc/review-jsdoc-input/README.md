---
title: Automation - Review JSDoc Input Parameters
description: Automatically flag PRs that may require JSDoc updates.
category: [docs, javascript]
---
# Review JSDoc Input Parameters

Warn PR authors when they change JavaScript function or constructor input parameters without updating JSDoc content.


<div class="automationImage" markdown="1">
![Review JSDoc Input Parameters](/automations/integrations/jsdoc/review-jsdoc-input/review-jsdoc-input.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes an input parameter in one or more JavaScript methods.
    * The PR lacks changes to ‘@param’ declarations.

    Automation Actions:

    * Post a comment warning the user to review the method’s JSDoc to identify necessary updates.

</div>
<div class="automationExample" markdown="1">
!!! example "Review JSDoc Input Parameters"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jsdoc/review_jsdoc_input.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jsdoc/review_jsdoc_input.cm){ .md-button }
      </span>
    </div>
</div>
