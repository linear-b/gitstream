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
    - :fontawesome-brands-bitbucket: Supported on Bitbucket
    - :fontawesome-solid-flask: Open beta - Feature is under development and currently available for all

## Overview

[`send-http-request`](#send-http-request) is executed immediately after the evaluation of the condition.
For all other actions, gitStream executes the actions in the order they are listed per automation. If an action result fails, the following actions will not be executed.

- [`add-code-comment`](#add-code-comment) :fontawesome-brands-github:
- [`add-comment`](#add-comment) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`add-github-check`](#add-github-check) :fontawesome-brands-github:
- [`add-label`](#add-label) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-labels`](#add-labels) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`add-reviewers`](#add-reviewers) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`add-thread`](#add-thread) :fontawesome-brands-gitlab:
- [`approve`](#approve) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`close`](#close) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`code-review`](#code-review) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`describe-changes`](#describe-changes) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`explain-code-experts`](#explain-code-experts) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`merge`](#merge) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`request-changes`](#request-changes) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`require-reviewers`](#require-reviewers) :fontawesome-brands-github: :fontawesome-brands-bitbucket:
- [`run-github-workflow`](#run-github-workflow) :fontawesome-brands-github:
- [`send-http-request`](#send-http-request) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`send-slack-message`](#send-slack-message) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`set-required-approvals`](#set-required-approvals) :fontawesome-brands-github: :fontawesome-brands-bitbucket:
- [`update-description`](#update-description) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
- [`update-title`](#update-title) :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

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

#### `add-code-comment` :fontawesome-brands-github:

This action, once triggered, adds a single code comment to the PR.

This is a managed action, when PR updates, the existing comments added by gitStream are re-evaluated, and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                         |
| -----------|------|-----|------------------------------------------------ |
| `comment`  | Required | String    | Sets the comment, markdown is supported, including suggestion syntax (```suggestion … ```) |
| `file_path`  | Required | String    | The relative path to the file that necessitates the comment |
| `start_line`  | Optional | Integer    | The line (or the first line in multi-line comment)of the blob in the pull request diff that the comment applies to. If start_line is empty, the code comment should be on the file provided |
| `end_line`  | Optional | Integer    | For a multi-line comment, the last line of the range that your comment applies to. Must be equal to or larger than start_line |

</div>

```yaml+jinja title="example"
automations:
  senior_review:
    if:
      - true
    run:
      - action: add-code-comment@v1
        args:
          file_path: <FILE>
          start_line: 20
          comment: |
            Magic! Move it to a constant variable.
```

#### `add-comment` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

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


#### `add-reviewers` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

This action, once triggered, sets a specific reviewer.

<div class="filter-details" markdown=1>

| Args                                              | Usage    | Type     | Description                                                                                                                                                           |
| ------------------------------------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reviewers`                                       | Required | [String] | Sets required reviewers. Supports user names and teams. Teams notated by adding a prefix with the owner name e.g. `owner/team`                                        |
| `team_reviewers`                                  | Optional | [String] | Sets required team reviewers without a prefix `team`                                                                                                                  |
| `unless_reviewers_set`                            | Optional | Bool     | When `true`, the reviewers are not added if the PR has already assigned reviewers. It is set to `false` by default                                                    |
| `fail_on_error`                                   | Optional | Bool     | When `true`, trying to assign illegal reviewers shall fail the automation, when `false` these errors are silently ignored. It is set to `true` by default             |
| `wait_for_all_checks` :fontawesome-brands-github: | Optional | Bool     | By default `false`. When `true`, the action will add reviewers only if all checks (except gitStream) are completed with `neutral`, `skipped`, or `success` conclusion |

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
    If you want to assign teams as PR reviewers, you need to first make sure the team has write access to the repo in your organization's settings. For more info, refer to the GitHub instructions for [managing team review settings](https://docs.github.com/en/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team).

#### `add-thread` :fontawesome-brands-gitlab:

When this action is triggered, a new thread is added to the MR. gitStream can then preserve the thread state after each automation run, including the RESOLVE state and COMMENTS. If the rule's condition doesn't pass, gitStream will remove the thread completely.

<div class="filter-details" markdown=1>

| Args         | Usage    | Type     | Description                                                                                                                                                                                                                                                                                                                                    |
| ------------ | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`    | Required | [String] | The desired thread content                                                                                                                                                                                                                                                                                                                     |
| `resolvable` | Optional | Bool     | By default, `true`. When set to `true`, gitStream will issue the thread once and retain all changes made to it by the user. Therefore, if the thread is resolved, it will stay resolved until the condition no longer applies. When set to `false`, gitStream will re-issue the thread after each automation run until the condition no longer applies. |

</div>


```yaml+jinja title="example"
automations:
  enforce_documentation:
    if:
      - true
    run:
      - action: add-thread@v1
        args:
          comment: "Please make sure this change request is documented before merging"
```

#### `approve` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

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

#### `close` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

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

#### `code-review` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

This action, once triggered, reviews the code in the PR, and generates a comment with the identified issue, bugs, misconfigurations, and bad practices in the newly introduced code, with an option to approve the PR if no issues were found.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `approve_on_LGTM` | Optional | Bool    | Approve this PR if no issues were found. Default is `false` |
| `guidelines` | Optional | String | Provides custom instructions to the AI model to tailor the generated description.                                           |

```yaml+jinja title="example"
automations:
  linearb_ai_review:
    on:
      - pr_created
      - commit
    if:
      - {{ not pr.draft }}
      - {{ pr.author | match(list=['github-actions', '_bot_', 'dependabot', '[bot]']) | nope }}
    run:
      - action: code-review@v1
        args:
          approve_on_LGTM: {{ APPROVE_PR_ON_LGTM }} # optional arg, you can remove it
          guidelines: {{ GUIDELINES | dump }}

# Define variables
# Add conditions for PR approvals. For example - allow approval only for specific users
APPROVE_PR_ON_LGTM: false
# Add your prompts to the review
GUIDELINES: |
    - Don't comment on using outdated dependencies
    - In Javascript
        - Make sure camelCase is used for variable names
        - Make sure PascalCase is used for class names
```

The following files are automatically excluded from the code review.

| File type | Filter type | Values|
| - | - | - |
| Data | Extension | `ini` `csv` `xls` `xlsx` `xlr` `doc` `docx` `txt` `pps` `ppt` `pptx` `dot` `dotx` `log` `tar` `rtf` `dat` `ipynb` `po` `profile` `object` `obj` `dxf` `twb` `bcsymbolmap` `tfstate` `pdf` `rbi` `pem` `crt` `svg` `png` `jpeg` `jpg` `ttf` `app` `bin` `bmp` `bz2` `class` `db` `dll` `dylib` `egg` `eot` `exe` `gif` `gitignore` `glif` `gradle` `gz` `ico` `jar` `lo` `lock` `mp3` `mp4` `nar` `o` `ogg` `otf` `p` `pickle` `pkl` `pyc` `pyd` `pyo` `rkt` `so` `ss` `tgz` `tsv` `war` `webm` `woff` `woff2` `xz` `zip` `zst` `snap` `lockb` |
| Lock | Regex | `.*(yarn\|gemfile\|podfile\|cargo\|composer\|pipfile\|gopkg)\.lock$` `.*gradle\.lockfile$` `.*lock\.sbt$` |
| Build | Regex | `.*dist/.*\\.js` `.*build/.*\\.js` |
| Data | Regex | `.*public/assets/.*\\.js` |

| Lock File Name          | Programming Language | Package Manager      |
|-------------------------|----------------------|----------------------|
| `package-lock.json`     | JavaScript           | npm                  |
| `yarn.lock`             | JavaScript           | Yarn                 |
| `npm-shrinkwrap.json`   | JavaScript           | npm                  |
| `Pipfile.lock`          | Python               | pipenv               |
| `poetry.lock`           | Python               | Poetry               |
| `conda-lock.yml`        | Python               | conda                |
| `Gemfile.lock`          | Ruby                 | Bundler              |
| `composer.lock`         | PHP                  | Composer             |
| `packages.lock.json`    | .NET                 | NuGet                |
| `project.assets.json`   | .NET                 | .NET Core            |
| `pom.xml`               | Java                 | Maven                |
| `Cargo.lock`            | Rust                 | Cargo                |
| `mix.lock`              | Elixir               | Mix                  |
| `pubspec.lock`          | Dart/Flutter         | pub                  |
| `go.sum`                | Go                   | Go modules           |
| `stack.yaml.lock`       | Haskell              | Stack                |
| `vcpkg.json`            | C++                  | vcpkg                |
| `conan.lock`            | C++                  | Conan                |
| `ivy.xml`               | Scala                | sbt/Ivy              |
| `project.clj`           | Clojure              | Leiningen            |
| `Podfile.lock`          | Swift/Objective-C    | CocoaPods            |
| `Cartfile.resolved`     | Swift/Objective-C    | Carthage             |
| `flake.lock`            | Nix                  | Nix                  |
| `pnpm-lock.yaml`        | JavaScript           | pnpm                 |

!!! tip

    You can also filter more files, using [`config.ignore_files`](/cm-file/#configignore_files).

#### `describe-changes` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

This action, once triggered, leverages AI to generate a comprehensive summary of the changes in the PR and incorporates it into the PR description.

The action automatically analyzes the code modifications to create a clear, high-level overview of what has been changed, making it easier for reviewers to understand the scope and purpose of the PR.

<div class="filter-details" markdown=1>

| Args         | Usage    | Type   | Description                                                                                                                 |
| ------------ | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `concat_mode` | Optional | String | By default `replace`. The mode to add the changes description, can be `replace`, `append`, or `prepend` to the PR description |
| `guidelines` | Optional | String | Provides custom instructions to the AI model to tailor the generated description.                                           |
| `template`   | Optional | String | Specifies a template for the AI model to use and fill in when generating the PR description.                                |

</div>

```yaml+jinja title="example"
# -*- mode: yaml -*-

manifest:
  version: 1.0

automations:
  linearb_ai_description:
    # trigger it only when PR is created or has new commits
    on:
      - pr_created
      - commit
    # skip description for Draft PRs and PRs from bots
    if:
      - {{ not pr.draft }}
      - {{ pr.author | match(list=['github-actions', '_bot_', 'dependabot', '[bot]']) | nope }}
    run:
      - action: describe-changes@v1
        args:
          concat_mode: append
          guidelines: {{ GUIDELINES }}
          template: {{ TEMPLATE }}

GUIDELINES: |
  Remove all unnecessary checkboxes.
  Try to extract the Jira ticket from "{{ branch.name }}" or "{{ pr.title }}" and fill it into the template.
  Jira ticket should be in format ABC-12345.

# Load the PR template content from a file in the repository
TEMPLATE: {{ ".github/PULL_REQUEST_TEMPLATE.md" | readFile() | dump }}
```

!!! tip "Excluded Files"

    The `describe-changes` action processes the same files as `code-review`. For details see [`code-review`](#code-review).

#### `explain-code-experts` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

This action, shall add a comment with codeExperts suggestion. If the comment already exists, the comment shall be edited.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                                     |
| -----------|------|-----|------------------------------------------------ |
| `lt` | Optional | Integer    | Filter the user list, keeping those below the specified threshold |
| `gt` | Optional | Integer    | Filter the user list, keeping those above the specified threshold |
| `verbose` | Optional| Bool | When set to false then only shows the suggestion summary and skips the per file details (true by default) |

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


#### `merge` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

Once triggered, merge the PR if possible. It can be set to wait for all checks to pass or only required ones.

<div class="filter-details" markdown=1>

| Args                                               | Usage    | Type | Description                                                                                                                                                                                                |
| -------------------------------------------------- | -------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `wait_for_all_checks`  :fontawesome-brands-github: | Optional | Bool | By default `false`, so only Required checks can block merge, when `true` the action will merge after all checks are completed with `neutral`, `skipped`, or `success` conclusion (except gitStream itself) |
| `rebase_on_merge`                                  | Optional | Bool | By default `false`, when merging use rebase mode                                                                                                                                                           |
| `squash_on_merge`                                  | Optional | Bool | By default `false`, when merging use squash mode                                                                                                                                                           |

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

#### `request-changes` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

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
      - {{ source.diff.files | matchDiffLines(regex=r/^[+].*oldFetch/) | some }}
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


#### `require-reviewers` :fontawesome-brands-github: :fontawesome-brands-bitbucket:

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

    To allow this action to block merge, The following settings should be set:

    :fontawesome-brands-github: Enable branch protection and set gitStream as a required check

    :fontawesome-brands-bitbucket: Select "Prevent a merge with unresolved merge checks" under Branch restrictions

#### `run-github-workflow` :fontawesome-brands-github:

This action, once triggered, will start a workflow dispatch automation with the option to add a check to the list of checks in the PR

<div class="filter-details" markdown=1>

| Args                    | Usage    | Type   | Description                                                                                                                                                                                                                             |
| ----------------------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `workflow`              | Required | String | The ID or the path of the workflow dispatch.                                                                                                                                                                                            |
| `owner`                 | Optional | String | By default, the value of `repo.owner` context variable. The account owner of the repository. Case insensitive.                                                                                                                      |
| `repo`                  | Optional | String | By default, the value of `repo.name` context variable. The name of the repository without the `.git` extension. Case insensitive.                                                                                                      |
| `ref`                   | Optional | String | By default, the value of `branch.name` context variable. The branch name. Case sensitive.                                                                                                                                               |
| `inputs`                | Optional | String | By default, an empty list. Key-Value list with the arguments to provide to the workflow                                                                                                                                                 |
| `check_name`            | Optional | String | When added, after the workflow is complete, add the check name to the checks list on GitHub                                                                                                                                             |
| `stop_ongoing_workflow` | Optional | Bool   | By default, `false`. If the workflow already runs on the branch, When `true`: cancel the ongoing workflow before running the newly dispatched workflow. When `false`: wait for the old workflow to finish before dispatching a new one |

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

  	* This action will invoke the run of a workflow dispatch; thus, it might result in a significant GitHub action minutes charge.
  	* We encourage you to use this action with [custom triggers](./execution-model.md#explicit-triggers)
   	* To manually test the webhook dispatch, please [run the workflow](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/manually-running-a-workflow#running-a-workflow){:target="_blank"} before using it with gitStream.

#### `send-http-request` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

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

#### `send-slack-message` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:

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

#### `set-required-approvals` :fontawesome-brands-github: :fontawesome-brands-bitbucket:

This action, once triggered, blocks PR merge till the desired reviewers approve the PR. The actions fail the check to prevent the PR from merging.

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

    To allow this action to block merge, The following settings should be set:

    :fontawesome-brands-github: Enable branch protection and set gitStream as a required check

    :fontawesome-brands-bitbucket: Select "Prevent a merge with unresolved merge checks" under Branch restrictions

#### `update-description` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
This action, when triggered, updates the PR description with new content.

This is a managed action. When a PR updates, the existing comments that were added by gitStream are re-evaluated, and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                              |
| -----------|-------|-----------|----------------------------------------- |
| `description` | Required | String     | Sets the PR description |
| `concat_mode` | Optional | String     | `replace` by default, the mode to concatenate the new description with the existing one. Possible values: `prepend`, `append`, `replace` |
</div>

For example, this automation updates the PR description with the ticket info if present in the PR title.

```yaml+jinja title="example"
automations:
  add_jira_to_desc:
    if:
      - {{ has.jira_ticket_in_title and (not has.jira_ticket_in_desc) }}
    run:
      - action: update-description@v1
        args:
          concat_mode: prepend
          description: |
            {{ jira_ticket_from_title }}

has:
  jira_ticket_in_title: {{ pr.title | includes(regex=r/\b[A-Za-z]+-\d+\b/) }}
  jira_ticket_in_desc: {{ pr.description | includes(regex=r/atlassian.net\/browse\/\w{1,}-\d{3,4}/) }}

jira_ticket_from_title: {{ pr.title | capture(regex=r/\b[A-Za-z]+-\d+\b/) }}
```


#### `update-title` :fontawesome-brands-github: :fontawesome-brands-gitlab: :fontawesome-brands-bitbucket:
This action, when triggered, updates the PR title with new content.

This is a managed action. When a PR updates, the existing comments that were added by gitStream are re-evaluated, and those that are not applicable are removed.

<div class="filter-details" markdown=1>

| Args       | Usage | Type      | Description                              |
| -----------|-------|-----------|----------------------------------------- |
| `title` | Required | String     | Sets the PR title |
| `concat_mode` | Optional | String     | `replace` by default, the mode to concatenate the new description with the existing one. Possible values: `prepend`, `append`, `replace` |
</div>

For example, this automation updates the PR title with the ticket info if present in the PR title.

```yaml+jinja title="example"
automations:
  add_jira_to_title:
    if:
      - {{ has.jira_ticket_in_desc and (not has.jira_ticket_in_title) }}
    run:
      - action: update-title@v1
        args:
          concat_mode: prepend
          title: |
            {{ jira_ticket_from_desc }} -

has:
  jira_ticket_in_title: {{ pr.title | includes(regex=r/\b[A-Za-z]+-\d+\b/) }}
  jira_ticket_in_desc: {{ pr.description | includes(regex=r/atlassian.net\/browse\/\w{1,}-\d{3,4}/) }}

jira_ticket_from_desc: {{ pr.description | capture(regex=r/\b[A-Za-z]+-\d+\b/) }}
```
