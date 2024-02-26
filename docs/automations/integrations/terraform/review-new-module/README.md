---
title: Automation - Review Terraform Module Directory
description: Enforce directory structure conventions for new Terraform module
category: [quality]
quickstart: false
---

# Review New Terraform Modules
Request changes if a PR that creates a new Terraform module which do not conform to the required directory structure.

<div class="automationImage" markdown="1">
![Review New Module](/automations/integrations/terraform/review-new-module/review-new-module.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates a new Terraform module
        * A new sub-directory is created inside the `/modules` directory.
    * The PR lacks one or more required components from the list in the terraform custom expression.

    Automation Actions:

    * Request changes and post a comment explaining the missing parts of the module.
    * Apply Label : `⚠️ Missing Terraform Components`

</div>
<div class="automationExample" markdown="1">
!!! example "Review New Module"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/terraform/review_new_module.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/terraform/review_new_module.cm){ .md-button }
      </span>
    </div>
</div>
