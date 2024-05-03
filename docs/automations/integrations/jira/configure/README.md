---
title: Prerequisite configurations for Jira
description: Learn how to configure gitStream to integrate with Jira.
---
# Configure Jira for gitStream Integrations

If you want to build gitStream automations to interact with the Jira API or Jira webhooks, you'll need to complete some setup in Jira, GitHub, and gitStream. This section outlines the setup process depending on the type of automation you want to build.

!!! tip "These guides are for sending HTTP requests to Jira"
    If the gitStream automations you want to use don't make any HTTP requests to a Jira API or webhook, you can ignore this section.

## Use Webhooks to Trigger Jira Automations

<a target="_blank" href="https://www.atlassian.com/software/jira/features/automation">Jira automations</a> are the preferred method for gitStream to trigger actions within Jira, so you should use them whenever possible. If webhooks don't provide access to the data you need, or acheive the functionality you want, use the Jira API instead.

 First, create a Jira automation that uses an incoming webhook as the trigger and add whatever automation components you want after this trigger. Save the webhook URL in a secure place, you'll need it later. 
 
 Here is an example of an automation that uses the `webhookData` property of the incoming data payload to create a new task. It expects the incoming data payload to contain `title` and `pr_url` fields to set the task summary and a `pr_url` custom field our demo environment already has configured.
 
 ![Jira Automation Example - Create task from incoming webhook](/automations/integrations/jira/configure/jira-webhook-automation.png)

<a target="_blank" href="https://confluence.atlassian.com/jirakb/working-with-incoming-webhook-data-in-automation-for-jira-1125878776.html"> Learn more about working with incoming webhooks in the Jira docs </a>

 Next, in GitHub, create an organization secret to store your Jira webhook URL and pass it to gitStream's [`env` context variable](/context-variables/#env) by adding a line to `.github/workflows/gitstream.yml` inside your repo. Make sure to give this a unique name, such as `JIRA_CREATE_ISSUE_WEBHOOK: ${{ secrets.JIRA_CREATE_ISSUE_WEBHOOK }}`.

Once finished, you can use the `env.JIRA_CREATE_ISSUE_WEBHOOK` context variable inside CM files to send HTTP requests to Jira from your GitHub repo. For an example of how to do this, check out the [create Jira issue](/automations/integrations/jira/create-jira-issue) automation.


## Connect to the Jira API

The Jira API is useful in situations where you need to retreive data from Jira or need to access capabilities that aren't available via Jira Automations. The Jira API uses an account-based token system that follows a basic auth model; this means you'll need an individual account to connect to Jira's APIs and will pass the account email address and API token in the headers of your API requests.

Here's the process to grant gitStream access to the Jira API:

1. <a target="_blank" href="https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/">Create an API token</a> for your Jira account, and give it a unique name. Copy the API token, you'll need it in the next step.
1. Create a GitHub organization secret to store the token and make the secret available to gitStream's [`env` context variable](/context-variables/#env).
1. Add `env.MY_API_TOKEN` to any of your CM automations to access the API token and pass it to plugins and automation actions.

Check out the [`hasJiraIssue`](/filter-function-plugins/#hasjiraissue) filter plugin for an example of how to use Jira API tokens.
