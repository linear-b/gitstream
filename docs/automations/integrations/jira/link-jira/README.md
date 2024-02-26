---
title: Automation - Automatically Link PRs to Related Jira Issues
description: Provide automatic links to Jira issues that are associated with PRs.
category: [jira, efficiency]
---
# Automatically Link PRs to Related Jira Issues
<!-- --8<-- [start:example]-->
Provide automatic links to Jira issues that are associated with PRs.

<div class="automationImage" markdown="1">
![Automatically Link to the Related Jira Card](/automations/standard/link-issue-tracker/link-issue-tracker.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains a reference to an Jira card in the title or branch name.

    Automation Actions:

    * Post a comment that provides a link to the associated Jira Card.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatically Link to the Related Jira Card"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jira/link_jira.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jira/link_jira.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
