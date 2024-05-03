---
title: Automation - Automatic Jira Updates
description: Automatically update Jira tickets with pull request information.
---
# Automatic Jira Updates

<!-- --8<-- [start:example]-->
Automatically update Jira tickets with pull request information. You can modify this to send any PR metadata to Jira. 

!!! warning "Jira Webhook Integration Required"
    You need to [configure an incoming Jira webhook](/integrations/jira/#configure-jira-for-gitstream-integrations) to use this automation.

<div class="automationImage" markdown="1">
![Automatic Jira Updates](/automations/integrations/jira/jira-update-field/jira-update-field-github.png)
![Automatic Jira Updates](/automations/integrations/jira/jira-update-field/jira-update-field-jira.png)

</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created that contains a Jira ticket reference in the title or branch name.

    Automation Actions:

    * Send a webhook to Jira containing metadata to add to the Issue.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatic Jira Updates"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jira/jira_update_field.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jira/jira_update_field.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"