# gitStream Automation Library

This directory contains a library of automations 

## How to Use These Automations

## Contributor Your Idea

## Improve PR Efficiency
gitStream makes simple merges effortless via merge auto-approve policies and can provide detailed context via labels for even the most complex PRs. 

 ### Auto-approve Merges

* [Approve safe changes](approve_safe_changes/README.md) - Approve documentation, formatting changes, and tests.
* [Approve tests](approve_tests/README.md) - Label and approve PRs that only include tests.
* [Approve Tiny Changes](approve_tiny_changes/README.md) - Approve single-line changes to a single file.
* [Approve JavaScript formatting](approve_javascript_formatting_change/README.md) - Approve non-functional changes to JavaScript files 
* [Approve JavaScript log output](approve_javascript_log_output/README.md) - Approve changes to JavaScript files that only affect log output.
* [Approve Python log output](approve_python_log_output/README.md) - Approve changes to Python files that only affect log output.
* [Approve team by directory](approve_team_by_directory/README.md) - Approve PRs from specific teams to specified directories and files .


### PR Context
* [Provide estimated time to review](provide_estimated_time_to_review/README.md) - Label all PRs with an estimated number of minutes it would take someone to review.
* [Label missing Jira info](label_missing_jira_info/README.md) - Label PRs that don't reference a Jira ticket in the title or description.
* [Label PRs without tests](label_prs_without_tests/README.md) - Apply a `missing-tests` label to any PRs that lack updates to tests.
* [Welcome newcomer](welcome_newcomer/README.md) - Post a welcome message when someone makes their first PR to a repo, and provide context to help them know what's next.
* [Label percent new code](percent_new_code/README.md) - Post a comment that indicates what percentage of the PR contains new code.
* [Label deleted files](label_deleted_files/README.md) - Label PRs that delete files.
* [Request screenshot](request_screenshot/README.md) - Request a screenshot in the PR description if none exist.


## Improve PR Quality

### Merge Routing
Ensure the right experts are assigned to review your code

* [Additional review for large PRs](additional_review_for_large_pr/README.md) - Require additional reviewers for complex PRs.
* [Assign code experts](assign_code_experts/README.md) - Identify the best experts for a PR and assign them to review.
* [Assign reviewers by directory](assign_reviewers_by_directory/README.md) - Automatically assign code reviewers based on directory structure.
* [Change missing Lambda field](change_missing_lambda_field/README.md) - Request changes if a PR creates a new Lambda function that lacks a required field.
* [Close wrong team by directory](close_wrong_team_by_directory/README.md) - Close PRs to a specified directory if the PR author is not on an approved team.

## Security Policy Compliance

* [Review sensitive files](review_sensitive_files/README.md) - Define a custom list of files and directories that trigger additional reviews.
* [Change deprecated components](change_deprecated_components/README.md) - Request changes when a PR includes one or more deprecated components.
