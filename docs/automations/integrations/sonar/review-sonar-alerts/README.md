---
title: Automation - Review SonarCloud Security Alerts
description: Automatically flag SonarCloud security alerts for additional review.
category: [security, sonarcloud]
---
# Review Sonar Security Alerts

Require additional reviews for Sonar security alerts. gitStream will remove this requirement if the alerts are resolved.

<div class="automationImage" style="align:right" markdown="1">
![Review Sonar Security Alerts](/automations/integrations/sonar/review-sonar-alerts/review-sonar-alerts.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The SonarCloud quality gate check fails to pass for code smells, vulnerabilities, or security hotspots.

    Automation Actions:

    * Require a review from the `my-organization/security-team` team. Customize this to match your organization.
    * Post a comment explaining why this PR requires additional review.
</div>
<div class="automationExample" markdown="1">
!!! example "Review Sonar Alerts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/sonar/review_sonar_alerts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/sonar/review_sonar_alerts.cm){ .md-button }
      </span>
    </div>
</div>
