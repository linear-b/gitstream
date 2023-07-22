# Assign Terraform Review
Automatically assign Infrastructure team for reviewing changes when PR contains Terraform file changes.

<div class="automationImage" markdown="1">
![Assign Terraform Review](/automations/integrations/terraform/assign-terraform-reviews/assign-terraform-reviews.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains changes to one or more Terraform configuration files.

    Automation Actions:

    * Require a review from the org/infrastructure team.

</div>
<div class="automationExample" markdown="1">
!!! example "Knowledge Share"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/terraform/assign_terraform_reviews.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/terraform/assign_terraform_reviews.cm){ .md-button }
      </span>
    </div>
</div>