---
title: Automation - Automatically Assign Jira Tickets
description: Automatically assign Jira tickets based on code review actions.
---
# Automatically Assign Jira Tickets

<!-- --8<-- [start:example]-->
Automatically assign Jira tickets based on code review actions.

!!! warning "Jira Webhook Integration Required"
    You need to [configure an incoming Jira webhook](/integrations/jira/#configure-jira-for-gitstream-integrations) to use this automation.

<div class="automationImage" markdown="1">
![Automatically Assign Jira Tickets](/automations/integrations/jira/jira-assign/jira-assign-github.png)
![Automatically Assign Jira Tickets](/automations/integrations/jira/jira-assign/jira-assign-jira.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR description contains the slash command: `/gitstream assign-jira` followed by a Jira username.

    Automation Actions:

    * Trigger a Jira webhook to update the assignee field with the username provided in the slash command.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatically Assign Jira Tickets"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jira/jira_assign.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jira/jira_assign.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"