# Approve Sonar Clean Code

Approve PRs that pass SonarCloud's quality gate.

![Aprove Sonar Clean Code](/automations/integrations/sonar/approve-sonar-clean-code/approve-sonar-clean-code.png)

Conditions (all must be true):

* SonarCloud reports an 'A' rating for vulnerabilities, bugs, security hotspots, and code smells.
* There is no duplicated code.

Automation Actions:

* Apply a `Sonar: Clean Code` label to the PR.
* Approve the PR.
* Post a comment that explains why the PR was approved.

!!! example "Aprove Sonar Clean Code"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/sonar/approve_sonar_clean_code.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/sonar/approve_sonar_clean_code.cm){ .md-button }
      </span>
    </div>



