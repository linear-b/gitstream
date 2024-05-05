---
title: Automation - Automatic Jira Status Updates
description: Automatically update the status of Jira tickets when a PR is opened.
category: [project, jira, efficiency]
quickstart: false
---
# Automatic Jira Status Updates

<!-- --8<-- [start:example]-->
Automatically update the status of Jira tickets when a PR is opened. 

!!! warning "Jira Webhook Integration Required"
    You need to [configure an incoming Jira webhook](/integrations/jira/#configure-jira-for-gitstream-integrations) to use this automation.

<div class="automationImage" markdown="1">
![Automatic Jira Status Updates](/automations/integrations/jira/jira-change-status/jira-change-status-github.png)
![Automatic Jira Status Updates](/automations/integrations/jira/jira-change-status/jira-change-status-jira.png)

</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created that references a Jira ticket in the title or description.

    Automation Actions:

    * Make an HTTP request to a Jira webhook that is pre-configured to update the ticket status.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatic Jira Status Updates"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jira/jira_change_status.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jira/jira_change_status.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"