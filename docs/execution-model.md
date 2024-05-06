# Execution Model

gitStream is triggered on new pull requests (PRs) for repositories that have gitStream installed. Upon triggering, gitStream collects context variables and evaluates the automation rules to determine which ones are relevant. 

## Organization-level rules and repository rules

When a central `cm` repository is set with the CI/CD runner, the events for PRs from all installed repositories shall be evaluated in the `cm` repository pipeline, considering the organization-level and PR repository rules.

## Triggering Mechanism

gitStream automations are triggered by events related to pull requests (PRs). You can specify triggers to fine-tune which events should initiate automations.
### Trigger Configuration

Triggers can be defined globally at the file level or specifically for each automation. Triggers are applied only to the file(s) where they are declared.
#### `triggers`

Specifies when automations are executed, supporting `include` and `exclude` lists for branch and repository patterns at the file level. The `on` keyword can also be used within individual automations to define specific events that trigger those automations.

| Key                                                   | Type              | Description                                                                             |
| ----------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------- |
| `triggers.on` :fontawesome-brands-github:             | [String]          | Explicit triggers that cause the automations to run.                                    |
| `triggers.include.branch` :fontawesome-brands-github: | [String]          | Branches whose names contain any of these substrings should trigger the automation.     |
| `triggers.exclude.branch` :fontawesome-brands-github: | [String]          | Branches whose names contain any of these substrings should not trigger the automation. |
| `triggers.include.repository`                         | [String or regex] | Repositories that should trigger the automation (org-level automations only).           |
| `triggers.exclude.repository`                         | [String or regex] | Repositories that should not trigger the automation (org-level automations only).       |

**Note on Substring and Full Line Matching:**

- The values in `triggers.include.*` and `triggers.exclude.*` allow for substring matching, meaning that branches or repositories whose names contain any of the specified substrings will be included or excluded from triggering the automation. For precise control, using regular expression anchors (`^` for the start and `$` for the end of a string) allows you to match entire repository names exactly.

**Default Behavior:** 

- Implicit triggers are the default behavior if the automation doesn't have explicit triggers configured.
- The automation runs for all branches and repositories if neither include nor exclude is specified.

### Implicit triggers

By default, gitStream evaluates any new commit pushed to the PR, triggering automation evaluation. 

Additionally, if any of the automation rules reference the following [`pr`](context-variables.md#pr) context variables: `pr.comments`, `pr.title`, `pr.description`, or `pr.labels`, gitStream shall trigger and will initiate automation rules evaluation where there are changes to the PR comments, title, description, or labels respectfully.

This allows for greater flexibility in the automation process, ensuring that the relevant automation rules are evaluated and triggered when necessary. The execution model ensures the automation process is streamlined, efficient, and effective.

### Explicit triggers :fontawesome-brands-github:
gitstream supports an explicit triggering mechanism. When using explicit triggers, the automations will run only according to the defined triggers, which means the Implicit triggers will not work. Automations triggered by explicit triggers will also be invoked on `draft` PRs

#### Explicit triggers syntax
Use explicit triggers to enhance the control and customization of automations in gitStream, allowing users to define precisely when and how automations should be triggered based on various events and actions within pull requests.

Add the `on` keyword under the `triggers` key in the file and/or to a specific automation to define explicit triggers.
gitStream supports the following explicit triggers:

| Triggering event                                                      | Explicit Trigger :fontawesome-brands-github: | Default (implicit triggers)    |
| --------------------------------------------------------------------- | -------------------------------------------- | ------------------------------ |
| Creating a PR                                                         | `pr_created`                                 | `on`                           |
| Commit                                                                | `commit`                                     | `on`                           |
| Adding label                                                          | `label_added`                                | when `pr.label` in `.cm`       |
| Removing label                                                        | `label_removed`                              | when `pr.label` in `.cm`       |
| :fontawesome-brands-github: Merging the PR                            | `merge`                                      | `off`                          |
| Adding new comment                                                    | `comment_added`                              | when `pr.comment` in `.cm`     |
| :fontawesome-brands-github: Editing an existing comment               | -                                            | when `pr.comment` in `.cm`     |
| Title change                                                          | -                                            | when `pr.title` in `.cm`       |
| Description change                                                    | -                                            | when `pr.description` in `.cm` |
| :fontawesome-brands-github: Transition from draft to ready for review | `pr_ready_for_review`                        | `off`                          |
| :fontawesome-brands-github: transition from any state to closed       | `pr_closed`                                  | `off`                          |
| :fontawesome-brands-github: transition from closed to open            | `pr_reopened`                                | `off`                          |

Explicit triggers are set independently per each automation block and can be configured at the file level, specific to each automation separately or in combination. If triggers are listed at the file level **and** specific automation, the automation will be triggered according to both triggers.
If an automation block does not have explicit triggers configured, it will be triggered according to the default (implicit) triggers.

### Examples

- Assign code expert reviewer when the PR is created and after each commit. Ignore branches with the string "hotfix" in them
``` yaml+jinja
triggers
  on:
    - pr_created
    - commit
  exclude:
    branch:
      - hotfix

automations:
  assign_code_experts:
    if:
      - true
    run:
      - action: add-reviewers@v1
        args:
          reviewers: {{ repo | codeExperts(gt=10) }}
```

-  Explain code experts only if the label “suggest-reviewer” exists. 
  The automation will be triggered after each commit and after each label addition. If the label “suggest-reviewer” exists, it will trigger the `explain-code-experts` automation
``` yaml+jinja
triggers:
  on:
    - commit

automations:
  explain_code_experts:
    on:
      - label_added
    if:
      - {{ pr.labels | match(term='suggest-reviewer') | some }}
    run:
      - action: explain-code-experts@v1
        args:
          gt: 10
```

- Trigger only specific automations branch pattern A, and trigger other automation for all other branches except those that fit the pattern A
    
    ```
    # Automation in this file will trigger only for branch pattern A
    triggers:
      include:
        branch:
          - r/A/
    ```
    
    ```
    # Automations in this file will trigger for all branches except pattern A
    triggers:
      exclude:
        branch:
          - r/A/
    ```
