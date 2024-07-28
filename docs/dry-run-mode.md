---
title: How to Test gitStream Automations
description: Use gitStream dry-run mode to test your automations before implementing them.
---
# How to Test Your Automation

By default, gitStream runs all applicable automations for every new PR and changes to existing PR. If you want to test and experiment with new rules, gitStream supports a dry-run mode that will avoid changing your PRs. When you commit changes to any CM files found inside your repo's `.cm/` directory, gitStream will switch to dry-run mode.

In dry-run mode, gitStream won't execute any automation rules on the PR. Instead, gitStream will try to parse all applicable automation rules and show an error in case of failure. When there are other changes outside the `cm` files, gitStream will post a comment to the PR discussion describing the actions to be taken for those changes. A new comment will be added after every new commit.

![dry-run mode](/screenshots/dry-run-mode.png)

!!! note

	When in dry-run mode, incoming changes to the CM files are ignored. In other words, new automations and configurations will only take effect once you merge the PR.

Once you are satisfied with the results, you can merge your CM changes into the main branch to enable the new configurations.

