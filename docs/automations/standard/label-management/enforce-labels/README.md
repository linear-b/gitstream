---
title: Automation - Enforce Required Labels
description: Automatically enforce the use of required PR labels.
category: [review, quality]
---
# Enforce Required Labels
Automatically enforce the use of required PR labels.

<div class="automationImage" markdown="1">
![Enforce Required Labels](/automations/standard/label-management/enforce-labels/enforce-labels.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR lacks one or more labels from a list of required labels.

    Automation Actions:

    * Apply a `Missing Required Labels` label.
    * Post a comment explaining why the label was applied and which labels are required.

</div>
<div class="automationExample" markdown="1">
!!! example "Enforce Required Labels"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/enforce_required_labels.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/enforce_required_labels.cm){ .md-button }
      </span>
    </div>
</div>
