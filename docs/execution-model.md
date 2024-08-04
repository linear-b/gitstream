# Execution Model

gitStream is triggered on new pull requests (PRs) for repositories that have gitStream installed. Upon triggering, gitStream collects context variables and evaluates the automation rules to determine which ones are relevant.

## Organization-level rules and repository rules

When a central `cm` repository is set with the CI/CD runner, the events for PRs from all installed repositories shall be evaluated in the `cm` repository pipeline, considering the organization-level and PR repository rules.

## Triggering Mechanism

gitStream automations are triggered by events related to pull requests (PRs). You can specify triggers to fine-tune which events should initiate automations.

### Implicit triggers

By default, gitStream evaluates any new commit pushed to the PR, triggering automation evaluation.

Additionally, if any of the automation rules reference the following [`pr`](context-variables.md#pr) context variables: `pr.comments`, `pr.title`, `pr.description`, or `pr.labels`, gitStream shall trigger and will initiate automation rules evaluation where there are changes to the PR comments, title, description, or labels respectfully.

This allows for greater flexibility in the automation process, ensuring that the relevant automation rules are evaluated and triggered when necessary. The execution model ensures the automation process is streamlined, efficient, and effective.

### Explicit triggers :fontawesome-brands-github:

gitstream supports an explicit triggering mechanism. When using explicit triggers, the automations will run only according to the defined triggers, which means the Implicit triggers will not work. Automations triggered by explicit triggers will also be invoked on `draft` PRs

Triggers can be defined globally at the file level or specifically for each automation. Triggers are applied only to the file(s) where they are declared.

#### `triggers` section

Use explicit triggers to enhance the control and customization of automations in gitStream, when you need to define precisely when and how automations should be triggered based on various events and actions within pull requests.

The `triggers` is section specifies when automations are executed, supporting `include` and `exclude` lists for branch and repository patterns at the file level.

The `on` keyword can also be used within individual automations to define specific events that trigger those automations. Add the `on` keyword under the `triggers` key in the file and/or to a specific automation to define explicit triggers.

| Key                                                   | Type              | Description                                                    |
| ----------------------------------------------------- | ----------------- | -------------------------------------------------------------- |
| `triggers.on` :fontawesome-brands-github:             | [String]          | Specifies the explicit triggers that initiate the automations. |
| `triggers.include.branch` :fontawesome-brands-github: | [String or regex] | Branches that match will trigger the automation.               |
| `triggers.exclude.branch` :fontawesome-brands-github: | [String or regex] | Branches that match will not trigger the automation.           |
| `triggers.include.repository`                         | [String or regex] | Repositories that match will trigger the automation.           |
| `triggers.exclude.repository`                         | [String or regex] | Repositories that match will not trigger the automation.       |

The table below lists supported explicit triggers, categorized into those enabled by default and those that require manual activation.

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

**Note on Matching:**

- When using a `String` as the matching type, the values in `triggers.include.*` and `triggers.exclude.*` require exact matches. This means that the names of branches or repositories must exactly match the specified string to either trigger or prevent triggering the automation.
- For more precise control, use a regular expression (regex) format: `r/REGEX_PATTERN/`.

**Default Behavior:**

- Implicit triggers are the default behavior if the automation doesn't have explicit triggers configured.
- The automation runs for all branches and repositories if neither include nor exclude is specified.

**Exclude/Include prioritization**

- Exclude overrides the include option. Thus, a repo will be excluded when a it matches both the include and exclude lists.

    In the following example, the automations in the file will be triggered for all repositories that contain the string `feature`, except for the repository `my_feature`
    ```yaml+jinja
    triggers:
      include:
        repository:
          - r/feature/
      exclude:
        repository:
          - my_feature
    ```

### Examples

#### Dependabot and Renovate

For example, you can have your normal automations that help developers with their PRs and a separate automation that automates Dependabot or Renovate version bumps. Both automations serve distinctly different purposes: the first helps your developers streamline their PRs, while the other reduces developers' toil by auto-approving version bumps. You will not want to trigger gitStream for Dependabot or Renovate unnecessarily, so you can configure the triggers to exclude the branch where Dependabot or Renovate PRs are created.

!!! warning "Required gitStream Plugins"
    This example requires you to install the [`extractDependabotVersionBump`](/filter-function-plugins/#extractdependabotversionbump) and [`compareSemver`](/filter-function-plugins/#comparesemver) plugins.

In your default automation file, you should exclude the branch where Dependabot or Renovate PRs are created:

```yaml+jinja title="gitstream.cm"
manifest:
  version: 1.0

# Disable triggering when the PR is created by bots
triggers:
  exclude:
    branch:
      - r/(Dependabot|dependabot|Renovate|renovate)/

# The default automations for developers below
automations:
  estimated_time_to_review:
    if:
      - true
    run:
      - action: add-label@v1
        args:
          label: "{{ calc.etr }} min review"
  ...
```

And the other automations file is set to automate Dependabot PRs:

```yaml+jinja title="dependabot.cm"
manifest:
  version: 1.0

triggers:
  include:
    branch:
      - r/(Dependabot|dependabot|Renovate|renovate)/

automations:
  bump_minor:
    if:
      - {{ bump == 'minor' }}
      - {{ branch.name | includes(term="dependabot") }}
      - {{ branch.author | includes(term="dependabot") }}
    run:
      - action: approve@v1
      - action: add-comment@v1
        args:
          comment: |
            Dependabot `minor` version bumps are approved automatically.

  bump_patch:
    if:
      - {{ bump == 'patch' }}
      - {{ branch.name | includes(term="dependabot") }}
      - {{ branch.author | includes(term="dependabot") }}
    run:
      - action: approve@v1
      - action: merge@v1
      - action: add-comment@v1
        args:
          comment: |
            Dependabot `patch` version bumps are approved and merged automatically.

bump: {{ pr.description | extractDependabotVersionBump | compareSemver }}
```

#### Assign code expert

Assign code expert reviewer when the PR is created and after each commit. Ignore branches with the string "hotfix" in them.

``` yaml+jinja
triggers:
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

#### Explain code experts

Explain code experts only if the label “suggest-reviewer” exists. The automation will be triggered after each commit and after each label addition. If the label “suggest-reviewer” exists, it will trigger the `explain-code-experts` automation.

```yaml+jinja
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

#### Branch regex pattern

Trigger only specific automations branch pattern A, and trigger other automation for all other branches except those that fit the pattern REGEX_PATTERN

```yaml+jinja
# Automation in this file will trigger only for branch pattern REGEX_PATTERN
triggers:
  include:
    branch:
      - r/REGEX_PATTERN/
```
```yaml+jinja
# Automations in this file will trigger for all branches except pattern REGEX_PATTERN
triggers:
  exclude:
    branch:
      - r/REGEX_PATTERN/
```
