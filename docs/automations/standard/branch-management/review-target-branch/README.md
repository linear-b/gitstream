---
title: Automation - Assign Reviewers Based on Target Branch
description: Automatically assign PR reviewers for specific target branches.
---
# Assign Reviewers Based on Target Branch

Automatically assign PR reviewers for target branches that include a specified keyword.

![Assign Reviewers Based on Target Branch](/automations/standard/branch-management/review-target-branch/review-target-branch.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The target branch name includes the keyword `release-`

    Automation Actions:

    * Require a review from the `org/release-managers` team.
    * Assign the `org/release-managers` team for review.

!!! example "Assign Reviewers Based on Target Branch"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/branch-management/review_target_branch.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/branch-management/review_target_branch.cm){ .md-button }
      </span>
    </div>
