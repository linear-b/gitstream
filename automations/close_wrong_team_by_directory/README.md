# Close Wrong Team by Directory

Close PRs to a specified directory if the PR author is not on an approved team.

![Close Wrong Team by Directory](close_wrong_team_by_directory.png)

Conditions (all must be true):
* The PR changes one or more files inside `/src/views`. Customize this value for your project.
* The PR author is not a member of the `ui` team. Customize this value for your organization.

Automation Actions:
* Close the PR.
* Post a comment that explains why the PR was closed.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation



