---
title: Automation - Automatic Slack Messages
description: Automatically post positive recognition messages in Slack for well-structured PRs.
category: [devex, slack]
---
# Automatic Slack Messages

<!-- --8<-- [start:example]-->
Automatically post positive recognition messages in Slack for well-structured PRs.

![Automatic Slack Messages](/automations/integrations/slack/slack-auto-recognition/slack-auto-recognition.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains updates to tests.
    * The PR has fewer than 5 modified files.
    * The PR branch references a Jira ticket.
    * The PR has fewer than 150 lines of code changed.

    Automation Actions:

    * Post a Slack message that automatically recognizes the PR author and provides a link to the PR.

<div class="automationExample" markdown="1">
!!! example "Automatic Slack Messages"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/slack/slack_auto_recognition.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/slack/slack_auto_recognition.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
