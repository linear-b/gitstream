---
title: How to Setup gitStream with GitLab
description: Install gitStream to your GitLab organization.
---
# How to Setup gitStream with GitLab

!!! info "Prerequisites"

    1. GitLab
    2. GitLab runner v15 or higher with ability to run apk commands
    3. <a href="https://app.linearb.io/login" target="_blank">Login</a>, or <a href="https://app.linearb.io/sign-up" target="_blank">create a free account</a> on the LinearB app, and follow the steps to <a href="https://linearb.helpdocs.io/article/0xxpvue4s9-connect-git-stream-using-a-git-lab-integration" target="_blank">connect gitStream Using a GitLab Integration</a>.
    4. Allowed network connection between the executors and the following IPs:
        - 13.56.203.235
        - 54.151.81.98

GitLab Installation Overview

1. Designate a gitStream user account.
1. Create a `cm` repo and `.cm` configuration file.
1. Create a GitLab pipeline.
1. Connect gitStream in LinearB. 

## Designate a gitStream User Account

gitStream automation rules are executed on behalf of the user account configured when you install the gitStream service. This account must have the `maintainer` or `owner` role to the relevant repos. 

We recommend creating a [dedicated service account](https://docs.gitlab.com/ee/user/profile/service_accounts.html){:target="_blank"} to control access to individual repos easily. You can also use your professional or personal GitLab account for this, which would result in all automations being executed under that account, which might also affect LinearB's metrics.

!!! tip "Use this account when you integrate gitStream"
    Make sure to use this account when authorizing GitLab in LinearB.

## Create a `cm` repo and `.cm` configuration file.

Create a `cm` project (repository) in your GitLab group. This repository must be created in the same group or parent group as the target repositories. In the root directory of the default branch (usually `master` or `main`), create a `gitstream.cm` rules file to define the workflow automations. The file name can vary but must end in `.cm`.

!!! info "Configuration File Locations"
	Group-level rules require your `.cm` files to be placed in the `cm` repository's root directory.
	You can also define specific repo-level rules under the `.cm` folder in each of the connected repositories.

!!! example "Example Configuration"
		--8<-- "docs/downloads/gitStream-gl.cm"

!!! warning "Explicit triggers are not supported"
    The `triggers` and `on` functionality are not currently supported in GitLab. If you include them in your CM automation files, gitStream will skip the automations entirely.

## Create a GitLab Pipeline

Once your gitStream configuration file is set up, you need a GitLab CI configuration file to trigger gitStream automations. Create a `cm` project (repository) in your GitLab group if you haven't already. It should be created in the same group or a parent group of the target repositories. Create a `.gitlab-ci.yml` file in your new `cm` repository's default branch (usually `master` or `main`) and add the following configuration:

=== "GitLab-Hosted runners"

    **Gitlab-Hosted Runners**
    
    Use the following `.gitlab-ci.yml`

	``` yaml+jinja
    --8<-- "docs/downloads/gitlab-ci.yml"
    ```

=== "Self-Managed Runners - Shell"
    **Self-Managed Runners**

	First, [register the runner](https://docs.gitlab.com/runner/register/){:target="_blank"} with a tag, and use the named tag in the `.gitlab-ci.yml` file

	**Shell executors**

	Use the tag created above in the workflow file `cm/.gitlab-ci.yml` instead `REGISTERED-TAG`
    ``` yaml+jinja
    --8<-- "docs/downloads/gitlab-shell-ci.yml"
    ```
    
=== "Self-Managed Runners - Kubernetes"
    **Self-Managed Runners**

	First, [register the runner](https://docs.gitlab.com/runner/register/){:target="_blank"} with a tag, and use the named tag in the `.gitlab-ci.yml` file

	**Kubernetes executors**
	
    1. Ensure your runner configuration (`config.toml` for example) has the followig:
	``` yaml
	[runners.kubernetes]
    privileged = true
	```
	2. Use the tag created above in the workflow file `cm/.gitlab-ci.yml` instead `REGISTERED-TAG`
    ``` yaml+jinja
    --8<-- "docs/downloads/gitlab-k8s-ci.yml"
    ```

!!! tip "**Configuring the image location**"
	By default, gitStream pulls the image from DockerHub each time it is invoked. You can configure gitStream to pull the docker image from your own registry, to allow faster build times and reduced bandwidth usage - especially for teams with high CI/CD throughput, by downloading the image and storing it in your own registry (ECR or K8S registry, for example) and changing the `cm/.gitlab-ci.yml` accordingly:
	```
	script:
    - ...
    - docker pull YOUR-REGISTRY-URL/gitstream/rules-engine:latest
	```
	The docker image can be pulled to your private repository from [DockerHub](https://hub.docker.com/r/gitstream/rules-engine){:target=_blank}.  

## Connect gitStream in LinearB

To complete the setup, connect gitStream in LinearB. Follow the instructions in the LinearB app to connect your GitLab account and repositories to gitStream.

## Next Step
If you complete these instructions, gitStream will now automate your Merge Request workflows on GitLab.

!!! tip "How gitStream Works"
    Read our guide, [How gitStream Works](/how-it-works/), for a deeper understanding of gitStream's capabilities and how to leverage them fully.

## Additional Resources


### Required GitLab Permissions

The required permissions are:

| Permissions       | Reason                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Read/Write API    | To get notified on MR changes and allow gitStream to approve MRs once all conditions are met |
| Read repository   | To read and check rules over the code changes on monitored repositories                      |
| Read user profile | Used to identify users                                                                       |


