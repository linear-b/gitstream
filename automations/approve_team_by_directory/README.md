
# Approve Team by Directory
Triggered for PRs that only include changes to files inside the docs directory, and that are authored by someone on the tech-writers team.

![Approve Team by Directory](approve_team_by_directory.png)

Conditions (all must be true):
* All changed files are inside the `docs` directory
* The PR author is on the `tech-writers` team.

Automation Actions:
* Approve the PR
* Post a comment that explains the approval.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation