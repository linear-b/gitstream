---
title: Automation - Review Terraform Module Imports
description: Enforce Terraform modules use version when importing via URL source
category: [quality]
quickstart: false
---

# Review Terraform Source Version
Ensure that all Terraform modules imported via a source URL specify a version.

<div class="automationImage" markdown="1">
![Review Terraform Source Version](/automations/integrations/terraform/review-terraform-source-version/review-terraform-source-version.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains a Terraform source declaration via URL that lacks a version reference.
    * The source is not included in a whitelist custom expression that defines one or more whitelisted source locations.

    Automation Actions:

    * Request review changes on the PR with a comment explaining version number requirement.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Terraform Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/terraform/review_terraform_source_version.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/terraform/review_terraform_source_version.cm){ .md-button }
      </span>
    </div>
</div>
