---
title: Automation - Label Deleted Files
description: Label PRs that delete files.
category: [quality, review]
---
# Label Deleted Files

Label PRs that delete files.

<div class="automationImage" style="align:right" markdown="1">
![Label Deleted Files](label_deleted_files.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR deletes one or more files.

    Automation Actions:

    * Apply a `deleted-files` label to the PR.
</div>
<div class="automationExample" markdown="1">
!!! example "Label Deleted Files"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/label_deleted_files.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/label_deleted_files.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md::2"
--8<-- "docs/snippets/context-automation.md:4:"

--8<-- "docs/snippets/automation-footer.md"
