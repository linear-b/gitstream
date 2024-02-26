---
title: Automation - Label the Number of Approvals
description: Automatically label PRs with the number of completed reviews that approve the PR.
category: [review]
---
# Label the Number of Approvals

Automatically label PRs with the number of completed reviews that approve the PR.

<div class="automationImage" markdown="1">
![Label the Number of Approvals](/automations/standard/label-management/label-approvals/label-approvals.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created or updated.

    Automation Actions:

    * Apply or update a label that indicates how many merge approvals have been granted.

</div>
<div class="automationExample" markdown="1">
!!! example "Label the Number of Approvals"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/label_approvals.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/label_approvals.cm){ .md-button }
      </span>
    </div>
</div>
