---
title: Automation - Automatically Link PRs to Related Shortcut Tasks
description: Provide automatic links to Shortcut tasks that are associated with PRs.
category: [shortcut, project]
---
# Automatically Link PRs to Related Shortcut Tasks
<!-- --8<-- [start:example]-->
Provide automatic links to Shortcut tasks that are associated with PRs.

<div class="automationImage" markdown="1">
![Automatically Link to the Related Shortcut Task](/automations/standard/link-issue-tracker/link-issue-tracker.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains a reference to an Shortcut card in the title or branch name.

    Automation Actions:

    * Post a comment that provides a link to the associated Shortcut Task.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatically Link to the Related Shortcut Task"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/shortcut/link_shortcut.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/shortcut/link_shortcut.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
