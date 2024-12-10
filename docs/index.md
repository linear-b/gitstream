---
title: gitStream Documentation
description: YAML-based workflow automation for the code review process.
---
# /:\ gitStream
gitStream is a workflow automation tool that enables you to use YAML configuration files to optimize your code review process. Add context to PRs, find code experts for reviews, and automate the merge process to maximize developer productivity.
## Features

!!! quote ""
	![Approve safe changes](assets/safe-change-highlight.png){: style="border-radius:4px;width:50%", align=right}
	
	**Auto-Merge PRs**

	Not all PRs need extensive review policies that loop in multiple experts. gitStream lets you auto-merge [safe changes](automations/approve-safe-changes/README.md), [small fixes](automations/approve-tiny-changes/README.md), [PRs from trusted teams](automations/approve-team-by-directory/README.md), and anything else you want to unblock the review process to keep your team focused on their work.

!!! quote ""
	![Estimated time to review](assets/etr-label-highlight.png){: style="border-radius:4px;width:50%", align=left}

	**Contextual Labels**

	Reduce the mental burden of code reviews with labels that provide a high degree of context. Indicate an [estimated time to review](automations/provide-estimated-time-to-review/README.md) or flag potential issues with [Jira information](automations/integrations/jira/label-missing-jira-info/README.md), [missing tests](automations/label-prs-without-tests/README.md), [deleted files](automations/label-deleted-files/README.md), and more.

!!! quote ""
	![Assign Code Experts](assets/code-experts-highlight.png){: style="border-radius:4px;width:50%", align=right}

	**Review Assignment**

	Identifying the correct people to review a PR can take time, particularly for complex projects and repos requiring deep expertise. [Assign code experts](automations/standard/review-assignment/assign-code-experts/README.md) to review complex PRs, [notify your security team about sensitive changes](automations/standard/review-assignment/review-sensitive-files/README.md), and automatically [assign reviewers based on the contents of the PR](automations/assign-reviewers-by-directory/README.md).

!!! quote ""
	![Change Deprecated Components](assets/change-deprecated-highlight.png){: style="border-radius:4px;width:50%", align=left}

	**Automated Change Requests**
	
	Reduce code review noise by catching issues before anyone invests precious time. Flag [deprecated components](automations/change-deprecated-components/README.md), [missing data objects](automations/change-missing-lambda-field/README.md), [off-limits code](automations/close-wrong-team-by-directory/README.md), and other problems that need to be addressed before assigning code reviewers.

**Build Your First Automation in 2 Minutes**
=== ":fontawesome-brands-github: GitHub"

	1. Install gitStream for free in [GitHub](https://github.com/apps/gitstream-cm/installations/new)
	2. Configure your repository using the [instructions for GitHub](github-installation.md). This will guide you through setting up your first automations.

	That's it! Now sit back and watch gitStream run automation rules on your next PR.

	!!! tip "Tip: Install gitStream for your entire organization"

		gitStream can be installed for one repo, specific repos, or all repos in your organization. We recommend installing for **all** because it will ensure all new repos are able to use gitStream. You can change this setting at any time in the future.

=== ":fontawesome-brands-github: GitHub Server"

	1. Create and install a [Custom GitHub App for Self-Hosted GitHub Server](/custom-github-app)
	2. <a href="https://app.linearb.io/login" target="_blank">Login</a> to the LinearB app. Navigate to **Company Settings** -> **Git**
		1. Make sure the GHES is integrated with LinearB
		2. Connect gitStream to the GHES integration by pressing the "Connect gitStream" button
		3. Connect the repositories to gitStream by selecting the checkbox under the "gitStream" column (for org level installation, `cm` repo must be selected)
	3. Configure your repository using the [instructions for GitHub](/github-installation#setup). This will guide you through setting up your first automations.

	That's it! Now sit back and watch gitStream run automation rules on your next PR.

	!!! tip "Tip: Install gitStream for your entire organization"

		gitStream can be installed for one repo, specific repos, or all repos in your organization. We recommend installing for **all** because it will ensure all new repos are able to use gitStream. You can change this setting at any time in the future.

=== ":fontawesome-brands-gitlab: GitLab"

	1. <a href="https://app.linearb.io/login" target="_blank">Login</a>, or <a href="https://app.linearb.io/sign-up" target="_blank">create a free account</a> on the LinearB app.
	2. Connect gitStream to your GitLab repos by following the steps described <a href="https://linearb.helpdocs.io/article/0xxpvue4s9-connect-git-stream-using-a-git-lab-integration" target="_blank">here</a>.
	
	That's it! Now sit back and watch gitStream run automation rules on your next PR.

=== ":fontawesome-brands-bitbucket: Bitbucket"

	1. <a href="https://app.linearb.io/login" target="_blank">Login</a>, or <a href="https://app.linearb.io/sign-up" target="_blank">create a free account</a> on the LinearB app.
	2. Connect gitStream to your Bitbucket repos by following the steps described in the [Bitbucket installation guide](bitbucket-installation.md).
	
	That's it! Now sit back and watch gitStream run automation rules on your next PR.


## Get Involved
Want to report a bug, request a new feature, ask a question, get updates for new features, or propose a new configuration for the automation library? [Join us on GitHub](https://github.com/linear-b/gitstream).