---
title: Automation - Label Modified Resources
description: Automatically label PRs to indicate what resources are being changed.
---
# Label Modified Resourcess Based on Modified Resources

Automatically label PRs to indicate what resources are being changed. This works as a direct replacement for the <a href="https://github.com/marketplace/actions/labeler" target="_blank">PR Labeler</a> GitHub Action.

<div class="automationImage" markdown="1">
![Label Modified Resources](/automations/standard/label-management/label-modified-resources/label-modified-resources.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created or updated.

    Automation Actions:

    * Apply labels based on the branch name or modified resources.

</div>
<div class="automationExample" markdown="1">
!!! example "Label Modified Resources"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/label_modified_resources.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/label_modified_resources.cm){ .md-button }
      </span>
    </div>
</div>