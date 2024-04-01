---
title: How to Setup gitStream with GitLab
description: Install gitStream to your GitLab organization.
---
# How to Setup gitStream with GitLab

!!! info "Prerequisites"

    1. GitLab cloud
    2. GitLab runner v15 or higher
    3. <a href="https://app.linearb.io/login" target="_blank">Login</a>, or <a href="https://app.linearb.io/sign-up" target="_blank">create a free account</a> on the LinearB app, and follow the steps to <a href="https://linearb.helpdocs.io/article/0xxpvue4s9-connect-git-stream-using-a-git-lab-integration" target="_blank">connect gitStream Using a GitLab Integration</a>.

GitLab Installation Overview

1. Designate a gitStream user account.
1. Create a CM configuration file.
1. Create a GitLab pipeline.
1. Install the gitStream service. 

## 1. Designate a gitStream User Account

gitStream automation rules are executed on behalf of the user account configured when you install the gitStream service. This account must have the `maintainer` or `owner` role to the relevant repos. 

We recommend creating a [dedicated service account](https://docs.gitlab.com/ee/user/profile/service_accounts.html){:target="_blank"} to control access to individual repos easily. You can also use your professional or personal GitLab account for this, which would result in all automations being executed under that account, which might also affect LinearB's metrics.

!!! tip "Use this account when you integrate gitStream"
    Make sure to use this account when authorizing GitLab in LinearB.

## 2. Create a CM Configuration File


You can set up gitStream for a single repo or your entire GitLab organization. Select the tab below for the instructions you want.
=== "Single Repo"
    **Single Repo Setup**

    Create a `.cm/gitstream.cm` rules file in your repository's default branch (usually `master` or `main`). This file will contain a YAML configuration that determines the workflows that run on the repo, and you can name it anything you want as long as it ends in `.cm`

    !!! example "Example Configuration"


        Here is an example of a gitStream configuration file you can use to setup some basic workflow automations.

        ```yaml+jinja
        --8<-- "docs/downloads/gitstream.cm"
        ```

=== "GitLab Group"
    **GitLab Group Setup**

    Group rules are ideal when you want to enforce consistent rules across every repo in your GitLab group. You can define them by creating a special repository named `cm` in the parent group for the git repositories you want to run gitStream on. Here, you can add automation files that will apply to **all** repositories within that group.

    Create a `cm` project (repository) in your GitLab group, and create a `gitstream.cm` rules file in the root directory of your `cm` repository's default branch (usually `master` or `main`). This file will contain a YAML configuration that determines the workflows that run on your organization's repos. You can name the CM file anything you want as long as it ends in `.cm`

    !!! info "Configuration files go in the repo's root directory."
        Unlike the set up instructions for a single repo, your `.cm` files should be placed in the repository's root directory.

    !!! example "Example Configuration"
            Here is an example of a gitStream configuration file you can use to setup some basic workflow automations.
            ```yaml+jinja
            --8<-- "docs/downloads/gitstream.cm"
            ```

## 3. Create a GitLab Pipeline

Once your gitStream configuration file is set up, you need a GitLab CI configuration file to trigger gitStream automations. If you haven't already, create a `cm` project (repository) in your GitLab group. It should be created in the same group or a parent group of the target repositories. Create a `.gitlab-ci.yml` file in your new `cm` repository's default branch (usually `master` or `main`) and add the following configuration:

=== "GitLab-Hosted runners"

    **Gitlab-Hosted Runners**
    
    Use the following `.gitlab-ci.yml`

	``` yaml+jinja
    --8<-- "docs/downloads/gitlab-ci.yml"
    ```

=== "Self-Managed Runners - Shell"
    **Self-Managed Runners**

	First, [register the runner](https://docs.gitlab.com/runner/register/){:target="_blank"} with a tag, and use the named tag in the `.gitlab-ci.yml` file

	### Shell executors

	Use the tag created above in the workflow file `cm/.gitlab-ci.yml` instead `REGISTERED-TAG`
    ``` yaml+jinja
    --8<-- "docs/downloads/gitlab-shell-ci.yml"
    ```
    
=== "Self-Managed Runners - Kubernetes"
    **Self-Managed Runners**

	First, [register the runner](https://docs.gitlab.com/runner/register/){:target="_blank"} with a tag, and use the named tag in the `.gitlab-ci.yml` file

	### Kubernetes executors
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
## Next Step
If you successfully complete these instructions, gitStream will now do these two things.

When a PR is created or changed, apply or update a label that provides an estimated time to review.
![Estimated Review Time label](automations/provide-estimated-time-to-review/provide_estimated_time_to_review.png)

When a `suggest-reviewers` label is applied to a PR, gitStream will comment with a list of code experts.
![Suggested reviewers](automations/standard/review-assignment/assign-code-experts/assign_code_experts.png)


!!! tip "How gitStream Works"
    Read our guide, [How gitStream Works](/how-it-works/), for a deeper understanding of gitStream's capabilities and how to leverage them fully and to get an overview of the gitStream syntax and automation lifecycle.

## Additional Resources


### Required GitLab Permissions

The required permissions are:

| Permissions       | Reason                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Read/Write API    | To get notified on MR changes and allow gitStream to approve MRs once all conditions are met |
| Read repository   | To read and check rules over the code changes on monitored repositories                      |
| Read user profile | Used to identify users                                                                       |


