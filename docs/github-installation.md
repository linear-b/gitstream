# GitHub app installation 

## Installation

!!! note

    Make sure gitStream app is installed in [GitHub](https://github.com/apps/gitstream-cm/installations/new){ .md-button }.

**Step 1 of 2:** Create a `.cm/gitstream.cm` rules file in your repository default branch (usually `master` or `main`) with the following contents:

```yaml+jinja
--8<-- "docs/downloads/gitstream.cm"
```

**Step 2 of 2:** Create a `.github/workflows/gitstream.yml` action file in your repository default branch (usually `master` or `main`) with the following contents:

```yaml+jinja
--8<-- "docs/downloads/gitstream.yml"
```

## Next steps

To learn how to add your first rule, jump to the [Quick Start](quick-start.md) page.

!!! tip 

    To allow gitStream blocking PRs from merging under certain conditions, [set gitStream as required check](github-required-check.md).

## Configuration files

Eventually, the following files should exist in each of the selected repos:

```
.
├─ .cm/
│  └─ gitstream.cm
├─ .github/
│  └─ workflows/
│     └─ gitstream.yml
```

| File and path         | Reason |
|-----------------------|----------------------------------------|
| `.cm/*.cm`    | Under the repo's `.cm` directory, any file that ends with `.cm` will be used by gitStream to specify automation rules, you can edit these files |
| `.github/workflows/gitstream.yml` | Used by gitStream to execute automation rules in your GitHub repo so source code doesn't get to outside services |

## Permissions

The required permissions are: 

| Permissions           | Reason |
|----------------------|-------------------------------------------------------|
| Write access to dedicated gitStream app files | Used to set up the gitStream workflow files |
| Write access to code | To allow gitStream to approve PRs once all conditions are met |
| Read access to administration, issues, and metadata | To get the user team membership, and branch protection settings |
| Read and write access to actions, checks, pull requests, and workflows | Trigger workflows, create and update pull requests and their checks, and modify workflow files |
| User email | Used to identify users |
