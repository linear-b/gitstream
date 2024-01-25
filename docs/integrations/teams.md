---
title: Integrate gitStream with Microsoft Teams
description: Implement workflow automations that connect your git repo to MS Teams.
---
# Integrate gitStream with Microsoft Teams

This page demonstrates uses cases for how to connect gitStream to Microsoft Teams to post messages via webhooks.

## Prerequisite Configurations

To use gitStream with MS Teams, you first need to do two things:

1. Create an incoming webhook in Teams.
1. Provide your Teams webhook URL to gitStream as an organization environment variable.

### Set Up Incoming Webhooks in Teams
Microsoft Teams can accept incoming webhooks to send fully-featured messages to channels and individuals. [Here’s the complete tutorial from Microsoft](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?source=recommendations&tabs=dotnet#create-incoming-webhooks-1).

Here is an overview of the process:

Step 1: Add the Incoming Webhook connector inside MS Teams.

![Untitled](/downloads/images/integrations/teams/teams-pre-1.png)

Step 2: Give it a name and an image so your teammates can identify it easily and click create.

![Untitled](/downloads/images/integrations/teams/teams-pre-2.png)

Once created, copy the webhook URL, you'll need this in the next step.

!!! danger "Your webhook URL is secret information!" 
    Teams webhook URLs allow anyone with access to the URL to post to the channel its configured for. Do not publish this URL to public locations.
### Configure gitStream Environment Variable

gitStream can access GitHub orgnization secrets as environment variables, and you'll need to do this to provide gitStream with access to your Slack webhook URL. 

1. [Create an organization secret in GitHub](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/) and ensure it isn't being overridden by a repo-level secret of the same name.
2. [Pass the organization secret to gitStream](https://docs.gitstream.cm/context-variables/#env) as an environment variable in your `gitstream.yml` workflow file. We recommend using an easy to understand term like `MS_TEAMS_WEBHOOK_CHANNEL_NAME`.

![Untitled](/downloads/images/integrations/teams/teams-pre-3.png)


## How to Send Microsoft Teams Messages From gitStream

!!! example 
    To send Teams messages from gitStream, use the `send-http-request` automation action and pass the value you stored your webhook URL to the `url` argument.

    ```yaml
    automations:
    send_teams_message:
        if:
        - true
        run:
        - action: send-http-request@v1
            args:
            method: "POST"
                        headers: '{"Content-type": "application/json"}'
            url: "{{ env.MS_TEAMS_WEBHOOK }}"
                        body: '{"text": "Hello, world!"}'
    ```
## Auto-Recognition For Meeting Team Goals

A good choice to reward developers for submitting great PRs would be to automate an MS Teams message that gives the developer recognition among their colleagues. To do this, you’ll need to create a MS Teams webhook that sends to a channel full of reviewers, managers, and anybody else who should see the recognition.

!!! tip "Automatic MS Teams Recognition"
    --8<-- "docs/automations/integrations/teams/teams-auto-recognition/README.md:example"

## Message Specific Teams Based on PR content

You can also use the Slack integration to automatically keep in touch with code owners and others who should be connected to the PR. You could check for certain conditions that require a more personal review from an experienced maintainer, like:

- Will the PR [take too long to review](https://docs.gitstream.cm/filter-functions/#estimatedreviewtime)?
- Did [SonarCloud find vulnerabilities](https://docs.gitstream.cm/filter-functions/#extractsonarfindings)?
- Is this the author’s [first commit](https://docs.gitstream.cm/filter-functions/#isfirstcommit) or are they [new to the codebase](https://docs.gitstream.cm/filter-functions/#rankbygitactivity)?
- Is this [an automated PR](https://docs.gitstream.cm/context-variables/#branch) that for some reason didn’t pass the automatic approval tests?

On the other hand, some PRs might not have anything wrong, but still need to be assigned to a certain team based on expertise. In that case, you could set up several Teams automation actions at once, all with different webhooks and conditions. In an organization with different secrets for Teams webhooks to the `#security-team` channel, the `#qa-team` channel, and the `#docs-team` channel.

!!! tip "MS Teams Channels Notifications"
    --8<-- "docs/automations/integrations/teams/teams-send-notification/README.md:example"

Using this template and custom logic specific to your company, you can build a complete repo management system that gets the right people actively involved by pinging them where they are in Teams.

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"