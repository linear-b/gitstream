---
title: Automation - Review Terraform Module Name
description: Enforce naming conventions in Terraform module changes
category: [quality]
quickstart: false
---

# Review Terraform Module Name
Request changes if a PR creates a new Terraform module that is missing a required prefix or keyword in the name.

<div class="automationImage" markdown="1">
![Review Terraform Source Version](/automations/integrations/terraform/review-terraform-module-name/review-terraform-module-name.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates a new Terraform module.
    * The module name lacks a required name prefix, or one or more keywords.

    Automation Actions:

    * Request review changes on the PR with a comment explaining the structure of module name.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Terraform Module Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/terraform/review_terraform_module_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/terraform/review_terraform_module_name.cm){ .md-button }
      </span>
    </div>
</div>
