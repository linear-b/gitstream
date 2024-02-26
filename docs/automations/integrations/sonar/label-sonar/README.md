---
title: Automation - Label SonarCloud Quality Reports
description: Automatically label PRs with SonarCloud insights.
category: [security, sonarcloud]
quickstart: true
---
# Label SonarCloud Quality Reports
Label the number of bugs, vulnerabilities, security hotspots, and code smells reported by SonarCloud.

<div class="automationImage" style="align:right" markdown="1">
![Label SonarCloud Quality Reports](/automations/integrations/sonar/label-sonar/label-sonar.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * There is at least one vulnerability, code smell, security hotspot, or bug reported by SonarCloud. Uses the [`extractSonarFindings`](https://docs.gitstream.cm/filter-functions/#extractsonarfindings) filter function

    Automation Actions:

    * Apply color-coded labels to indicate the number of vulnerabilities, code smells, security hotspots, and bugs.
</div>
<div class="automationExample" markdown="1">
!!! example "Label SonarCloud Quality Reports"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/sonar/label_sonar.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/sonar/label_sonar.cm){ .md-button }
      </span>
    </div>
</div>
