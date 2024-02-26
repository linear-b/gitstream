---
title: Automation - Send Slack Notifications
description: Automatically send Slack notifications from your git repos with gitStream.
category: [slack]
---
# Send Slack Notifications

<!-- --8<-- [start:example]-->
Automatically send Slack notifications to specific channels based on the contents of a pull request.

![Send Slack Notifications](/automations/integrations/slack/slack-send-notification/slack-send-notification.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR meets one or more of the specified trigger criteria for Slack notifications.

    Automation Actions:

    * Post a Slack message based on the contents of the PR.

<div class="automationExample" markdown="1">
!!! example "Send Slack Notifications"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/slack/slack_send_notification.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/slack/slack_send_notification.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
