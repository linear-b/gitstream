---
title: gitStream Automation - Review Pydoc Input Parameters
description: Automatically flag PRs that may require Pydoc updates.
---
# Review Pydoc Input Parameters

<!-- --8<-- [start:example]-->
Warn PR authors when they change Python function or constructor input parameters without updating Pydoc content.


![Review Pydoc Input Parameters](/automations/integrations/pydoc/review-pydoc-parameters/review-pydoc-parameters.png)


!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR changes one or more input parameters in Python methods.
    * The PR lacks changes to ‘[@param](https://github.com/param)’ declarations.
    
    Automation Actions:
    
    * Post a comment warning the user to review the method’s Pydoc to identify necessary updates.

<div class="automationExample" markdown="1">
!!! example "Review Pydoc Input Parameters"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/pydoc/review_pydoc_parameters.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/pydoc/review_pydoc_parameters.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
