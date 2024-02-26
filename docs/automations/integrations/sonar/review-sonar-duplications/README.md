---
title: Automation - Review SonarCloud Duplications
description: Automatically request changes when SonarCloud detects duplicated code.
category: [security, sonarcloud]
---
# Review Sonar Duplications

Request changes when Sonar reports an excessive level of duplicated code.

<div class="automationImage" style="align:right" markdown="1">
![Review Sonar Duplications](/automations/integrations/sonar/review-sonar-duplications/review-sonar-duplications.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains more than 3% duplicated code.

    Automation Actions:

    * Apply a label that indicates how much duplicated code Sonar detected.
    * Request changes and post a comment explaining why.
</div>
<div class="automationExample" markdown="1">
!!! example "Review Sonar Duplications"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/sonar/review_sonar_duplications.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/sonar/review_sonar_duplications.cm){ .md-button }
      </span>
    </div>
</div>
