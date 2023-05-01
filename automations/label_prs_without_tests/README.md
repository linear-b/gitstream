
# Label PRs Without Tests
Apply a `missing-tests` label to any PRs that don't update tests. gitStream will remove this label if the contributor adds a test change to the PR.

![Automation Name](label_prs_without_tests.png)

Conditions (all must be true):
* The PR has no changes to a test.

Automation Actions:
* Apply a `missing-tests` label.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation



