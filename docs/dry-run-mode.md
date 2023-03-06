# Dry-run mode

gitStream runs automations as described in `.cm/*.cm` in the main branch. 

To allow testing and experimenting with new rules, gitStream supports dry-run mode. When you commit changes to `.cm/*.cm` in a PR branch, gitStream will switch to **dry-run mode**.

In dry-run mode gitStream will stop executing automation rules described in the main branch for this PR, instead gitStream will parse the automation rules described in the `.cm/*.cm` of the PR branch and add a comment in the PR that describes all the automations actions – without executing the actions.

!!! note

	When in dry-run mode, changes to the `.cm/*.cm` file are ignored when calculating the conditions to help focus on setting the right automations

![dry-run mode](/screenshots/dry-run-mode.png)

Once you are satisfied with the results, you can merge the `.cm/*.cm` into the main branch to enable all new changes.

![normal mode](/screenshots/normal-mode.png)
