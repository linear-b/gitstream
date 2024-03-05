---
title: Automation - Review Jit Security Alerts
description: Automatically assign PR reviewers for Jit security alerts.
category: [security, jit]
---
# Review Jit Security Alerts
Manage review assignment for high and medium risk Jit security alerts.

<div class="automationImage" markdown="1">
![Label Jit Alerts](/automations/integrations/jit/review-jit-alerts/review-jit-alerts.png)
</div>
<div class="automationDescription" markdown="1">

!!! info "Configuration Description"
        **Review Jit High Alerts**

        * Conditions (all must be true):
            * Jit reports one or more high vulnerabilities for the PR
        * Automation Actions:
            * Require a review from the organization’s security team.
            * Require 2 reviewers.
            * Post a comment explaining why this action was taken.

        **Review Jit Medium Alerts**

        * Conditions (all must be true):
            * Jit reports one or more medium vulnerabilities for the PR
        * Automation Actions:
            * Require 2 reviewers
            * Post a comment explaining why this action was taken.
</div>
<div class="automationExample" markdown="1">
!!! example "Review Jit Security Alerts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jit/review_jit_alerts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jit/review_jit_alerts.cm){ .md-button }
      </span>
    </div>
</div>
