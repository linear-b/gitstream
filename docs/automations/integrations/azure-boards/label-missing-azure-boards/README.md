---
title: Automation - Label Missing Azure Boards Info
description: Automatically label PRs that are missing references to Azure Boards resources.
category: [quality, project, labeling]
---
# Label Missing Azure Boards Info
<!-- --8<-- [start:example]-->
Automatically label PRs that are missing references to Azure Boards resources.

![Label Missing Azure Boards](/automations/label-missing-project-tracker/label-missing-project-tracker.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR is missing one of the following:
        * An Azure Boards ticket reference in the PR title.
        * A link to an Azure Boards resource in the PR description.

    Automation Actions:

    * Apply a red `⚠️ Missing Azure Boards Link` label
    * Post a comment that asks the author to add an Azure Boards reference to the PR.

<div class="automationExample" markdown="1">
!!! example "Label Missing Azure Boards"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/azure-boards/label_missing_azure_boards.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/azure-boards/label_missing_azure_boards.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
