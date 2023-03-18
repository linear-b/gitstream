# GitHub setup for organization 

Organization level rules are defined by creating a special repository named `cm` in the organization or group. In this repository, you can add CM automation files, which will apply to **all** the repositories that gitStream app is connected. 

**Step 1 of 3:** Create a `cm` repository in your GitHub organization.

!!! note

    Make sure gitStream app is installed for the new `cm` repository in [GitHub](https://github.com/apps/gitstream-cm/installations/new){ .md-button }.

**Step 2 of 3:** Create a `gitstream.cm` rules file in your repository default branch (usually `master` or `main`) with the following contents:

!!! note 

    Unlike the repository rules, the CM file should be placed in the repository root directory

```yaml+jinja
--8<-- "docs/downloads/gitstream.cm"
```

**Step 3 of 3:** Create a `.github/workflows/gitstream.yml` action file in your `cm` repository default branch (usually `master` or `main`) with the following contents:

```yaml+jinja
--8<-- "docs/downloads/gitstream.yml"
```

Once this step is completed, **all** your PRs from all your repositories will be processed by this GitHub action in this repo.

## Next steps

To learn more on how this works and how to configure it, [read here](/cm-file#automation-rules).

!!! tip 

    You need to set gitStream as required check for each repository to allow gitStream blocking PRs from merging under certain conditions, [set gitStream as required check](github-required-check.md).

## Configuration files

Eventually, the following files should exist in the `cm` repository:

```
.
├─ gitstream.cm
├─ .github/
│  └─ workflows/
│     └─ gitstream.yml
```

| File and path         | Reason |
|-----------------------|----------------------------------------|
| `*.cm`    | Under the repo's root directory, any file that ends with `.cm` will be used by gitStream to specify automation rules, you can edit these files |
| `.github/workflows/gitstream.yml` | Used by gitStream to execute automation rules in your GitHub repo so source code doesn't get to outside services |
