---
title: gitStream Reference - Automation Actions
description: Automation Actions enable gitStream to make changes to your PRs.
---
# Automation actions

Actions are the end results of the automation described in your `.cm` file.

!!! Legend 

    The icons indicate the availability status of each action.

    - :fontawesome-brands-github: Supported on GitHub 
    - :fontawesome-brands-gitlab: Supported on GitLab 
    - :fontawesome-solid-flask: Open beta - Feature is under development and currently available for all

## Overview

[`send-http-request`](#send-http-request) is executed immediately after the evaluation of the condition.
For all other actions, gitStream executes the actions in the order they are listed per automation. If an action result fails, the following actions will not be executed.

- [`add-comment`](#add-comment) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-github-check`](#add-github-check) :fontawesome-brands-github:
- [`add-label`](#add-label) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-labels`](#add-labels) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-reviewers`](#add-reviewers) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`explain-code-experts`](#explain-code-experts) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`approve`](#approve) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`close`](#close) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`merge`](#merge) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`send-http-request`](#send-http-request) :fontawesome-solid-flask: :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`send-slack-message`](#send-slack-message) :fontawesome-solid-flask: :fontawesome-brands-github:
- [`set-required-approvals`](#set-required-approvals) :fontawesome-brands-github:
- [`request-changes`](#request-changes) :fontawesome-brands-github: :fontawesome-brands-gitlab:
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

This is a managed action, when a PR updates, the existing comments that were added by gitStream are re-evaluated and those that are not applicable are removed.

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
      - {{ not has.fe_code_changes }} 
    run:
      - action: add-github-check@v1
        args:
          check_name: FE-tests
          conclusion: skipped
has:
	fe_code_changes: {{ files | match(regex=r/frontend\//) | some }}
```

#### `add-label` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, adds a label to the PR.

This is a managed action, when a PR updates, the existing labels that were added by gitStream are re-evaluated and those that are not applicable are removed.

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

This is a managed action, when a PR updates existing labels that were added by gitStream are re-evaluated and those that are not applicable are removed.

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
| `wait_for_all_checks`| Optional | Boolean | By default `false`. When `true`, the action will add reviewers only if all checks (except gitStream) are completed with `neutral`, `skipped`, or `success` conclusion |

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

This is a managed action, when a PR updates existing approval by gitStream is re-evaluated and removed if no longer applicable.

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
| `wait_for_all_checks`| Optional | Boolean | By default `false`, so only Required checks can block merge, when `true` the action will merge after all checks are completed with `neutral`, `skipped`, or `success` conclusion (except gitStream itself) |
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


#### `send-http-request` :fontawesome-solid-flask: :fontawesome-brands-github: :fontawesome-brands-gitlab:

The action, once triggered, sends an HTTP request to the specified URL
<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `url`| Required | String | The request URL |
| `method`| Optional |  String | By default `GET`, the request method |
| `headers`| Optional | [String] | Empty by default (`[]`), Key-Value list of strings, which will be sent as the HTTP headers|
| `user`| Optional | String | Empty by default, format: `'username:password'`. <br/> If used - adds a Basic-auth HTTP header, by setting the `Authorization` header. Using this arg will override any existing `Authorization` header that was set using `headers` |
| `body`| Optional | String | Empty by default, the data to be sent as the request body. Only applicable for request methods `PUT`, `POST`, `DELETE`, and `PATCH` |
| `timeout`| Optional | String | Empty by default (no timeout), the number of milliseconds before the request times out. When the time out is reached, the request will be aborted |

</div>

```yaml+jinja title="example"
automations:
  send_webhook:
    if:
      - true
    run:
      - action: send-http-request@v1
        args:
          url: "http://WEBHOOK_URL"
          method: POST
          headers: '{"Content-type": "application/json"}'
          body: '{"text": "Hello, world!"}'
```


#### `send-slack-message` :fontawesome-solid-flask: :fontawesome-brands-github:

The action, once triggered, sends a webhook with a message content to a Slack app.
To use this action, [create a Slack app](https://api.slack.com/messaging/webhooks#getting_started) with Incoming Webhooks enabled. gitStream uses the webhook URL to send the message.
<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `message`| Required | String | The message content |
| `webhook_url`| Optional |  String | The webhook URL. Use the [`env`](./context-variables.md#env) variable to pass secrets |

</div>

```yaml+jinja title="example"
automations:
  send_slack:
    if:
      - true
    run:
      - action: send-slack-message@v1
        args:
          message: "Hello world :tada:."
          webhook_url: "{{ slack_webhook }}"

slack_webhook: {{ env.SLACK_WEBHOOK }}
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

#### `request-changes` :fontawesome-brands-github: :fontawesome-brands-gitlab:

This action, once triggered, requests changes on the PR. As long as request change is set, gitStream will block the PR merge.

This is a managed action, when a PR updates an existing change request by gitStream is re-evaluated and removed if no longer applicable.

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

    To allow this action to block merge, The following settings should be set:
    
    :fontawesome-brands-github: Enable branch protection and set gitStream as a required check
    
    :fontawesome-brands-gitlab: Enable the "All threads must be resolved" Merge check


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
| `owner` | Optional | String     | By default, the value of `repo.owner` context variable. The account owner of the repository. Case insensitive.  |
| `repo` | Optional | String     | By default, the value of `repo.name` context variable. The name of the repository without the `.git` extension. Case insensitive.  |
| `ref` | Optional | String     | By default, the value of `branch.name` context variable. The account owner of the repository. Case insensitive.  |
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
      - {{ has.fe_code_changes }} 
    run:
      - action: run-github-workflow@v1
        args:
          owner: {{ repo.owner }}
          repo: {{ repo.name}}
          workflow: .github/workflows/frontend-manual.yml
          ref: {{ branch.name }}
          check_name: FE-tests
has:
	fe_code_changes: {{ files | match(regex=r/frontend\//) | some }}
```

!!! attention
	* This action will invoke the run of a workflow dispatch; thus, it might result in significant GitHub action minutes charge.
	* We encourage you to use this action with [custom triggers](./execution-model.md#explicit-triggers)
