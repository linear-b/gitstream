---
title: How to Setup gitStream with Bitbucket
description: Install gitStream to your Bitbucket workspace.
---
# How to Setup gitStream with Bitbucket Cloud

!!! info "gitStream for Bitbucket Cloud is currently in **beta**"
    
    To start automating your Bitbucket pull requests and enhancing your development workflow, please [contact our support team](mailto:support@linearb.io) to request access and receive setup instructions.  
    We’d love to hear your feedback and collaborate to improve this integration during the beta phase. Thank you for your interest!  

!!! info "Prerequisites"

    1. Bitbucket Cloud account
    2. Bitbucket Pipelines enabled
    3. <a href="https://app.linearb.io/login" target="_blank">Login</a>, or <a href="https://app.linearb.io/sign-up" target="_blank">create a free account</a> on the LinearB app, and follow the steps to connect gitStream using a Bitbucket integration.
    4. A dedicated user for gitStream, whose name includes the term **"gitstream"**.  

Bitbucket Installation Overview

1. Designate a gitStream user account.
2. Create a `cm` repo and `.cm` configuration file.
3. Create a Bitbucket pipeline.
4. Install the gitStream service.

## Designate a gitStream User Account

gitStream automation rules are executed by the user account configured when you authorize LinearB. A meaningful account identifier whose name contains the string `gitstream` (case insensitive), such as `gitStream-cm`, is required to ensure clarity and proper identification of the automated actions. This account must have the necessary permissions to the relevant repositories.

!!! tip "Use this account when you integrate gitStream"
    Make sure to use this account when authorizing Bitbucket in LinearB.

## Create a `cm` repo and `.cm` configuration file.

Create a `cm` repository in your Bitbucket workspace. This repository must reside in the same project as your target repositories. In the root directory of the default branch (usually `master` or `main`), create a `gitstream.cm` rules file to define the workflow automations. The file can have any name but must end with the `.cm` extension.

!!! info "Configuration File Locations"
	Group-level rules require your `.cm` files to be placed in the `cm` repository's root directory.
	You can also define specific repo-level rules under the `.cm` folder in each of the connected repositories
 
!!! example "Example Configuration"
    ```yaml
    --8<-- "docs/downloads/gitstream-bb.cm"
    ```

## Create a Bitbucket Pipeline

Once your gitStream configuration file is set up, you need a Bitbucket Pipelines configuration file to trigger gitStream automations. Create a `bitbucket-pipelines.yml` file in your `cm` repository's default branch and add the following configuration:

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
