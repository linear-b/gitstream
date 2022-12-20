# Dry-run mode

gitStream runs automations as described in `.cm/gitstream.cm` in the main branch. 

To allow testing and experimenting with new rules, gitStream supports dry-run mode. Once you open a PR and commit changes to `.cm/gitstream.cm` in the PR branch, gitStream will stop executing automations described in the main branch for this PR, instead gitStream will parse the automations described in the `.cm/gitstream.cm` of the PR branch and add a comment in the PR that describes all the automations actions – without executing the actions.

!!! note

	When in dry-run mode, changes to the `.cm/gitstream.cm` file are ignored when calculating the conditions to help focus on setting the right automations

![dry-run mode](/screenshots/dry-run-mode.png)

Once you are satisfied with the results, you can merge the `.cm/gitstream.cm` into the main branch to enable all new changes.

![normal mode](/screenshots/normal-mode.png)

