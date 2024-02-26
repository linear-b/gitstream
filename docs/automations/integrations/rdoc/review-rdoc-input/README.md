---
title: Automation - Review RDoc Input Parameters
description: Automatically flag PRs that may require RDoc updates.
category: [quality, ruby]
---

# Review RDoc Input Parameters

<!-- --8<-- [start:example]-->
Warn PR authors when they change Ruby function or constructor input parameters without updating RDoc content.


![Review RDoc Input Parameters](/automations/integrations/rdoc/review-rdoc-input/review-rdoc-input.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR changes one or more input parameters in Ruby methods.
    * The PR lacks RDoc updates.

    Automation Actions:

    * Post a comment warning the user to review the method’s RDoc to identify necessary updates.

<div class="automationExample" markdown="1">
!!! example "Review RDoc Input Parameters"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_rdoc_input.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_rdoc_input.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
