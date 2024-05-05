---
title: Automation - Automatically Create Jira Tickets
description: Automatically create Jira tickets for new PRs.
category: [quality, project, jira, efficiency]
quickstart: false
---
# Automatically Create Jira Tickets

<!-- --8<-- [start:example]-->
Automatically create Jira tickets for new PRs.

!!! warning "Required gitStream Plugins"
    This example requires you to install the [`hasJiraTicket`](/filter-function-plugins/#hasJiraTicket) plugin.

    [Learn more about gitStream plugins](/plugins/).

<div class="automationImage" markdown="1">
![Create Jira Ticket](/automations/integrations/jira/create-jira-ticket/create-jira-ticket.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A Jira ticket does not yet exist with the same title as the PR.

    Automation Actions:

    * Send an HTTP request to create a new Jira ticket.

    Plugin:

    * hasJiraTicket

</div>
<div class="automationExample" markdown="1">
!!! example "Create Jira Ticket"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/create_jira_ticket.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/create_jira_ticket.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
