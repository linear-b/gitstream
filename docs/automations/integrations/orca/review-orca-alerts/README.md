---
title: Automation - Review Orca Security Alerts
description: Automatically require review from your SecOps team for Orca Security violations in pull requests.
category: [security, orca]
quickstart: true
---
# Require Security Review for Orca Alerts
<!-- --8<-- [start:example]-->
Automatically require review from your SecOps team for Orca Security violations in pull requests.

<div class="automationImage" markdown="1">
![Review Orca Security Alerts](/automations/integrations/orca/review-orca-alerts/review-orca-alerts-1-light.png#only-light)
![Review Orca Security Alerts](/automations/integrations/orca/review-orca-alerts/review-orca-alerts-2-light.png#only-light)
![Review Orca Security Alerts](/automations/integrations/orca/review-orca-alerts/review-orca-alerts-1-dark.png#only-dark)
![Review Orca Security Alerts](/automations/integrations/orca/review-orca-alerts/review-orca-alerts-2-dark.png#only-dark)

</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains a vulnerability, IAC problem, or secret that is flagged as High or Medium.

    Automation Actions:

    * Require review from your organization's security team.
    * Post a comment explaining the requirement.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Orca Security Alerts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/orca/review_orca_alerts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/orca/review_orca_alerts.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
