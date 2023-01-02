# Automation actions

Actions are the end results of the automation described in your `.cm` file.

!!! note 
    
    Items marked with :octicons-beaker-24: are under development and are not available yet.

## Overview

gitStream executes actions in the order they are listed. If an action result fails, following actions will not be executed.

- [`add-comment`](#add-comment)
- [`add-label`](#add-label)
- [`add-labels`](#add-labels)
- [`add-reviewers`](#add-reviewers)
- [`approve`](#approve)
- [`close`](#close)
- [`merge`](#merge)
- [`set-required-approvals`](#set-required-approvals)
- [`require-reviewers`](#require-reviewers)
- [`request-changes`](#request-changes)

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

#### `add-comment`

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


#### `add-label`

This action, once triggered, adds a label to the PR.

This is a manged action, when a PR updates, the existing labels that were added by gitStream are re-evaluated and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `label`    | Required |String  | The label text any string can work |
| `color`    | Optional |String  | The color in hexa, for exmaple: `'FEFEFE'` (you can also add `#` prefix `#FEFEFE`) |

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

#### `add-labels`

This action, once triggered, adds a list of labels to the PR.

This is a manged action, when a PR updates existing labels that were added by gitStream are re-evaluated and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `labels`    | Required |[String]  | The list of text labels|

</div>


#### `add-reviewers`

This action, once triggered, sets a specific reviewer.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `reviewers` | Required or `team_reviewers` | [String]    | Sets reviewers user name |
| `team_reviewers` | Required or `reviewers` | [String] | Sets reviewers teams name, without the `@` prefix |

</div>

```yaml+jinja title="example"
automations:
  senior_review:
    if:
      - {{ files | match(term='src/ui/') }}
    run:
      - action: add-reviewers@v1
        args:
          reviewers: [popeye, olive]
```


#### `approve`

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

#### `close`

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

#### `merge`

Once triggered, merge the PR if possible. It can set to wait for required checks to pass or ignore checks.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `wait_for_all_checks`| Optional | Boolean | By default `false`, so only Required checks can block merge, when `true` the action won't merrge even if non-Required check fail  |
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


#### `set-required-approvals`

This action, once triggered, blocks PR merge till the desired reviewers approved the PR. The actions fail the check to prevent the PR for merge.

!!! note

    You should enable branch protection, so GitHub will prevent merging unless the gitStream action check pass successfully. 

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


#### `request-changes`

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
            You have used deprected API `oldFetch`, use `newFetch` instead.
```

#### `require-reviewers`

This action, once triggered, requires a specific reviewer approval.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|----|-------|------------------------------------------------ |
| `reviewers` | Required | [String]    | Sets reviewers user name, merge is blocked till approved by any of the listed users |
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
          reviewers: ['popeye', 'olive']
```
