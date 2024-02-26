---
title: Automation - Automatic MS Teams Notifications
description: Automatically post positive recognition messages in MS Teams for well-structured PRs.
category: [devex, msteams]
---
# Automatic MS Teams Notifications
<!-- --8<-- [start:example]-->
Automatically post positive recognition messages in MS Teams for well-structured PRs.

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains updates to tests.
    * The PR has fewer than 5 modified files.
    * The PR branch references a Jira ticket.
    * The PR has fewer than 150 lines of code changed.

    Automation Actions:

    * Post an MS Teams message that automatically recognizes the PR author and provides a link to the PR.

<div class="automationExample" markdown="1">
!!! example "Automatic MS Teams Notifications"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/teams/teams_auto_recognition.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/teams/teams_auto_recognition.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
