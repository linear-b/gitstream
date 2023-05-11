# gitStream Automation Library

This library of gitStream examples is meant to serve as a starting point for your automation. We encourage you to customize them for your project and organization.

!!! tip "How to use these examples."
    These examples are all complete gitStream configuration files that you can download directly via the buttons below the examples and upload to the `.cm` directory of your repo. Alternatively, you can copy and paste the individual automations, but make sure you include all required declarations and any related custom expressions from the configurations to ensure they work properly.
 
## Improve PR Efficiency
These examples focus on auto-approve policies and providing detailed context via labels. 
### Auto-Approve Merges

* [Approve safe changes](approve-safe-changes/README.md) - Approve documentation, formatting changes, and tests.
* [Approve tests](approve-tests/README.md) - Label and approve PRs that only include tests.
* [Approve Tiny Changes](approve-tiny-changes/README.md) - Approve single-line changes to a single file.
* [Approve JavaScript formatting](approve-javascript-formatting-change/README.md) - Approve non-functional changes to JavaScript files 
* [Approve JavaScript log output](approve-javascript-log-output/README.md) - Approve changes to JavaScript files that only affect log output.
* [Approve Python formatting](approve-python-formatting-change/README.md) - Approve non-functional changes to Python files
* [Approve Python log output](approve-python-log-output/README.md) - Approve changes to Python files that only affect log output.
* [Approve team by directory](approve-team-by-directory/README.md) - Approve PRs from specific teams to specified directories and files .


### Add PR Context With Labels
* [Provide estimated time to review](provide-estimated-time-to-review/README.md) - Label all PRs with an estimated number of minutes it would take someone to review.
* [Label missing Jira info](label-missing-jira-info/README.md) - Label PRs that don't reference a Jira ticket in the title or description.
* [Label PRs without tests](label-prs-without-tests/README.md) - Apply a `missing-tests` label to any PRs that lack updates to tests.
* [Welcome newcomer](welcome-newcomer/README.md) - Post a welcome message when someone makes their first PR to a repo, and provide context to help them know what's next.
* [Label percent new code](percent-new-code/README.md) - Post a comment that indicates what percentage of the PR contains new code.
* [Label deleted files](label-deleted-files/README.md) - Label PRs that delete files.
* [Request screenshot](request-screenshot/README.md) - Request a screenshot in the PR description if none exist.


## Improve PR Quality
These examples help you identify code experts and assign reviewers based on the contents of the PR.
### Merge Routing

* [Additional review for large PRs](additional-review-for-large-pr/README.md) - Require additional reviewers for complex PRs.
* [Assign code experts](assign-code-experts/README.md) - Identify the best experts for a PR and assign them to review.
* [Assign reviewers by directory](assign-reviewers-by-directory/README.md) - Automatically assign code reviewers based on directory structure.
* [Change missing Lambda field](change-missing-lambda-field/README.md) - Request changes if a PR creates a new Lambda function that lacks a required field.
* [Close wrong team by directory](close-wrong-team-by-directory/README.md) - Close PRs to a specified directory if the PR author is not on an approved team.

## Security Policy Compliance
These examples help you follow your team's security best practices.

* [Review sensitive files](review-sensitive-files/README.md) - Define a custom list of files and directories that trigger additional reviews.
* [Change deprecated components](change-deprecated-components/README.md) - Request changes when a PR includes one or more deprecated components.


## Contribute Your Idea

!!! tip "Have a great idea for an automation that should be included in this library?"
    [Submit your configuration](https://github.com/linear-b/gitStream/issues/new?assignees=&labels=new-example&template=new_automation_example.md&title=New+Example%3A+) on GitHub. We'll recognize your contribution publicly (if you want) and might even send you some special swag for your contribution. 

<h2>/:\</h2>