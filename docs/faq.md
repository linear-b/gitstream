---
title: gitStream Frequently Asked Questions
description: Get help with gitStream.
---
# FAQ

## What permissions are needed?

In your repo permissions, make sure GitHub actions are permitted:

Go to Repo's settings > Actions > General > Actions permissions

Choose which repositories are permitted to use GitHub Actions.

[x] Allow all actions and reusable workflows

## Does gitStream services have access to my code?

Like any other CI/CD automation, the source code is being scanned in the repo and is not shared with any external services. Only metadata related to and affecting the workflow is shared to allow rule-based automation on the repo.

## Why does gitStream require permission to write code?
To support automations that either Approve or Merge PRs, the git providers require code write scope.

## What repos are supported?

gitStream supports repositories in GitHub, GitLab, and Bitbucket. Note that the `add-label` action is not supported in Bitbucket as it does not have a native labeling feature.

## Are there limits on gitStream automations for free accounts?

Yes. Free accounts have a monthly limit on the number of pull requests that can trigger automations. It is limited to 250 pull requests each month per Git owner or organization.

- When the organization reaches 90% of the limit, a warning will appear in PR comments.
- Once the limit is exceeded, new PRs will not trigger automations and will be marked as "Skipped."
- The limit resets at the start of each month.

To remove automation limits, <a href="https://linearb.io/contact-us" target="_blank">Contact LinearB</a> and upgrade to a paid plan.
🔗 Learn more: [Automation Limits](limits.md)

## Can I use gitStream with Merge Queues?

Yes. When a merge queue is used, and gitStream is set as a required check, gitStream automation will be invoked with the merge event. The automation will set gitStream to a `Completed` status and `Skipped` conclusion to allow the PR merge.
![gitStream with Merge Queue](screenshots/merge-queue-check.png)

## Is there .cm syntax highlighting?

The `.cm` file uses YAML with JINJA2. For your favorite editor to automatically choose the right syntax, you can use modelines.

Add the following line to the top of the `.cm` file (the default has it already):

```
# -*- mode: yaml -*-
```

Get a plug-in that enables modelines. Popular ones are:

- VS Code: [Modelines](https://marketplace.visualstudio.com/items?itemName=chrislajoie.vscode-modelines)
- Sublime Text: [CM syntax for ST4](https://packagecontrol.io/packages/Continuous%20Merge) or [Emacs-like Sublime Modeline](https://github.com/kvs/STEmacsModelines)
- Vim [Modeline magic](https://vim.fandom.com/wiki/Modeline_magic)

## I have an issue I can't seem to solve. What should I do?

If you encounter an issue, please visit our [Troubleshooting page](troubleshooting.md) for guidance and solutions to common problems. 

If your issue persists and you cannot find a resolution, contact our support team directly by emailing [support@linearb.io](mailto:support@linearb.io). We're here to help!
