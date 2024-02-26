---
title: Automation - PR Label Guidance
description: Automatically suggest labels to apply to new PRs.
category: [review]
---
# Suggest Labels
Automatically suggest labels to apply to new PRs.

<div class="automationImage" markdown="1">
![Suggest Labels](/automations/standard/label-management/suggest-labels/suggest-labels.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created or updated that has no labels.

    Automation Actions:

    * Post a comment that suggest labels the author can apply to the PR.

</div>
<div class="automationExample" markdown="1">
!!! example "Suggest Labels"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/suggest_labels.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/suggest_labels.cm){ .md-button }
      </span>
    </div>
</div>
