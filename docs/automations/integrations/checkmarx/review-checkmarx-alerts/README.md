---
title: Automation - Review Checkmarx Security Alerts
description: Automatically require review from your SecOps team for Checkmarx security violations in pull requests.
category: [security, checkmarx]
---
# Require Security Review for Checkmarx Alerts
<!-- --8<-- [start:example]-->
Automatically require review from your SecOps team for Checkmarx security violations in pull requests.

!!! warning "Required gitStream Plugin"
    This example requires you to [install the `extractCheckmarxFindings` plugin](/filter-function-plugins/#extractcheckmarxfindings).

    [Learn more about gitStream plugins](/plugins/).

<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains a SAST finding, SCA vulnerability, or IaC issue flagged as Critical or High.

    Automation Actions:

    * Require review from your organization's security team.
    * Post a comment explaining the requirement.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Checkmarx Security Alerts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/checkmarx/review_checkmarx_alerts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/checkmarx/review_checkmarx_alerts.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
