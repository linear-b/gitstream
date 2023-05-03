# `/:\ gitStream`

gitStream is a workflow automation tool that enables you to use YAML configuration files to optimize your code review process. Add context to PRs, find code experts for reviews, and automate the merge process to maximize developer productivity.

If you like gitStream, please give this repo a star! ⭐ It helps us spread the word.
## Main Features

### Automated Change Requests

Reduce code review noise by catching issues before anyone invests precious time. Flag [deprecated components](automations/change-deprecated-components/README.md), [missing data objects](automations/change-missing-lambda-field/README.md), [off-limits code](automations/close-wrong-team-by-directory/README.md), and other problems that need to be addressed before assigning code reviewers.

### Review Assignment

Identifying the correct people to review a PR can take time, particularly for complex projects and repos requiring deep expertise. [Assign code experts](automations/assign-code-experts/README.md) to review complex PRs, [notify your security team about sensitive changes](automations/review-sensitive-files/README.md), and automatically [assign reviewers based on the contents of the PR](automations/assign-reviewers-by-directory/README.md).
### Auto-Merge PRs

Not all PRs need extensive review policies that loop in multiple experts. gitStream lets you auto-merge [safe changes](automations/approve-safe-changes/README.md), [small fixes](automations/approve-tiny-changes/README.md), [PRs from trusted teams](automations/approve-team-by-directory/README.md), and anything else you want to unblock the review process to keep your team focused on their work.

### Contextual Labels

Reduce the mental burden of code reviews with labels that provide a high degree of context. Indicate an [estimated time to review](automations/provide-estimated-time-to-review/README.md) or flag potential issues with [Jira information](automations/label-missing-jira-info/README.md), [missing tests](automations/label-prs-without-tests/README.md), [deleted files](automations/label-deleted-files/README.md), and more.

## Install
[How to install gitStream](https://docs.gitstream.cm/).
## Usage 
* [How gitStream works](https://docs.gitstream.cm/how-it-works/)
* [Write your first automation](https://docs.gitstream.cm/quick-start/)
* [gitStream automation library](https://docs.gitstream.cm/automations/automation-library/)
## Contribute 

* [Report a bug](https://github.com/linear-b/gitstream/issues/new?assignees=&labels=bug&template=bug_report.md&title=)
* [Request a new feature](https://github.com/linear-b/gitstream/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=)
## Updates

Subscribe to [gitStream Feature Announcements](https://github.com/linear-b/gitstream/discussions).


