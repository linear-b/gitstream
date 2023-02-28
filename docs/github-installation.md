# GitHub app installation 

## Installation

**Step 1 of 4:** Make sure gitStream app is installed in [GitHub](https://github.com/apps/gitstream-cm/installations/new).

**Step 2 of 4:** Create a `.cm/gitstream.cm` rules file in your repository default branch (usually `master` or `main`) with the following contents:

```yaml+jinja
--8<-- "docs/downloads/gitstream.cm"
```

**Step 3 of 4:** Create a `.github/workflows/gitstream.yml` action file in your repository default branch (usually `master` or `main`) with the following contents:

```yaml+jinja
--8<-- "docs/downloads/gitstream.yml"
```

**Step 4 of 4:** To allow gitStream blocking PRs from merging under certain conditions, set the following:

!!! tip

    To be able to select `gitStream.cm` as required check it should run at least once in the repo. Make sure to open at least 1 PR before doing this setting.

1. Go to repo `settings`
2. On the left panel select `Code and automation` > `Branches` 
3. Set `Branch protection rules` for your desired branch 
4. Enable `Require status checks to pass before merging`
5. Search for `status checks in the last week for this repository`
6. Select `gitStream.cm` as required check

![Branch protection rules](/screenshots/branch_protection_in_github.png)
  
![Required checks](/screenshots/required_checks_in_github.png)


## Next steps

To learn how to add your first rule, jump to the [Quick Start](quick-start.md) page.

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
| Read access to administration, issues, and metadata | To read the code on monitored repositories |
| Read and write access to actions, checks, pull requests, and workflows | Trigger workflows, create and update pull requests and their checks, and modify workflow files |
| User email | Used to identify users |
