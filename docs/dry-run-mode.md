# How to Test Your Automation

By default, gitStream runs all applicable automations for every new PR and change to existing PR. If you want to test and experiment with new rules, gitStream supports a dry-run mode that will avoid making changes to your PRs. When you commit changes to any CM files found inside your repo's `.cm/` directory, gitStream will switch to dry-run mode.

In dry-run mode, gitStream won't execute any automation rules on the PR. Instead, gitStream will parse all applicable automation rules and post a comment to the PR discussion that describes the actions that will be taken for normal PRs.

![dry-run mode](/screenshots/dry-run-mode.png)

!!! note

	When in dry-run mode, incoming changes to the CM files are ignored. In other words, new automations and configurations won't take effect until you merge the PR.

Once you are satisfied with the results, you can merge your CM changes into the main branch to enable the new configurations.

