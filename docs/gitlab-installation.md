# GitLab installation 

!!! warning

    Please note that the GitLab support feature is still in beta, which means that the feature set is incomplete and subject to changes. There may be some bugs or unexpected behavior that we haven't caught yet. Please bear with us as we continue to add missing functionality and refine it.

!!! warning

    GitLab runner v15 or higher are supported

!!! warning

    The follwoing actions are supported: `add-comment`, `add-label`, `add-labels`, `add-reviewers`, `approve`, `close`, and `merge`.

## Installation

**Step 1 of 4:** Create a new `cm` project (repository) in your GitLab group.

!!! tip 

    Automation rules by gitStream are executed on behalf of the user account used to install it. We recommend to continue with a new dedicated account (e.g. `gitstream-cm`) in GitLab and install gitStream app with it. The service acocunt has to have `Maintainer`  role.

**Step 2 of 4:** Create a `./.gitlab-ci.yml` CI/CD file in the `cm` repository default branch (usually `master` or `main`) with the following contents:

```yaml+jinja
--8<-- "docs/downloads/gitlab-ci.yml"
```

**Step 3 of 4:** Install gitStream app for [GitLab with OAuth](https://api.gitstream.cm/auth/grant/gitlab).

!!! note 

    When you connect gitStream, webhooks will be installed in all of your repositories. However, automation rules will only be applied to the repositories for which you have added such rules. As a result, the cm repository pipeline will display activity for all connected repositories. If you want to minimize pipeline usage, you can manually remove the installed webhooks from repositories that you don't need.

**Step 4 of 4:** Create a `.cm/gitstream.cm` rules file in the work repository default branch (usually `master` or `main`) with the following contents:

```yaml+jinja
--8<-- "docs/downloads/gitstream.cm"
```

!!! tip "Learn how to add your first rule"

    Jump to the [Quick Start](quick-start.md) page.


## Configuration files

Eventually, the following files should exist in each of the selected repos:

In the `cm` repository:

```
.
├─ .gitlab-ci.yml
```

In your target repository:

```
.
├─ .cm/
│  └─ gitstream.cm
```

| File and path         | Reason |
|-----------------------|----------------------------------------|
| `.cm/*.cm`    | Under the repo's `.cm` directory, any file that ends with `.cm` will be used by gitStream to specify automation rules, you can edit these files |
| `.gitlab-ci.yml` | Used by gitStream to execute automation rules in your GitLab repo so source code doesn't get to outside services |

## Permissions

!!! attention 

	When renaming or adding new repositories, you must re-authenticate gitStream in [GitLab using OAuth](https://api.gitstream.cm/auth/grant/gitlab)

The required permissions are: 

| Permissions           | Reason |
|----------------------|-------------------------------------------------------|
| Read/Write API | To get notified on MR changes and allow gitStream to approve MRs once all conditions are met |
| Read repository | To read and check rules over the code changes on monitored repositories |
| Read user profile | Used to identify users |

## gitStream actions

Automation rules by gitStream are executed on behalf of the user account used to install it. We recommend using a new dedicated account in GitLab for installing gitStream, e.g. `gitstream`

Since GitLab doesn't support a bot entity, some gitStream actions are annotated with a special watermark to be able to tell if those actions were made by gitStream or by the user, in case a real user account was used to install gitStream. 

The watermark is added as follows:

| Action  | Field   | Watermark |
| ------- | ------- | --------- |
| Label   | label's description | "by gitStream" |
| Comment | comment's last line | "by gitStream" |
| Request change | comment's last line | "Change requested by gitStream" |
