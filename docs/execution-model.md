# Execution Model

gitStream is triggered on new pull requests (PRs) for repositories that have gitStream installed. Upon triggering, gitStream collects context variables and evaluates the automation rules to determine which automation rules are relevant. 

## Organization level rules and repository rules

When a central `cm` repository is set with the CI/CD runner, the events for PRs from all installed repositories shall be evaluated in the `cm` repository pipeline, taking into account the organization level rules and the PR repository rules.

## Triggering events

### Implicit triggers

By default, gitStream evaluates any new commit that is pushed to the PR, triggering automation evaluation. 

Additionally, if any of the automation rules reference the [`pr`](context-variables.md) context, gitStream shall trigger and will initiate automation rules evaluation even where there are changes to the PR title, descriptions, labels or comments.

This allows for greater flexibility in the automation process, ensuring that the relevant automation rules are evaluated and triggered when necessary. The execution model ensures that the automation process is streamlined, efficient, and effective.

### Explicit triggers :fontawesome-brands-github:
gitstream supports an explicit triggering mechanism. When using explicit triggers, the automations will run only according to the defined triggers, which means the Implicit triggers will not work. Automations triggered by explicit triggers will be invoked also on `draft` PRs

#### Explicit triggers syntax
Use explicit triggers to enhance the control and customization of automations in gitStream, allowing users to define precisely when and how automations should be triggered based on various events and actions within pull requests.

Add the `on` keyword to the file and/or to a specific automation to define explicit triggers.
gitStream supports the following explicit triggers:

- `merge`: Trigger when merging the PR
- `pr_created`: Trigger when the PR is created
- `commit`: Trigger on each commit
- `comment_added`: Trigger on each added comment
- `label_added`: Trigger on each added label
- `label_removed`: Trigger on removed label

Explicit triggers are set per each automation block independently and can be configured at the file level, specific to each automation separately or a combination of the two. In case triggers are listed at the file level **and** specific automation, the automation will be triggered according to both triggers.
If an automation block does not have explicit triggers configured, it will be triggered according to the default (implicit) triggers

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
