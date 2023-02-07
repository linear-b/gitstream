# GitHub app installation 

**Step 1:** To start using gitStream with GitHub source code hosting, make sure you installed the gitStream app from [GitHub marketplace](https://github.com/marketplace/gitstream-by-linearb).

**Step 2:** Once installation completes, add the following 2 configurations files in the root of each of the selected repos - it should be added to the default branch (usually `master` or `main`).

Download the files:

1. Add `.github/workflows/gitstream.yml` [:octicons-download-24:](/downloads/gitstream.yml){ .md-button }
2. Add `.cm/gitstream.cm` [:octicons-download-24:](/downloads/gitstream.cm){ .md-button }

Or, if you prefer, copy and paste their content:

=== ":octicons-file-code-16: `.cm/gitstream.cm`"

    ```yaml+jinja
    --8<-- "docs/downloads/gitstream.cm"
    ```
=== ":octicons-file-code-16: `.github/workflows/gitstream.yml`"

    ```yaml+jinja   
    --8<-- "docs/downloads/gitstream.yml"
    ```

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

## Repository settings

!!! note

    To get the full potential using gitStream, you need to set it as a required check.

!!! attention

    To be able to select `gitStream.cm` as required check it should run at least once in the repo. Make sure to open at least 1 PR before doing this setting.


To make sure gitStream can block PRs from merging under certain conditions, set the following:

1. Go to repo `settings`
2. On the left panel select `Code and automation` > `Branches` 
3. Set `Branch protection rules` for your desired branch 
4. Enable `Require status checks to pass before merging`
5. Search for `status checks in the last week for this repository`
6. Select `gitStream.cm` as required check

![Branch protection rules](/screenshots/branch_protection_in_github.png)
  
![Required checks](/screenshots/required_checks_in_github.png)
