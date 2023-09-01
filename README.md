# `/:\ gitStream`

gitStream is a workflow automation tool that enables you to use YAML configuration files to optimize your code review process. Add context to PRs, find code experts for reviews, and automate the merge process to maximize developer productivity.

If you like gitStream, please give this repo a star! ⭐ It helps us spread the word.
## Main Features

### Automated Change Requests

Reduce code review noise by catching issues before anyone invests precious time. Flag [deprecated components](https://docs.gitstream.cm/automations/change-deprecated-components), [missing data objects](https://docs.gitstream.cm/automations/change-missing-lambda-field/), [off-limits code](https://docs.gitstream.cm/automations/close-wrong-team-by-directory/), and other problems that need to be addressed before assigning code reviewers.

### Review Assignment

Identifying the correct people to review a PR can take time, particularly for complex projects and repos requiring deep expertise. [Assign code experts](https://docs.gitstream.cm/automations/standard/review-assignment/assign-code-experts/) to review complex PRs, [notify your security team about sensitive changes](https://docs.gitstream.cm/automations/review-sensitive-files/), and automatically [assign reviewers based on the contents of the PR](https://docs.gitstream.cm/automations/assign-reviewers-by-directory/).
### Auto-Merge PRs

Not all PRs need extensive review policies that loop in multiple experts. gitStream lets you auto-merge [safe changes](https://docs.gitstream.cm/automations/approve-safe-changes/), [small fixes](https://docs.gitstream.cm/automations/approve-tiny-changes/), [PRs from trusted teams](https://docs.gitstream.cm/automations/approve-team-by-directory/), and anything else you want to unblock the review process to keep your team focused on their work.

### Contextual Labels

Reduce the mental burden of code reviews with labels that provide a high degree of context. Indicate an [estimated time to review](https://docs.gitstream.cm/automations/provide-estimated-time-to-review/) or flag potential issues with [Jira information](https://docs.gitstream.cm/automations/label-missing-jira-info/), [missing tests](https://docs.gitstream.cm/automations/label-prs-without-tests/), [deleted files](https://docs.gitstream.cm/automations/label-deleted-files/), and more.

## Install
[How to install gitStream](https://docs.gitstream.cm/).
## Usage 
* [How gitStream works](https://docs.gitstream.cm/how-it-works/)
* [Write your first automation](https://docs.gitstream.cm/quick-start/)
* [gitStream automation library](https://docs.gitstream.cm/automations/automation-library/)
* [Integrations](https://docs.gitstream.cm/integrations)
## Contribute 

* [Report a bug](https://github.com/linear-b/gitstream/issues/new?assignees=&labels=bug&template=bug_report.md&title=)
* [Request a new feature](https://github.com/linear-b/gitstream/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=)
## Updates

Subscribe to [gitStream Feature Announcements](https://github.com/linear-b/gitstream/discussions).

## Local Documentation Server Setup

To run the documentation server locally using Python3, follow these steps:

1. Create a virtual environment named `.venv` using the command `python -m venv .venv`
2. Activate the virtual environment by running the command `. ./.venv/bin/activate`
3. Install the required packages by executing `pip install -r requirements.txt`
4. Start the server by running `mkdocs serve`

The local documentation server should now be running at `http://127.0.0.1:8000/`.

