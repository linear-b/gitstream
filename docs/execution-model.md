# Execution Model

gitStream is triggered on new pull requests (PRs) for repositories that have gitStream installed. Upon triggering, gitStream collects context variables and evaluates the automation rules to determine which automation rules are relevant. 

## Organization level rules and repository rules

When a central `cm` repository is set with the CI/CD runner, the events for PRs from all installed repositories shall be evaluated in the `cm` repository pipeline, taking into account the organization level rules and the PR repository rules.

## Triggering events

### Implicit triggers

By default, gitStream evaluates any new commit that is pushed to the PR, triggering automation evaluation. 

Additionally, if any of the automation rules reference the [`pr`](context-variables.md) context, gitStream shall trigger and will initiate automation rules evaluation even where there are changes to the PR title, descriptions, labels or comments.

This allows for greater flexibility in the automation process, ensuring that the relevant automation rules are evaluated and triggered when necessary. The execution model ensures that the automation process is streamlined, efficient, and effective.

### Explicit triggers
`.cm` files also support explicit triggering mechanism. When using explicit triggers, the automations will run only according to the defined triggers, which means the Implicit triggers will not work. 

#### Explicit triggers syntax
To define explicit triggers, add the `on` keyword to the automation.
gitStream supports the following explicit triggers:

- `commit`  
    Trigger on each commit
- `pr_created`  
    Trigger when the PR is created
- `comment_added`  
    Trigger added comments
- `label_added`  
    Trigger added labels
- `label_removed`  
    Trigger removed labels

Explicit triggers can be used at the file level, specific to each automation separately, or a combination of the two. In case triggers are listed at the level **and** specific automation, this automation will be triggered according to both triggers.

#### Examples:
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
