# Trigger Control

gitStream is triggered on new pull requests (PRs) for repositories that have gitStream installed. Upon triggering, gitStream collects context variables and evaluates the automation rules to determine which ones are relevant.

## Organization-level rules and repository rules

When a central `cm` repository is set with the CI/CD runner, the events for PRs from all installed repositories shall be evaluated in the `cm` repository pipeline, considering the organization-level and PR repository rules.

## Execution behavior for free accounts

Free accounts have a monthly limit on the number of PRs that can trigger automations. Once this limit is reached:

- PRs will still be created, but gitStream will skip automations for them.
- The gitStream check on these PRs will be concluded as `Skipped`, to ensure that gitStream will not block the PR from merging.
- A warning is displayed in PR comments when the organization reaches 90% of its quota.
- The limit resets at the start of each month.

To remove automation limits, <a href="https://linearb.io/contact-us" target="_blank">Contact LinearB</a> and upgrade to a paid plan.
🔗 Learn more: [Automation Limits](limits.md)

## Triggering Mechanism

gitStream automations are triggered by events related to pull requests (PRs). You can specify triggers to fine-tune which events should initiate automations.

### Implicit triggers

By default, gitStream evaluates any new commit pushed to the PR, triggering automation evaluation.

Additionally, if any of the automation rules reference the following [`pr`](context-variables.md#pr) context variables: `pr.comments`, `pr.title`, `pr.description`, or `pr.labels`, gitStream shall trigger and will initiate automation rules evaluation where there are changes to the PR comments, title, description, or labels respectfully.

This allows for greater flexibility in the automation process, ensuring that the relevant automation rules are evaluated and triggered when necessary. The execution model ensures the automation process is streamlined, efficient, and effective.

### Explicit triggers :fontawesome-brands-github:

gitstream supports an explicit triggering mechanism. When using explicit triggers, the automations will run only according to the defined triggers, which means the Implicit triggers will not work. Automations triggered by explicit triggers will also be invoked on `draft` PRs

Triggers can be defined globally at the file level or specifically for each automation. Triggers are applied only to the file(s) where they are declared.

!!! Note "Combining File-Level and Automation-Level Triggers"
    When both file-level explicit triggers and automation-level explicit triggers exist, the actual triggers used will be the result of unifying both lists. This means the automation will be triggered by any event specified in either the file-level triggers or the automation-level triggers.

#### `triggers` section

The `triggers` section in gitStream gives you precise control over when automations execute. It allows you to define conditions based on pull request events using `include` and `exclude` lists to specify branch and repository patterns. These lists determine which branches or repositories trigger or bypass automation but do not affect the events initiating automations.

Additionally, the `on` keyword defines specific events that trigger automations. It can be added at the file level (under the `triggers` section) or within individual automations for greater customization. Multiple triggers can be stacked, meaning gitStream will execute the automation for each matching triggering event, allowing flexibility in defining automation behavior

<div class="trigger-details" markdown=1>
| Key                                                   | Type              | Description                                                    |
| ----------------------------------------------------- | ----------------- | -------------------------------------------------------------- |
| `triggers.on` :fontawesome-brands-github:             | [String]          | Specifies the explicit triggers that initiate the automations. |
| `triggers.include.branch` :fontawesome-brands-github: | [String or regex] | Branches that match will trigger the automation.               |
| `triggers.exclude.branch` :fontawesome-brands-github: | [String or regex] | Branches that match will not trigger the automation.           |
| `triggers.include.repository`                         | [String or regex] | Repositories that match will trigger the automation.           |
| `triggers.exclude.repository`                         | [String or regex] | Repositories that match will not trigger the automation.       |
</div>

The table below lists supported explicit triggers, categorized into those enabled by default and those that require manual activation.

<div class="trigger-details" markdown=1>
| Triggering event                                                      | Explicit Trigger :fontawesome-brands-github: | Default (implicit triggers)    |
| --------------------------------------------------------------------- | -------------------------------------------- | ------------------------------ |
| Checks finished                                                       | -                                            | When an automation uses the `wait_for_all_checks` action |
| Comment added                                                         | `comment_added`                              | when `pr.comment` in `.cm`     |
| :fontawesome-brands-github: Comment edited                            | -                                            | when `pr.comment` in `.cm`     |
| Commit pushed                                                         | `commit`                                     | `on`                           |
| Creating a PR                                                         | `pr_created`                                 | `on`                           |
| Description changed                                                   | -                                            | when `pr.description` in `.cm` |
| Label added                                                           | `label_added`                                | when `pr.label` in `.cm`       |
| Label removed                                                         | `label_removed`                              | when `pr.label` in `.cm`       |
| :fontawesome-brands-github: Merging the PR                            | `merge`                                      | `off`                          |
| Title change                                                          | -                                            | when `pr.title` in `.cm`       |
| :fontawesome-brands-github: Transition from draft to ready for review | `pr_ready_for_review`                        | `off`                          |
| :fontawesome-brands-github: Transition from any state to closed       | `pr_closed`                                  | `off`                          |
| :fontawesome-brands-github: Transition from closed to open            | `pr_reopened`                                | `off`                          |
| :fontawesome-brands-github: Transition from any state to approved     | `pr_approved`                                | If there is an automation with one of the actions: `require-reviewers`, `set-required-approvals` or `merge`, or uses `pr.approvals` context variable  |
</div>

Explicit triggers are set independently per each automation block and can be configured at the file level, specific to each automation separately or in combination. If triggers are listed at the file level **and** specific automation, the automation will be triggered according to both triggers.
If an automation block does not have explicit triggers configured, it will be triggered according to the default (implicit) triggers.

!!! Note
    The `on` parameter can be used within individual automation blocks, while `triggers.include` and `triggers.exclude` can only be defined at the file level.

**Note on Matching:**

- When using a `String` as the matching type, the values in `triggers.include.*` and `triggers.exclude.*` require exact matches. This means that the names of branches or repositories must exactly match the specified string to either trigger or prevent triggering the automation.
- For more precise control, use a regular expression (regex) format: `r/REGEX_PATTERN/`.

**Default Behavior:**

- Implicit triggers are the default behavior if the automation doesn't have explicit triggers configured.
- The automation runs for all branches and repositories if neither include nor exclude is specified.

**Exclude/Include prioritization**

- Exclude overrides the include option. Thus, a repo will be excluded when it matches the include and exclude lists.

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

## Action-Level Execution Control

gitStream provides intelligent action-level execution control that automatically skips certain actions based on the original triggering event. This feature helps reduce noise and ensures that AI-powered and code-related actions only execute when there are actual code changes, improving efficiency across all supported providers (GitLab, Bitbucket, and GitHub).

### How It Works

When an automation is triggered, gitStream evaluates each action individually against the original triggering event. Some actions are automatically skipped if the triggering event is not relevant to their purpose.

!!! important "Explicit Triggers Override"
    When explicit triggers are configured (using the `on` or `triggers` parameters), they take precedence over the automatic skip mechanism. This means actions will execute for all explicitly defined triggers, regardless of the action-level execution rules below.

### Action Execution Rules

The following table shows which actions are restricted to code-related triggering events:

<div class="trigger-details" markdown=1>
| Action                | Executes Only On                                           | Behavior on Other Triggers |
| --------------------- | ---------------------------------------------------------- | -------------------------- |
| `add-code-comment`    | Commit pushed, Creating a PR (not draft), PR ready for review | Skipped |
| `code-review`         | Commit pushed, Creating a PR (not draft), PR ready for review | Skipped |
| `describe-changes`    | Commit pushed, Creating a PR (not draft), PR ready for review | Skipped |
| `explain-code-experts`| Commit pushed, Creating a PR (not draft), PR ready for review | Skipped |
| All other actions     | Current defaults (no restrictions)                        | Executed |
</div>

### Examples

#### Scenario: AI Code Review with Explicit Triggers

```yaml+jinja
automations:
  ai_code_review:
    on:
      - commit
      - label_added
    if:
      - true
    run:
      - action: code-review@v1        # Executes on both commit and label_added (explicit triggers override skip rules)
      - action: add-label@v1          # Executes on both commit and label_added
        args:
          label: "reviewed"
```

In this example with explicit triggers:
- When triggered by a `commit` event: both actions execute
- When triggered by a `label_added` event: both actions execute (explicit triggers take precedence)

#### Scenario: No Explicit Triggers

```yaml+jinja
automations:
  smart_review:
    if:
      - {{ files | length > 5 }}
    run:
      - action: describe-changes@v1   # Only executes on code-related events
      - action: add-reviewers@v1      # Executes on all default triggers
        args:
          reviewers: ["expert1", "expert2"]
```

With implicit triggers (no explicit triggers configured), `describe-changes` will only execute when the automation is triggered by code changes, while `add-reviewers` follows the current default behavior.

### Examples

#### Dependabot and Renovate

For example, you can have your normal automations that help developers with their PRs and a separate automation that automates Dependabot or Renovate version bumps. Both automations serve distinctly different purposes: the first helps your developers streamline their PRs, while the other reduces developers' toil by auto-approving version bumps. You will not want to unnecessarily trigger gitStream for Dependabot or Renovate, so you can configure the triggers to exclude the branch where Dependabot or Renovate PRs are created.

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
    on:
      - pr_created
      - commit
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
    on:
      - pr_created
      - commit
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
