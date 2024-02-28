---
title: Automation - Label Modified Resources
description: Automatically label PRs to indicate what resources are being changed.
category: [review, quality]
---
# Label Based on Modified Resources
<!-- --8<-- [start:example]-->
Automatically label PRs to indicate what resources are being changed.

![Label Modified Resources](/automations/standard/label-management/label-modified-resources/label-modified-resources.png)
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created or updated.

    Automation Actions:

    * Apply labels based on the branch name or modified resources.

!!! example "Label Modified Resources"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/label_modified_resources.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/label_modified_resources.cm){ .md-button }
      </span>
    </div>

<!-- --8<-- [end:example]-->
