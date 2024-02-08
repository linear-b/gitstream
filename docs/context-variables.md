---
title: gitStream Reference - Context Variables
description: Context Variables enable gitStream to extract useful data from PRs.
---
# Context variables

Context variable are the inputs for the automation conditions or checks.

!!! Legend

    The icons indicate the availability status of each action.
    
	- :fontawesome-brands-github: Supported on GitHub 
	- :fontawesome-brands-gitlab: Supported on GitLab 
	- :octicons-beaker-24: Under development and not available yet.
    - :fontawesome-solid-flask: Open beta - Under development and currently available for all

## Overview

### Context

gitStream includes a collection of variables called contexts. 

- [`branch`](#branch) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`env`](#env) :fontawesome-solid-flask: :fontawesome-brands-github:
- [`files`](#files) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`pr`](#pr) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`repo`](#repo) :fontawesome-brands-github: :fontawesome-brands-gitlab:
- [`source`](#source) :fontawesome-brands-github: :fontawesome-brands-gitlab:

### Structures

The following structures are used in the context objects:

- [`GitBlame`](#gitblamep-structure)
- :octicons-beaker-24: [`Check`](#check-structure)
- [`Contributor`](#contributor-structure)
- [`FileDiff`](#filediff-structure)
- [`FileMetadata`](#filemetadata-structure)
- [`Comment`](#comment-structure)
- [`conversations`](#conversation-structure)

???+ example "Example of a context object"

    Partial example of a context object for a PR that changed few lines in a `README.md` file:

    ```json
    {
      "branch": {
        "name": "new-feature-branch",
        "base": "main",
        "diff": {
          "size": 50,
          "files_metadata": [
            {
              "original_file": "README.md",
              "new_file": "README.md",
              "deletions": 0,
              "additions": 2
            }
          ]
        },
        "num_of_commits": 1
      },
      "source": {
        "diff": {
          "files": [
            {
              "original_file": "README.md",
              "new_file": "README.md",
              "diff": "@@ -10,3 +10,5 @@ This project \n+\n+## Intro",
              "original_content": "This project \n",
              "new_content": "This project \n\n## Intro"
            }
          ]
        }
      },
      "repo": {
        "contributors": {
          "popeye": "46",
          "olive": "6"
        },
        "owner": "acme"
      },
      "files": [
        "README.md"
      ]
    }
    ```

## Reference

#### `branch`

The `branch` context contains info regarding the branch changes compared to the base branch. 

!!! note  

    compared to the `source` context does not include actual source code.

| Values               | Type      | Description                                              |
|----------------------|-----------|--------------------------------------------------------- |
| `branch`             | Map       | Includes the info related to the current branch          |
| `branch.author`      | String    | The branch author (the user that did first commit in the branch). The formatted like author in `git-log`, e.g. `Popeye <popeye@acme.com>`        |
| `branch.author_name`      | String    | The branch author name        |
| `branch.author_email`      | String    | The branch author email       |
| `branch.base`        | String    | The main branch, `main`                 |
| `branch.commits.messages` | [String] | A list with all the commit messages in this branch  |
| `branch.diff.size`   | Integer   | The sum of line changed: additions, edits and deletions   |
| `branch.diff.files_metadata`  | [`FileMetadata`](#filemetadata-structure)  | List of changed files including their relative path      |
| `branch.name`        | String    | The current branch, `feature-123-branch`                 |
| `branch.num_of_commits` | Integer   | The number of commits in the branch |

The branch context doesn't include any source code, but only related metadata.

Example for using `branch.name` and `branch.author` to automatically approve and merge version bumps.

```yaml+jinja
automations:
  dependabot:
    if:
      - {{ branch.name | includes(term="dependabot") }}
      - {{ branch.author | includes(term="dependabot") }}
    run:
      - action: approve@v1
      - action: add-label@v1
        args:
          label: "approved-dependabot"
      - action: merge@v1
        args:
          wait_for_all_checks: true
          squash_on_merge: true
```

!!! tip

    The `files` context doesn't include deleted file, to identify both modified and deleted files use the `branch.diff.files_metadata`, for example: 
    ```
    {{ branch.diff.files_metadata | match(attr='file', regex=r/\.md$/) | every }}
    ```

#### `env` :fontawesome-solid-flask:  :fontawesome-brands-github:

The `env` context allows the user to pass data from the repo that is unavailable in the other context variables. Thus, the structure of the variable is not fixed and depends on user configuration.

To configure the `env` variable, add the `env` field to gitstream's workflow job configurations on `.github/workflows/gitstream.yml`. For more information, visit GitHub's guide for [Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
 
```yaml title="examle: add secrets to the env variable"
...
jobs:
  gitStream:
    timeout-minutes: 5
    runs-on: ubuntu-latest
    name: gitStream workflow automation
    env:
      SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
...
```

To use the context variable, access to the `env` variable's fields as configured in `gitstream.yml`

```yaml+jinja title=" example: use slack webhook secret"
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

#### `files`

The `files` context includes the list of changed files in the branch compared to the main branch.

| Values  | Type      | Description                                |
|---------|-----------|------------------------ |
| `files` | [String]  | List of all changed files with their full path |

For example, a typical `files` context can look like this: 

```json
[
  "README.md",
  "package.json",
  "src/app.js",
  "src/index.js",
  "docs/examples.md"
]
```

Example for checking if certain changes are made:

```yaml+jinja
automations:
  ui_review:
    if:
      - {{ files | match(list=ui_templates_files) | some }}
    run:
      - action: add-reviewers@v1
        args:
          reviewers: [GitHubUser1, GitHubUser2]

ui_templates_files:
  - resources/app/ui_template.yml
  - resources/app/role_template.yml
  - resources/app/account_template.yml
```

#### `pr`

The `pr` context includes metadata related to the pull request.

| Values             | Type      | Description                                              |
|--------------------|-----------|-------------------------------------------------|
| `pr`             | Map       | Includes the info related to the PR   |
| `pr.approvals` | [String] | A list of the of reviewers that approved the PR |
| `pr.author` | String | The PR author name |
| `pr.author_teams` | String | The teams which the PR author is member of|
| `pr.author_is_org_member` | Bool | `true` if the PR author is a member of the organization where gitStream is installed |
| `pr.checks` | [[`Check`]](#check-structure) | List of checks, names and status|
| `pr.comments` | [[`Comment`]](#comment-structure) | List of PR comments objects |
| `pr.conflicted_files_count` | Integer | The number files in the PR with conflicts |
| `pr.conversations` | [[`Conversation`]](#conversation-structure) | List of PR conversation objects, usually when reviewer have comments about the source code |
| `pr.created_at` | String | The date and time the PR was created |
| `pr.draft` | Bool | `true` when the PR is marked as Draft/WIP |
| `pr.description` | String | The PR description text |
| `pr.labels` | [String] | The labels that are attached to the PR |
| `pr.number` | Integer | The PR or MR Id number |
| `pr.provider` | String | The Git cloud provider name, e.g. `GitHub`, `GitLab` etc. |
| `pr.reviewers` | [String] | The list of reviewers set for this PR |
| `pr.status` | String | The PR status: `open`, `closed` and `merged` |
| `pr.target` | String | The branch the PR is intended merged into |
| `pr.title` | String | The PR title |
| `pr.requested_changes` | [String] | List of users that requested changes |
| `pr.reviews` | [[`Review`]](#review-structure) | List of PR reviews, relevant in GitHub |
| `pr.unresolved_threads` | Integer | The number of open review comments in the PR |
| `pr.updated_at` | String | The date and time the PR was last updated |

Example for checking the PR title includes a Jira ticket:

```yaml+jinja
automations:
  check_jira_ticket:
    if:
      - {{ not has.jira_ticket }}
    run:
      - action: add-label@v1
        args:
          label: "missing-ticket"
          color: 'F6443B'

has:
  jira_ticket: {{ pr.title | includes(regex=r/^\[?\w{3,4}-\d{1,6}\]?(\s|-|_).{20,}$/) }}
```


#### `repo`

The `repo` context includes metadata related to the repo.

| Values             | Type      | Description                                              |
|--------------------|-----------|-------------------------------------------------|
| `repo`             | Map       | Includes the info related to the current repo   |
| `repo.age` | Integer | Number of days since first commit (of any user) |
| `repo.author_age` | Integer |  number of days since first commit to this repo |
| `repo.blame` | [`GitBlame`](#gitblamep-structure) | The percentage each user's lines in a file, the list includes all changed files in the branch. The list is sorted by the `ratio` field |
| `repo.contributors`  | [`Contributor`](#contributor-structure)  | List of contributors in the repo |
| `repo.git_activity` | [`GitActivity`](#gitactivity-structure) | Per file and user, the number of lines changed every week for the last 52 weeks |
| `repo.name`  | String  | Repository name |
| `repo.owner`  | String  | Repository owner account name |
| `repo.visibility`  | String  | The visibility of the source branch repo. Value is one of: `private`, `internal`, or `public` |

#### `source`

The `source` context includes a list of `FileDiff` objects that can be used to get insights based on code changes. The changes compared to the latest main branch. 

| Values              | Type  | Description                                        |
|---------------------|-------|--------------------------------------------------- |
| `source.diff.files` | [`FileDiff`](#filediff-structure) | List of changed files with their code changes |

The source context include all code changes, it is not safe to share it with unknown services.

#### `Check` structure

```json
{
  "name": String, # The check name
  "status": String, # The check status: `queued`, `in_progress`, `completed`
  "conclusion": String, # The check conclusion: `action_required`, `cancelled`, `failure` `neutral`, `success`, `skipped`, `stale`, `timed_out`
} 
```

####  `Comment` structure

```json
{
  "commenter": String, # The user that add the comment
  "content": String, # The comment body    
  "created_at": String, # The time on which the comment was created
  "updated_at": String, # The time on which the comment was last updated
} 
```

#### `Conversation` structure

```json
{
  "commenter": String, # The user that add the comment 
  "content": String, # The comment body    
  "created_at": String, # The time on which the comment was created    
  "updated_at": String, # The time on which the comment was updated    
  "start_line": Integer, # The first line marked for this comment    
  "end_line": Integer, # The last line marked for this comment    
  "is_resolved": Boolean # `true` when marked as resolved
}
```

#### `Contributor` structure

The `repo.contributors` mapping includes a list of `Contributor`, where the user name is used as dynamic key:

```json
{
  USER_NAME: Integer # Number of commits
} 
```

#### `FileDiff` structure

The `source.diff.files` mapping includes a list of `FileDiff`:

```json
{
  "diff": String, #  The content in diff format `+` for additions, `-` for deletions
  "new_content": String, # The new content in this branch
  "new_file": String, # The name of the file after the changes, including its path
  "original_content": String, #  The content as is in the `main` branch
  "original_file": String, #  The name of the file before the changes, including its path
} 
```

#### `FileMetadata` structure

The `branch.diff.files_metadata` mapping includes a list of `FileMetadata`:

```json
{
  "additions": Integer, # The number of lines edited or added to the file
  "deletions": Integer, # The number of lines removed from the file  
  "file": String, # The name of the file before the changes, including its path
} 
```

For example, sum additions in javascript code files:

```yaml+jinja
{{ branch.diff.files_metadata | filter(attr='new_file', regex=r/\.js$|\.ts$/) | map(attr='additions') | sum }}
```

#### `GitActivity` structure

This structure include per changed file, for every user, the number of lines changed every week for the last 52 weeks.

```json
{
  FILE_NAME: # The file name and path
  { 
    # The git user identifier (String)
    GIT_USER: {
      "week_INDEX": Integer # Number of lines changed that week
      # ... for the last 52 weeks 
    }
  }
}
```

For example: 

```json
{
  "src/utils/service.js": {
    "popeye <popeye@acme.com>": {
      "week_1": 20, 
      "week_2": 15, 
      "week_10": 250
    },
    "olive <olive@acme.com>": {
      "week_1": 3, 
      "week_3": 50, 
      "week_52": 250
    }
  },
  "README.md": {
    "popeye <popeye@acme.com>": {
      "week_2": 15, 
      "week_3": 10
    }
  }
}
```

#### `GitBlame` structure

For each file, a list of user's blame ratio.

```json
{
  FILE_NAME: # The file name and path
  { 
    # The git user identifier (String)
    GIT_USER: Integer, # Precentage 0-100, ratio of user's lines / total lines in file
  }
}
```

For example: 

```json
{
  "src/utils/service.js": {
    "popeye <popeye@acme.com>": 78,
    "olive <olive@acme.com>": 22,
  },
  "README.md": {
    "popeye <popeye@acme.com>": 13,
    "olive <olive@acme.com>": 22,
    "brutus <brutus@acme.com>": 65,
  }
}
```

####  `Review` structure

```json
{
  "commenter": String, # The user that add the comment
  "content": String, # The comment body    
  "created_at": String, # The time on which the comment was created
  "state": String, # Either `approved`, `changes_requested`, `commented`, `pending`, `submitted`
  "conversations": [Conversation], # Conversations that are relvant to this Review feedback
} 
```
