# GitLab installation

Prerequisites:

1. GitLab cloud
2. GitLab runner v15 or higher

!!! tip

	Automation rules by gitStream are executed on behalf of the user account used to install it. We recommend to continue with a new dedicated account (e.g. `gitstream-cm`) in GitLab and install gitStream app with it. The service account has to have `Maintainer`  role.

## Installation

**Step 1 of 4:** Create a `.cm/gitstream.cm` rules file in the work repository default branch (usually `master` or `main`) with the following contents:

```yaml
--8<-- "docs/downloads/gitstream.cm"
```

**Step 2 of 4:** Create a new `cm` project (repository) in your GitLab group. It should be created in the same group or a parent group of the target repositories.

**Step 3 of 4:** Create a `./.gitlab-ci.yml` CI/CD file in the `cm` repository default branch (usually `master` or `main`) with the following contents:

```yaml
--8<-- "docs/downloads/gitlab-ci.yml"
```

**Step 4 of 4:** Install gitStream app for [GitLab](https://api.gitstream.cm/auth/grant/gitlab){ .md-button }.


## Next steps

To learn how to add your first rule, jump to the [Quick Start](quick-start.md) page.

## Configuration files

Eventually, the following files should exist in each of the selected repos:

In the `cm` repository:

```text
.
├─ .gitlab-ci.yml
```

In your target repository:

```text
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

	When renaming or adding new repositories, you must re-authenticate gitStream in [GitLab](https://api.gitstream.cm/auth/grant/gitlab)

The required permissions are:

| Permissions           | Reason |
|----------------------|-------------------------------------------------------|
| Read/Write API | To get notified on MR changes and allow gitStream to approve MRs once all conditions are met |
| Read repository | To read and check rules over the code changes on monitored repositories |
| Read user profile | Used to identify users |

## gitStream actions

Automation rules by gitStream are executed on behalf of the user account used to install it. We recommend using a new dedicated account in GitLab for installing gitStream, e.g. `gitstream`