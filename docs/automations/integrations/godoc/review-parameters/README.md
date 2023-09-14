---
title: gitStream Automation - Review godoc Input Parameters
description: Automatically flag PRs that may require godoc updates.
---
# Review godoc Input Parameters

Warn PR authors when they change Golang function or constructor input parameters without updating godoc content.


<div class="automationImage" markdown="1">
![Review JSDoc Input Parameters](/automations/integrations/godoc/review-parameters/review-parameters.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

Conditions (all must be true):

* The PR changes one or more input parameters in Golang methods.
* The PR lacks changes to ‘[@param](https://github.com/param)’ declarations.

Automation Actions:

* Post a comment warning the user to review the method’s godoc to identify necessary updates.

</div>
<div class="automationExample" markdown="1">
!!! example "Review godoc Input Parameters"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/godoc/review_parameters.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/godoc/review_parameters.cm){ .md-button }
      </span>
    </div>
</div>