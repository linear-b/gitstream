---
title: Integrate gitStream with Slack
description: Implement workflow automations that connect your git repo to Slack.
---
# Integrate gitStream with Slack

This page demonstrates uses cases for how to connect gitStream to Slack to post messages via webhooks.

## Prerequisite Configurations

To use gitStream with Slack, you first need to do two things:

1. Create a Slack app with incoming webhooks enabled.
1. Provide your Slack webhook URL to gitStream as an organization environment variable.

### Setup Incoming Webhooks in Slack
Follow [this tutorial](https://api.slack.com/messaging/webhooks#getting_started) to configure your Slack instance to receive webhooks from gitStream.You’ll end up with a webhook URL like this:

```
https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```

!!! danger "Your webhook URL is secret information!" 
    Slack webhook URLs allow anyone with access to the URL to post to the channel its configured for. Do not publish this URL to public locations.

### Configure Environment Variable

gitStream can access GitHub orgnization secrets as environment variables, and you'll need to do this to provide gitStream with access to your Slack webhook URL. 

1. [Create an organization secret in GitHub](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/) and ensure it isn't being overridden by a repo-level secret of the same name.
2. [Pass the organization secret to gitStream](https://docs.gitstream.cm/context-variables/#env) as an environment variable in your `gitstream.yml` workflow file. We recommend using an easy to understand term like `SLACK_WEBHOOK_CHANNEL_NAME`.

## How to Send Slack Messages From gitStream

!!! example
    To send Slack messages from gitStream, use the [`send-slack-message` automation action](https://docs.gitstream.cm/automation-actions/#send-slack-message), and pass the value you stored your Slack webhook URL to the `webhook_url` argument.

    ```yaml+jinja
    automations:
    send_slack:
        if:
        - true
        run:
        - action: send-slack-message@v1
            args:
            message: "A message sent from GitStream!"
            webhook_url: "{{ env.SLACK_WEBHOOK }}"
    ```

## Auto-Recognition For Meeting Team Goals

A good choice to reward developers for submitting great PRs would be to automate a Slack message that gives the developer recognition among their colleagues. To do this, you’ll need to create a Slack webhook that sends to a channel full of reviewers, managers, and anybody else who should see the recognition.

!!! tip "Automatic Slack Recognition"
    --8<-- "docs/automations/integrations/slack/slack-auto-recognition/README.md:example"

## Message Specific Teams Based on PR content

You can also use the Slack integration to automatically keep in touch with code owners and others who should be connected to the PR. You could check for certain conditions that require a more personal review from an experienced maintainer, like:

- Will the PR [take too long to review](https://docs.gitstream.cm/filter-functions/#estimatedreviewtime)?
- Did [SonarCloud find vulnerabilities](https://docs.gitstream.cm/filter-functions/#extractsonarfindings)?
- Is this the author’s [first commit](https://docs.gitstream.cm/filter-functions/#isfirstcommit) or are they [new to the codebase](https://docs.gitstream.cm/filter-functions/#rankbygitactivity)?
- Is this [an automated PR](https://docs.gitstream.cm/context-variables/#branch) that for some reason didn’t pass the automatic approval tests?

On the other hand, some PRs might not have anything wrong, but still need to be assigned to a certain team based on expertise. In that case, you could set up several Slack automation actions at once, all with different webhooks and conditions. In an organization with different secrets for Slack webhooks to the `#security-team` channel, the `#qa-team` channel, and the `#docs-team` channel.

!!! tip "Send Slack Notifications"
    --8<-- "docs/automations/integrations/slack/slack-send-notification/README.md:example"

Using this template and custom logic specific to your company, you can build a complete repo management system that gets the right people actively involved by pinging them where they are in Slack.

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"