---
title: Automation - Automatically Notify MS Teams Channels
description: Automatically send Slack notifications to specific channels based on the contents of a pull request.
category: [msteams]
---
# Automatically Notify MS Teams Channels

<!-- --8<-- [start:example]-->
Automatically send Slack notifications to specific channels based on the contents of a pull request.

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR meets one or more of the specified trigger criteria for MS Teams notifications.

    Automation Actions:

    * Post an MS Teams message based on the contents of the PR.

<div class="automationExample" markdown="1">
!!! example "Automatically Notify MS Teams Channels"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/teams/teams_send_notification.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/teams/teams_send_notification.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
