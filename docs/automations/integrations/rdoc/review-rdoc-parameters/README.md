---
title: gitStream Automation - Review Rdoc Input Parameters
description: Automatically flag PRs that may require Rdoc updates.
---
# Review Rdoc Input Parameters

Warn PR authors when they change Ruby function or constructor input parameters without updating Rdoc content.

<!-- --8<-- [start:example]-->

<div class="automationImage" markdown="1">
![Review Rdoc Input Parameters](/automations/integrations/rdoc/review-rdoc-parameters/review-rdoc-parameters.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

Conditions (all must be true):

* The PR changes one or more input parameters in Ruby methods.
* The PR lacks changes to ‘[@param](https://github.com/param)’ declarations.

Automation Actions:

* Post a comment warning the user to review the method’s Rdoc to identify necessary updates.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Rdoc Input Parameters"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_rdoc_parameters.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_rdoc_parameters.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->