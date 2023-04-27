# Additional Review for Large PRs
Require 2 reviewers for PRs that have more than 10 changed files in the src directory and the estimated time to review is 30 or more minutes.


![Additional Review for Large PRs](additional_review_for_large_pr.png)

Conditions (all must be true):
* There are 10 or more changed files
* The estimated time to review is 30 minutes or more.
* One or more of the changed files is inside the `src` directory.

Automation Actions:
* Require a minumim of 2 reviews.
* Post a comment that explains this is considered a large change that requires 2 reviews.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation