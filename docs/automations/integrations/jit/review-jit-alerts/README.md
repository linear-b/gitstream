# Review Jit Security Alerts
Manage review assignment for high and medium risk Jit security alerts.


**Review Jit High Alerts**

* Conditions (all must be true):
    * Jit reports one or more high vulnerabilities for the PR
* Automation Actions:
    * Require a review from the organization’s security team.
    * Post a comment explaining why this action was taken.

**Review Jit Medium Alerts**

* Conditions (all must be true):
    * Jit reports one or more medium vulnerabilities for the PR
* Automation Actions:
    * Require 2 reviewers
    * Post a comment explaining why this action was taken.

!!! example "Review Jit Security Alerts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jit/review_jit_alerts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jit/review_jit_alerts.cm){ .md-button }
      </span>
    </div>





