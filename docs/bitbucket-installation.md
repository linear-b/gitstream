---
title: How to Setup gitStream with Bitbucket
description: Install gitStream to your Bitbucket workspace.
---
# How to Setup gitStream with Bitbucket Cloud

!!! info "gitStream for Bitbucket Cloud is currently in **beta**"

    To start automating your Bitbucket pull requests and enhancing your development workflow, please [contact our product team](mailto:product@linearb.io) to request access and receive setup instructions.
    We’d love to hear your feedback and collaborate to improve this integration during the beta phase. Thank you for your interest!

!!! info "Prerequisites"

    1. Bitbucket Cloud account
    2. Bitbucket Pipelines enabled
    3. <a href="https://app.linearb.io/login" target="_blank">Login</a>, or <a href="https://app.linearb.io/sign-up" target="_blank">create a free account</a> on the LinearB app, and follow the steps to connect gitStream using a Bitbucket integration.
    4. A dedicated user for gitStream, whose name includes the term **"gitstream"**.
    5. Allowed network connection between the runners and the following IPs:
        - 13.56.203.235
        - 54.151.81.98

??? Info "Understanding IP Allowlisting for gitStream"
    When setting up IP allowlists in Bitbucket, you're specifying which source IP addresses are permitted to interact with your repositories and APIs. This affects both gitStream and your CI/CD runners.

    There are two primary cases where this matters for gitStream:

    1. **Webhook Event Handling by gitStream**
       When Bitbucket triggers a webhook event (e.g., a pull request opened), gitStream may need to make follow-up API calls to Bitbucket. This can include fetching additional metadata, posting comments to the PR, or performing other actions. These calls are made from the LinearB/gitStream service, which uses a fixed set of IP addresses. These IPs must be added to your Bitbucket allowlist to ensure proper operation.
    2. **Outbound Requests from Your CI Runner**
       When your pipeline runs gitStream, that runner might also make outbound calls to Bitbucket—for example, to clone a repository or retrieve commit history. These requests will originate from the runner's IP address.

    If you encounter errors due to blocked IPs during your CI runs, it's likely that the runner is using an IP that is not part of the configured allowlist.

    **Recommended Solution**
    To ensure reliability:

    - Add LinearB/gitStream service IPs to your Bitbucket allowlist (listed above).
    - Use self-hosted runners or runners with static IPs so you can manage and allowlist their addresses explicitly.

    This combination ensures that both gitStream's internal operations and your CI runners' interactions with Bitbucket function without network restrictions.

## Bitbucket Installation Overview

1. Designate a gitStream user account.
2. Create a `cm` repo and `.cm` configuration file.
3. Create a Bitbucket pipeline.
4. Configure self-hosted runners (if applicable).
5. Install the gitStream service.

## Designate a gitStream User Account

gitStream automation rules are executed by the user account configured when you authorize LinearB. A meaningful account identifier whose name contains the string `gitstream` (case insensitive), such as `gitStream-cm`, is required to ensure clarity and proper identification of the automated actions. This account must have the necessary permissions to the relevant repositories.

!!! tip "Use this account when you integrate gitStream"
    Make sure to use this account when authorizing Bitbucket in LinearB.

## Create a `cm` repo and `.cm` configuration file.

Create a `cm` repository in your Bitbucket workspace. This repository must reside in the same project as your target repositories. In the root directory of the default branch (usually `master` or `main`), create a `gitstream.cm` rules file to define the workflow automations. The file can have any name but must end with the `.cm` extension.

!!! warning "Changes Must Be in Main Branch"
    Ensure all changes to your `.cm` configuration files are committed to the main branch before proceeding with the setup.

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

## Configure Self-Hosted Runners (Optional)

If you're using self-hosted runners for your gitStream automation, follow these additional configuration steps:

**1. Self-Hosted Runner Must Be on the CM Repository**

Self-hosted runners need to be configured specifically for the `cm` repository where your gitStream configuration files are stored.

**2. Update Pipeline Configuration**

Add the following configuration to your `bitbucket-pipelines.yml` in the gitstream custom pipeline section:

```yaml
runs-on:
  - self.hosted # Required to indicate a self-hosted runner
  - cmgitstreamrunner # Must use custom label for gitStream runner
```

**3. Configure Runner Labels in Bitbucket**

!!! important "Required Runner Labels"
    You MUST add the following labels to your self-hosted runner in Bitbucket:

    - `self.hosted` (provided by default)
    - `linux` (provided by default)
    - `cmgitstreamrunner` (custom label you need to add)

    The `cmgitstreamrunner` label is required for gitStream to properly identify and use your self-hosted runner.

**4. Verify Runner Configuration**

!!! warning "Labels are **not supported**"
    The `add-label` action is not supported in Bitbucket as Bitbucket does not have a native labeling feature.

!!! warning "Explicit triggers are **not supported**"
    The `triggers` and `on` functionality are not currently supported in Bitbucket. If you include them in your CM automation files, gitStream will skip the automations entirely.

## Install the gitStream Service

To complete the setup, install the gitStream service in your Bitbucket workspace. Follow the instructions provided in the LinearB app to connect your Bitbucket account and repositories to gitStream.

## Next Step
If you successfully complete these instructions, gitStream will now automate your code review workflows in Bitbucket.

!!! tip "How gitStream Works"
    Read our guide, [How gitStream Works](/how-it-works/), for a deeper understanding of gitStream's capabilities and how to leverage them fully.

## Additional Resources

### Required Bitbucket Permissions

The required permissions are:


| Scope                                               | Description                                                  |
|-----------------------------------------------------|--------------------------------------------------------------|
| `account: email, read`                              | Access user account information and email.                   |
| `repositories: read, write, admin`                  | Read, write, and administer repositories.                    |
| `pullrequest: read, write`                          | Read and modify pull requests.                               |
| `webhook: read, write`                              | Read and manage webhooks.                                    |
| `pipeline: read, write`                             | Read and write pipelines.                                    |
| `runner: read, write`                               | Read and manage runners.

</markdown>
