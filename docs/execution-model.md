# Execution Model

gitStream is triggered on new pull requests (PRs) for repositories that have gitStream installed. Upon triggering, gitStream collects context variables and evaluates the automation rules to determine which automation rules are relevant. 

## Organization level rules and repository rules

When a central `cm` repository is set with the CI/CD runner, the events for PRs from all installed repositories shall be evaluated in the `cm` repository pipeline, taking into account the organization level rules and the PR repository rules.

## Triggering events

By default, gitStream evaluates any new commit that is pushed to the PR, triggering automation evaluation. 

Additionally, if any of the automation rules reference the [`pr`](context-variables.md) context, gitStream shall trigger and will initiate automation rules evaluation even where there are changes to the PR title, descriptions, labels or comments.

This allows for greater flexibility in the automation process, ensuring that the relevant automation rules are evaluated and triggered when necessary. The execution model ensures that the automation process is streamlined, efficient, and effective.
