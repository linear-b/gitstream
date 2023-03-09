# Context variables

Context variable are the inputs for the automation conditions or checks.

!!! note 
    
    Items marked with :octicons-beaker-24: are under development and are not available yet.

## Overview

### Context

gitStream includes a collection of variables called contexts. 

- [`branch`](#branch)
- [`files`](#files)
- [`source`](#source)
- [`repo`](#repo)
- [`pr`](#pr)

### Structures

The following structures are used in the context objects:

- [`GitBlame`](#gitblamep-structure)
- :octicons-beaker-24: [`Check`](#check-structure)
- [`Contributor`](#contributor-structure)
- [`FileDiff`](#filediff-structure)
- [`FileMetadata`](#filemetadata-structure)
- [`GeneralComment`](#generalcomment-structure)
- [`LineComment`](#linecomment-structure)

???+ example "Example of a context object"

    Example of a context object for a PR that changed few lines in a `README.md` file:

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
        }
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
| :octicons-beaker-24: `branch.commits.messages` | [String] | A list with all the commit messages in this branch  |
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
| `pr.approvals` | [String] | The of reviewers that approved the PR |
| `pr.author` | String | The PR author name |
| `pr.author_teams` | String | The teams which the PR author is member of|
| `pr.checks` | [`Check`](#check-structure) | List of checks, names and status|
| `pr.created_at` | String | The date and time the PR was created |
| `pr.draft` | Bool | `true` when the PR is marked as Draft/WIP |
| `pr.description` | String | The PR description text |
| `pr.general_comments` | [`GeneralComment`](#generalcomment-structure) | TBD |
| `pr.line_comments` | [`LineComment`](#linecomment-structure) | TBD |
| `pr.provider` | String | The Git cloud provider name, e.g. `GitHub`, `GitLab` etc. |
| `pr.reviewers` | [String] | The list of reviewers set for this PR |
| `pr.status` | String | The PR status: `open`, `requested-changes`, `approved`, `merged` |
| `pr.title` | String | The PR title |
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
| `repo.git_activity` | [`GitActivity`](#gitactivity-structure) | Per file and user, the number of lines changed every week for the last 52 weeks |
| `repo.age` | Integer | Number of days since first commit (of any user) |
| `repo.author_age` | Integer |  number of days since first commit to this repo |
| `repo.blame` | [`GitBlame`](#gitblamep-structure) | The percentage each user's lines in a file, the list includes all changed files in the branch. The list is sorted by the `ratio` field |
| `repo.contributors`  | [`Contributor`](#contributor-structure)  | List of contributors in the repo |

#### `source`

The `source` context includes a list of `FileDiff` objects that can be used to get insights based on code changes. The changes compared to the latest main branch. 

| Values              | Type  | Description                                        |
|---------------------|-------|--------------------------------------------------- |
| `source.diff.files` | [`FileDiff`](#filediff-structure) | List of changed files with their code changes |

The source context include all code changes, it is not safe to share it with unknown services.


#### `Check` structure

:octicons-beaker-24: Coming soon

```json
{
  "name": String, # The check name
  "status": String, # The check status: `queued`, `in_progress`, `completed`
  "conclusion": String, # The check conclusion: `action_required`, `cancelled`, `failure` `neutral`, `success`, `skipped`, `stale`, `timed_out`
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

####  `GeneralComment` structure

```json
{
  "commenter": String, # The user that add the comment
  "content": String, # The comment body    
  "created_at": String, # The time on which the comment was created
  "updated_at": String, # The time on which the comment was last updated
} 
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

#### `LineComment` structure

```json
{
  "commenter": String, # The user that add the comment 
  "content": String, # The comment body    
  "created_at": String, # The time on which the comment was created    
  "updated_at": String, # The time on which the comment was updated    
  "start_line": Integer, # The first line marked for this comment    
  "end_line": Integer, # The last line marked for this comment    
}
```
