---
title: Automation - Automatically Create Jira Issues
description: Automatically create Jira issues for new PRs.
category: [quality, project, jira]
quickstart: false
---
# Automatically Create Jira Issues from PRs

<!-- --8<-- [start:example]-->
Automatically create Jira tickets for new pull/merge requests.

!!! warning "Jira API & Webhook Integration Required."
    This automation requires you to connect to the [Jira API and incoming webooks](/integrations/jira/#configure-jira-for-gitstream-integrations).

!!! warning "Required gitStream Plugins"
    This example requires you to install the [`hasJiraIssue`](/filter-function-plugins/#hasjiraissue) plugin.

    [Learn more about gitStream plugins](/plugins/).

<div class="automationImage" markdown="1">
![Create Jira Issue](/automations/integrations/jira/create-jira-issue/create-jira-issue-github.png)
![Create Jira Issue](/automations/integrations/jira/create-jira-issue/create-jira-issue-jira.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR description contains the text `- [x] Auto-create Jira Issue`
    * No existing Jira issues reference the PRs URL.

    Automation Actions:

    * Send an HTTP request to create a new Jira issue.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatically Create Jira Issues"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jira/create_jira_issue.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jira/create_jira_issue.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
