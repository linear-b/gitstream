# How to Setup gitStream with GitLab

!!! info "Prerequisites"

    1. GitLab cloud
    1. GitLab runner v15 or higher

Gitlab Installation Overview

1. Designate a gitStream user account.
1. Create a CM configuration file.
1. Create a GitLab pipeline.
1. Install the gitStream service. 

## 1. Designate a gitStream User Account

gitStream automation rules are executed on behalf of the user account that is logged in when you install the gitStream service. This account must have the `Maintainer` role. 

We recommend creating a dedicated account for this purpose so you can more easily control access to individual repos. You can also use your professional or personal GitLab account for this, but that would result in all automations being executed under that account.

!!! tip "Use this account when you install gitStream"
    Make sure you're logged into this user account in the web browser that you use to click the installation button in step 4.

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

Once your gitStream configuration file is setup, you need a GitLab CI configuration file to trigger gitStream automations. If you haven't already, create a `cm` project (repository) in your GitLab group. It should be created in the same group or a parent group of the target repositories. Create a `.gitlab-ci.yml` file in your new `cm` repository's default branch (usually `master` or `main`) and add the following configuration:

```yaml+jinja
--8<-- "docs/downloads/gitlab-ci.yml"
```
## 4. Install the gitStream Service
The last step of the process is to install the gitStream app to your [GitLab organization](https://api.gitstream.cm/auth/grant/gitlab){ .md-button }. Make sure you're authenticated with the account you designated in step 1 before clicking this link.

!!! warning "Reinstall gitStream after project changes."

	When renaming or adding new repositories, you must re-authenticate gitStream in [GitLab](https://api.gitstream.cm/auth/grant/gitlab)

## Next Step
If you successfully completed these instructions, gitStream will now do these two things.

When a PR is created or changed, apply or update a label that provides an estimated time to review.
![Estimated Review Time label](automations/provide-estimated-time-to-review/provide_estimated_time_to_review.png)

When a `suggest-reviewers` label is applied to a PR, gitStream will comment with a list of code experts.
![Suggested reviewers](automations/assign-code-experts/assign_code_experts.png)


!!! tip "How gitStream Works"
        Read our guide: [How gitStream Works](/how-it-works/) to get an overview of the gitStream syntax and automation lifecycle.

## Additional Resources


### Required GitLab Permissions

The required permissions are:

| Permissions           | Reason |
|----------------------|-------------------------------------------------------|
| Read/Write API | To get notified on MR changes and allow gitStream to approve MRs once all conditions are met |
| Read repository | To read and check rules over the code changes on monitored repositories |
| Read user profile | Used to identify users |

### FAQ
**Does gitStream support the ability to block merges?"**

gitStream actions that blocks MR merge are not supported at the moment.

**How do I uninstall gitStream?**

Use the following link to uninstall gitStream app for [GitLab](https://webhooks.gitstream.cm/auth/grant/gitlab?state=uninstall){ .md-button }.

!!! warning

	The uninstalling account has to have at least `Developer` or `Maintainer` role in the Group.

**What is a gitStream service account?**

gitStream executes rules on behalf of the user account that was used to install it. We recommend using a new dedicated account in GitLab for installing gitStream.

