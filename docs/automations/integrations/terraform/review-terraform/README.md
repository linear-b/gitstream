---
title: Automation - Automatically assign infrastructure team for Terraform changes
description: Require specific reviewers for Terraform module changes
category: [quality]
quickstart: false
---

# Require Reviewers for Terraform changes
Automatically assign `org/infrastructure` team for reviewing changes when PR contains Terraform file changes.

<div class="automationImage" markdown="1">
![Review Terraform Changes](/automations/integrations/terraform/review-terraform/review-terraform.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains changes to one or more Terraform configuration files.

    Automation Actions:

    * Require a review from the org/infrastructure team.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Terraform Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/terraform/review_terraform.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/terraform/review_terraform.cm){ .md-button }
      </span>
    </div>
</div>
