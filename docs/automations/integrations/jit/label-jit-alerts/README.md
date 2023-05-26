# Label Jit Alerts
Label the number of high, medium, and low risk vulnerabilities Jit reports for PRs.


Conditions (all must be true):

* Jit reports one or more high, medium, or low risk security vulnerabilities for the PR.

Automation Actions:

* Apply labels to indicate the number of each type of vulnerability

!!! example "Label Jit Alerts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jit/label_jit_alerts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jit/label_jit_alerts.cm){ .md-button }
      </span>
    </div>


