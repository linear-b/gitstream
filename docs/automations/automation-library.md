---
title: gitStream Automation Library
description: Code review workflow automation examples for gitStream.
---
# gitStream Automation Library

This library of gitStream examples is meant to serve as a starting point for your automation. We encourage you to customize them for your project and organization.

!!! tip "How to use these examples."
    These examples are all complete gitStream configuration files that you can download directly via the buttons below the examples and upload to the `.cm` directory of your repo. Alternatively, you can copy and paste the individual automations, but make sure you include all required declarations and any related custom expressions from the configurations to ensure they work properly.

## Most Popular Automations

* [Approve safe changes](approve-safe-changes/README.md) - Approve documentation, formatting changes, and tests.
* [Provide estimated time to review](provide-estimated-time-to-review/README.md) - Label all PRs with an estimated number of minutes it would take someone to review.
* [Explain Code Experts](standard/explain-code-experts/README.md) - Post a comment that recommends reviewers based on their expertise. 
* [Review sensitive files](standard/review-assignment/review-sensitive-files/README.md) - Define a custom list of files and directories that trigger additional reviews.
* [Additional review for large PRs](additional-review-for-large-pr/README.md) - Require additional reviewers for complex PRs.
 
## Improve PR Efficiency
### Auto-Approve Merges

* [Approve tests](approve-tests/README.md) - Label and approve PRs that only include tests.
* [Approve Tiny Changes](approve-tiny-changes/README.md) - Approve single-line changes to a single file.
* [Approve team by directory](approve-team-by-directory/README.md) - Approve PRs from specific teams to specified directories and files.


### Add PR Context With Labels and Comments
* [Label PRs without tests](label-prs-without-tests/README.md) - Apply a `missing-tests` label to any PRs that lack updates to tests.
* [Label percent new code](percent-new-code/README.md) - Post a comment that indicates what percentage of the PR contains new code.
* [Label deleted files](label-deleted-files/README.md) - Label PRs that delete files.
* [Label missing project tracker](label-missing-project-tracker/README.md) - Flag PRs that are missing a reference to an associated project tracking resource.
* [Automatic project tracking links](standard/link-issue-tracker/README.md) - Automatically post PR comments that link to the associated project tracking resource (Jira, Shortcut, Azure Boards, and more).
* [Summarize PR contents by language](standard/summarize-language-changes/README.md) - Post a comment that breaks down code changes by the programming languages contained in the PR.

## Improve PR Quality
### Merge Routing

* [Assign code experts](standard/review-assignment/assign-code-experts/README.md) - Identify the best experts for a PR and assign them to review.
* [Assign reviewers by directory](assign-reviewers-by-directory/README.md) - Automatically assign code reviewers based on directory structure.
* [Assign reviewers for knowledge share](standard/review-assignment/share-knowledge/README.md) - Automatically assign code reviewers based on contributions between specified thresholds.
* [Change missing Lambda field](change-missing-lambda-field/README.md) - Request changes if a PR creates a new Lambda function that lacks a required field.
* [Close wrong team by directory](close-wrong-team-by-directory/README.md) - Close PRs to a specified directory if the PR author is not on an approved team.

### Quality Checks
* [Enforce Semantic PR Titles](standard/enforce-pr-title/README.md) - Enforce PR naming conventions.
* [Enforce Changelog Updates](standard/review-changelog/README.md) - Require changelog updates for PRs that meet specific criteria.
* [Request screenshot](request-screenshot/README.md) - Request a screenshot in the PR description if none exist.
* [Welcome newcomer](welcome-newcomer/README.md) - Post a welcome message when someone makes their first PR to a repo, and provide context to help them know what's next.
* [Remove TODO comments](standard/review-todo-comments/README.md) - Detect TODO comments in PRs and ask the author to remove or fix them.

## Security and Policy Compliance
These examples help you follow your team's security best practices.

* [Change deprecated components](change-deprecated-components/README.md) - Request changes when a PR includes one or more deprecated components.
* [Enforce copyright headers](standard/enforce-copyright-header/README.md) - Enforce the use of copyright headers when publishing open source code.

## Third-party Integrations

--8<-- "docs/integrations/README.md:integrations"

## Utilities
These examples provide useful components to use in other automations. These aren't intended to be used on their own; instead they act as a reference point for improving other automations.

* [Colors custom expression](utilities/colors-custom-expression/README.md) - A custom expression that implements all of GitHub's default label colors in a custom expression.
* [CM File Header](utilities/cm-header/README.md) - A header to copy/paste to the top of your CM files to help yourself, and others, understand the purpose of the file.


## Contribute Your Idea

!!! tip "Have a great idea for an automation that should be included in this library?"
    [Submit your configuration](https://github.com/linear-b/gitStream/issues/new?assignees=&labels=new-example&template=new_automation_example.md&title=New+Example%3A+) on GitHub. We'll recognize your contribution publicly (if you want) and might even send you some special swag for your contribution. 
