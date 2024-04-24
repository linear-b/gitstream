# Execution Model

gitStream is triggered on new pull requests (PRs) for repositories that have gitStream installed. Upon triggering, gitStream collects context variables and evaluates the automation rules to determine which ones are relevant. 

## Organization-level rules and repository rules

When a central `cm` repository is set with the CI/CD runner, the events for PRs from all installed repositories shall be evaluated in the `cm` repository pipeline, taking into account the organization-level rules and the PR repository rules.

## Triggering events

### Implicit triggers

By default, gitStream evaluates any new commit pushed to the PR, triggering automation evaluation. 

Additionally, if any of the automation rules reference the following [`pr`](context-variables.md#pr) context variables: `pr.comments`, `pr.title`, `pr.description`, or `pr.labels`, gitStream shall trigger and will initiate automation rules evaluation where there are changes to the PR comments, title, description, or labels respectfully.

This allows for greater flexibility in the automation process, ensuring that the relevant automation rules are evaluated and triggered when necessary. The execution model ensures the automation process is streamlined, efficient, and effective.

### Explicit triggers :fontawesome-brands-github:
gitStream supports an explicit triggering mechanism. When using explicit triggers, the automations will run only according to the defined triggers, which means the Implicit triggers will not work. Automations triggered by explicit triggers will also be invoked on `draft` PRs

#### Explicit triggers syntax
Use explicit triggers to enhance the control and customization of automations in gitStream, allowing users to define precisely when and how automations should be triggered based on various events and actions within pull requests.

Add the `on` keyword to the file and/or to a specific automation to define explicit triggers.
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

Explicit triggers are set independently per each automation block and can be configured at the file level, specific to each automation separately or in a combination of the two. If triggers are listed at the file level **and** specific automation, the automation will be triggered according to both triggers.
If an automation block does not have explicit triggers configured, it will be triggered according to the default (implicit) triggers.

**Examples**

- assign code expert reviewer when the PR is created and after each commit  
``` yaml+jinja
on:
  - pr_created
  - commit

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

To add a new documentation section to the `execution-model` page on gitStream's documentation, you will want to describe the new feature in a structured way that fits with the existing documentation style. Here's a draft of how you might present this new functionality, which allows platform engineers to customize the triggering of gitStream automations based on branch patterns:

## Conditional Triggering of Automations

### Overview

This feature enables Platform Engineers to selectively trigger gitStream automations based on specific branch patterns. This allows for greater control and customization of automation workflows, ensuring that only relevant automations run for particular changes in a repository.

It can be used to prevent gitStream from triggering any automation based on some patterns, while allowing all other automation files to trigger.

!!! note

    This feature does not support GitLab. The conditional triggering options are only applicable to GitHub intgerations only.

### Configuration

#### Trigger Options

Add `include` and `exclude` options within the triggering mechanism to specify which branches should initiate automation. These options support lists of regular expressions or strings to match branch names.

```yaml
triggers:
  on:
    - event_type
  include:
    branch:
      - "example/branch_pattern"
  exclude:
    branch:
      - "example/exclude_pattern"
```

!!! note

    The `on` section mirrors the existing triggering mechanism, allowing for compatibility and flexibility.

#### Scope

These trigger conditions apply on a per `.cm` file basis, allowing different automations to have different triggering conditions based on branch patterns.

#### Default Behavior

- **Non-mandatory `on` in `triggers`**: The `on` keyword within `triggers` is not mandatory. If omitted, the specified conditions apply to all triggers. This keeps the default behavior intact while allowing for the specification of include and exclude patterns.

```yaml
triggers:
  include:
    branch:
      - feature
```

In the above configuration, the inclusion condition applies to all trigger events, effectively limiting triggers to branches that include the term "feature".

#### Defaults

- **Default Behavior**: If neither `include` nor `exclude` is specified, the trigger will run for all cases.
- **Include Specified**: Runs the automation only for the included cases.
- **Exclude Specified**: Runs the automation for all cases except those excluded.

#### Pattern Matching

- **Regex Support**: Regular expressions are supported using `r/pattern/` notation.

- **Simple Term Matching**: When a simple string (not a regex) is used, the match is checked against any substring within the branch name. This means that even partial matches will cause the condition to apply. 

#### Examples

No trigger for a specific branch pattern:

```yaml
triggers:
  exclude:
    branch:
      - r/regex_pattern_to_exclude/
```

When Renovate opens a PR, trigger only a specific automation:

```yaml
# renovate.cm
triggers:
  on:
    - pr_opened
  include:
    branch:
      - renovate

# gitstream.cm
triggers:
  exclude:
    branch:
      - renovate
```

To include the limitations and nuances of the conditional triggering feature in your Gitstream documentation, you can add a section titled "Limitations and Technical Considerations." Here's a suggestion on how you can structure this section to make the limitations clear and understandable:

### Configuration Details

If both the top-level `on` directive and `triggers` are used within the same `.cm` file, the conditions specified under `triggers` are considered additional constraints to the `on` conditions. For example:

```yaml
on:
  trigger: 
    - pr_created

triggers:
  except:
    branch:
      - banana
```

This configuration is functionally equivalent to:

```yaml
triggers:
  on:
    - pr_created
  except:
    branch:
      - banana
```

Both snippets will trigger the automation only when a PR is created and the branch name does not match "banana".
