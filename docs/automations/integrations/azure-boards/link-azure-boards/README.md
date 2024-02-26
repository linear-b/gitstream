---
title: Automation - Automatically Link PRs to Related Azure Boards Resources
description: Provide automatic links to Azure Boards resources that are associated with PRs.
category: [efficiency, quality, project]
---
# Automatically Link PRs to Related Azure Boards Resources


<!-- --8<-- [start:example]-->
Provide automatic links to Azure Boards resources that are associated with PRs.

<div class="automationImage" markdown="1">
![Automatically Link to the Related Azure Boards Resource](/automations/standard/link-issue-tracker/link-issue-tracker.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains a reference to an Azure Boards resource in the title or branch name.

    Automation Actions:

    * Post a comment that provides a link to the associated Azure Boards Resource.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatically Link to the Related Azure Boards Resource"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/azure-boards/link_azure_boards.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/azure-boards/link_azure_boards.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
