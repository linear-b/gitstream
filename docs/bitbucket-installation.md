---
title: How to Setup gitStream with Bitbucket
description: Install gitStream to your Bitbucket workspace.
---
# How to Setup gitStream with Bitbucket

!!! info "Prerequisites"

    1. Bitbucket Cloud account
    2. Bitbucket Pipelines enabled
    3. <a href="https://app.linearb.io/login" target="_blank">Login</a>, or <a href="https://app.linearb.io/sign-up" target="_blank">create a free account</a> on the LinearB app, and follow the steps to connect gitStream using a Bitbucket integration.

Bitbucket Installation Overview

1. Designate a gitStream user account.
2. Create a CM configuration file.
3. Create a Bitbucket pipeline.
4. Install the gitStream service.

## Designate a gitStream User Account

gitStream automation rules are executed on behalf of the user account configured when you install the gitStream service. This account must have the necessary permissions to the relevant repositories.

We recommend creating a dedicated service account to control access to individual repositories easily. You can also use your professional or personal Bitbucket account for this, which would result in all automations being executed under that account.

!!! tip "Use this account when you integrate gitStream"
    Make sure to use this account when authorizing Bitbucket in LinearB.

## Create a CM Configuration File

Create a `gitstream.cm` rules file in the root directory of your repository's default branch (usually `master` or `main`). This file will contain a YAML configuration that determines the workflows that run on your repositories. You can name the CM file anything you want as long as it ends in `.cm`.

!!! info "Configuration files go in the repo's root directory."
    Your `.cm` files should be placed in the repository's root directory.

!!! example "Example Configuration"
    ```yaml
    --8<-- "docs/downloads/gitstream-bb.cm"
    ```

## Create a Bitbucket Pipeline

Once your gitStream configuration file is set up, you need a Bitbucket Pipelines configuration file to trigger gitStream automations. Create a `.bitbucket-pipelines.yml` file in your repository's default branch (usually `master` or `main`) and add the following configuration:

```yaml
--8<-- "docs/downloads/bitbucket-pipelines.yml"
```

!!! warning "Note"
    The `add-label` action is not supported in Bitbucket as Bitbucket does not have a native labeling feature.

## Install the gitStream Service

To complete the setup, install the gitStream service in your Bitbucket workspace. Follow the instructions provided in the LinearB app to connect your Bitbucket account and repositories to gitStream.

## Next Step
If you successfully complete these instructions, gitStream will now automate your code review workflows in Bitbucket.

!!! tip "How gitStream Works"
    Read our guide, [How gitStream Works](/how-it-works/), for a deeper understanding of gitStream's capabilities and how to leverage them fully.

## Additional Resources

### Required Bitbucket Permissions

The required permissions are:

| Permissions       | Reason                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Read/Write API    | To get notified on PR changes and allow gitStream to approve PRs once all conditions are met |
| Read repository   | To read and check rules over the code changes on monitored repositories                      |
| Read user profile | Used to identify users                                                                       |

</markdown>
