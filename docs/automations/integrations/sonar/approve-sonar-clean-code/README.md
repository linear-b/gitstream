---
title: Automation - Approve SonarCloud Clean Code
description: Automatically approve PRs that pass SonarCloud's quality gate.
category: [security, sonarcloud, efficiency]
---
# Approve Sonar Clean Code

Approve PRs that pass SonarCloud's quality gate.

<div class="automationImage" style="align:right" markdown="1">
![Aprove Sonar Clean Code](/automations/integrations/sonar/approve-sonar-clean-code/approve-sonar-clean-code.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * SonarCloud reports an 'A' rating for vulnerabilities, bugs, security hotspots, and code smells.
    * There is no duplicated code.

    Automation Actions:

    * Apply a `Sonar: Clean Code` label to the PR.
    * Approve the PR.
    * Post a comment that explains why the PR was approved.
</div>
<div class="automationExample" markdown="1">
!!! example "Aprove Sonar Clean Code"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/sonar/approve_sonar_clean_code.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/sonar/approve_sonar_clean_code.cm){ .md-button }
      </span>
    </div>
</div>
