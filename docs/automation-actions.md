---
title: gitStream Reference - Automation Actions
description: Automation Actions enable gitStream to make changes to your PRs.
---
# Automation actions

Actions are the end results of the automation described in your `.cm` file.

!!! note 

    The icons for Git providers indicate the actions supported by each provider.

    - GitHub :fontawesome-brands-github:
    - GitLab :fontawesome-brands-gitlab:

## Overview

gitStream executes actions in the order they are listed. If an action result fails, following actions will not be executed.

- [`add-comment`](#add-comment) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-github-check`](#add-github-check) :fontawesome-brands-github:
- [`add-label`](#add-label) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-labels`](#add-labels) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-reviewers`](#add-reviewers) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`explain-code-experts`](#explain-code-experts) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`approve`](#approve) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`close`](#close) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`merge`](#merge) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`set-required-approvals`](#set-required-approvals) :fontawesome-brands-github:
- [`request-changes`](#request-changes) :fontawesome-brands-github:
- [`require-reviewers`](#require-reviewers) :fontawesome-brands-github:
- [`run-github-workflow`](#run-github-workflow) :fontawesome-brands-github:


!!! note

    Multiple actions can be listed in a single automation. The actions are invoked one by one.

#### Dynamic actions arguments

Arguments values a dynamic value is supported using expressions based on Jinja2 syntax, and includes gitStream context variables, for example:

```yaml+jinja
automations:
  pr_complexity:
    if:
      - true
    run:
      - action: add-comment@v1
        args:
          comment: "Estimated {{ branch | estimatedReviewTime }} minutes to review"
```


## Reference 

#### `add-comment` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, adds a comment to the PR.

This is a manged action, when a PR updates, the existing comments that were added by gitStream are re-evaluated and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                         |
| -----------|------|-----|------------------------------------------------ |
| `comment`  | Required | String    | Sets the comment, markdown is supported |

</div>

```yaml+jinja title="example"
automations:
  senior_review:
    if:
      - {{ files | match(term='core/') | some }}
    run:
      - action: add-comment@v1
        args:
          comment: |
            Core service update
            (Updates API)
```

#### `add-github-check` :fontawesome-brands-github:

This action, once triggered, adds a `completed` check with the specified conclusion to the listed checks in the PR.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                         |
| -----------|------|-----|------------------------------------------------ |
| `check_name`  | Required | String    | The check name to be added to the checks list on gitHub |
| `conclusion`  | Required | String    | The conclusion of the check. The value is one of the following: `action_required`, `cancelled`, `timed_out`, `failure`, `neutral`, `skipped`, `success` |

</div>

```yaml+jinja title="example"
automations:
  # Skip UI checks if the PR doesn't have a UI code changes
  skip_ui_check:
    if:
      - {{ not has.ui_code_changes }} 
    run:
      - action: add-github-check@v1
        args:
          check_name: ui-tests
          conclusion: skipped
```

#### `add-label` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, adds a label to the PR.

This is a manged action, when a PR updates, the existing labels that were added by gitStream are re-evaluated and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `label`    | Required |String  | The label text any string can work |
| `color`    | Optional |String  | The color in hex, for example: `'FEFEFE'` (you can also add `#` prefix `#FEFEFE`) |

</div>

```yaml+jinja title="example"
automations:
  senior_review:
    if:
      - {{ files | match(term='api/') | some }}
    run:
      - action: add-label@v1
        args:
          label: api-change
```

#### `add-labels` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, adds a list of labels to the PR.

This is a manged action, when a PR updates existing labels that were added by gitStream are re-evaluated and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `labels`    | Required |[String]  | The list of text labels|

</div>


#### `add-reviewers` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, sets a specific reviewer.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `reviewers` | Required | [String]    | Sets required reviewers. Supports user names and teams. Teams notated by adding a prefix with the owner name e.g. `owner/team` |
| `team_reviewers` | Optional | [String]    | Sets required team reviewers without a prefix `team` |
| `unless_reviewers_set` | Optional | Bool | When `true`, the reviewers are not added if the PR has already assigned reviewers. It is set to `false` by default |
| `fail_on_error` | Optional | Bool | When `true`, trying to assign illegal reviewers shall fail the automation, when `false` these errors are silently ignored. It is set to `true` by default |
| `wait_for_all_checks`| Optional | Boolean | By default `false`. When `true`, the action will add reviewers only if all checks have passed |

</div>


```yaml+jinja title="example"
automations:
  senior_review:
    if:
      - {{ files | match(term='src/ui/') }}
    run:
      - action: add-reviewers@v1
        args:
          reviewers: [popeye, olive, acme/team-a]
```
!!! warning "Enable Team Write Access"
    If you want to assign teams as PR reviewers, you need to first make sure the team has write access to the repo in via your organization's settings. For more info, refer to the GitHub instructions for [managing team review settings](https://docs.github.com/en/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team).



#### `explain-code-experts` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, shall add a comment with codeExperts suggestion. If the comment already exists, the comment shall be edited.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `lt` | Optional | Integer    | Filter the user list, keeping those below the specified threshold |
| `gt` | Optional | Integer    | Filter the user list, keeping those above the specified threshold |

</div>

```yaml+jinja title="example"
automations:
  code_experts:
    if:
      - true
    run:
      - action: explain-code-experts@v1 
        args:
          gt: 10
```

#### `approve` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, approves the PR for merge.

This is a manged action, when a PR updates existing approval by gitStream is re-evaluated and removed if no longer applicable.

```yaml+jinja title="example"
automations:
  small_change:
    if:
      - {{ source.diff.files | isFormattingChange }}
    run:
      - action: approve@v1
```

#### `close` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, close the PR without merging.

```yaml+jinja title="example"
automations:
  close_ui_changes_by_non_ui:
    if:
      - {{ files | match(regex=r/src\/views/) | some }}
      - {{ pr.author_teams | match(term='ui-team') | nope }}
    run:
      - action: add-comment@v1
        args: 
          comment: |
            Please contact a member of `ui-team` team if you need to make changes to files in `src/views`
      - action: close@v1
```

#### `merge` :fontawesome-brands-github: :fontawesome-brands-gitlab:

Once triggered, merge the PR if possible. It can be set to wait for all checks to pass or only required ones.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `wait_for_all_checks`| Optional | Boolean | By default `false`, so only Required checks can block merge, when `true` the action won't merge even if non-Required check fail  |
| `rebase_on_merge`| Optional |  Boolean   | By default `false`, when merging use rebase mode |
| `squash_on_merge`| Optional | Boolean   | By default `false`, when merging use squash mode |

</div>

```yaml+jinja title="example"
automations:
  small_change:
    if:
      - {{ files | allDocs }}
    run:
      - action: merge@v1
        args:
          rebase_on_merge: true
```


#### `set-required-approvals` :fontawesome-brands-github: 

This action, once triggered, blocks PR merge till the desired reviewers approved the PR. The actions fail the check to prevent the PR for merge.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|-----|------|------------------------------------------------ |
| `approvals`| Required | Integer   | Sets the number of required reviewer approvals for merge for that PR|

</div>

```yaml+jinja title="example"
automations:
  double_review:
    if:
      - {{ files | match(regex=r/agent\//) | some }}
    run:
      - action: set-required-approvals@v1
        args:
          approvals: 2
```

!!! attention

    To allow this action to block merge, you should enable branch protection, and gitStream has to be set as required check in GitHub.

#### `request-changes` :fontawesome-brands-github: 

This action, once triggered, request changes on the PR. As long as request change is set, gitStream will block the PR merge.

This is a manged action, when a PR updates existing change request by gitStream is re-evaluated and removed if no longer applicable.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|-----|------|------------------------------------------------ |
| `comment` | Required | [String]    | The desired request changes comment |

</div>

```yaml+jinja title="example"
automations:
  catch_deprecated:
    if:
      - {{ source.diff.files | matchDiffLines(regex=r/^[+].*oldFetch\(/') | some }}
    run:
      - action: request-changes@v1
        args:
          comment: |
            You have used deprecated API `oldFetch`, use `newFetch` instead.
```

!!! attention

    To allow this action to block merge, you should enable branch protection, and gitStream has to be set as required check in GitHub.


#### `require-reviewers` :fontawesome-brands-github: 

This action, once triggered, requires a specific reviewer approval. The PR merge is blocked till approved by either of the listed users or teams.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|----|-------|------------------------------------------------ |
| `reviewers` | Required | [String]    | Sets required reviewers. Supports user names and teams. Teams notated by adding a prefix with the owner name e.g. `owner/team`. Merge is blocked till approved by either of the listed users |
| :octicons-beaker-24: `also_assign` | Optional | Bool    | `true` by default, also assign the specified users as reviewers |

</div>

```yaml+jinja title="example"
automations:
  senior_review:
    if:
      - {{ files | match(regex=r/src\/ui\//) | some }}
    run:
      - action: require-reviewers@v1
        args:
          reviewers: [popeye, olive, acme/team-a]
```

!!! attention

    To allow this action to block merge, you should enable branch protection, and gitStream has to be set as required check in GitHub.

#### `run-github-workflow` :fontawesome-brands-github: 

This action, once triggered, will start a workflow dispatch automation with the option to add a check to the list of checks in the PR

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                              |
| -----------|-------|-----------|----------------------------------------- |
| `workflow` | Required | String     | The ID or name of the workflow dispatch. |
| `owner` | Optional | String     | By default, the value of `repo.owner` context variable. The account owner of the repository. **Case insensitive String**.  |
| `repo` | Optional | String     | By default, the value of `repo.name` context variable. The name of the repository without the `.git` extension. **Case insensitive String**  |
| `ref` | Optional | String     | By default, the value of `branch.name` context variable. The account owner of the repository. **Case insensitive String**.  |
| `inputs` | Optional | String     | By default, an empty list. Key-Value list with the arguments to provide to the workflow |
| `check_name` | Optional | String     | When added, after the workflow is complete, add the check name to the checks list on GitHub |
| `stop_ongoing_workflow` | Optional | Boolean     | By default, `false`. In case the workflow already runs on the branch, if `true`: cancel the ongoing workflow before running the newly dispatched workflow. If `false`: wait for the old workflow to finish before dispatching a new one|

</div>

```yaml+jinja title="example"
on: 
	- commit

automations:
run_workflow_dispatch:
    if:
      - {{ has.ui_code_changes }} 
    run:
      - action: invoke-github-action@v1
        args:
          owner: {{ repo.owner }}
          repo: {{ repo.name}}
          workflow: ui-tests
          ref: {{ branch.name }}
          check_name: UI-tests
```

!!! attention
	* This action will invoke the run of a workflow dispatch; thus, it might result in significant GitHub action minutes charge.
	* We encourage you to use this action with [custom triggers](./execution-model.md#explicit-triggers)
