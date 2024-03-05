---
title: Automation - Automatic Team Review Assignment
description: Automatically assign teams to review PRs.
category: [review]
---
# Assign the Author's Team for Review


<!-- --8<-- [start:example]-->
Automatically assign the PR author's team to review PRs.

![Assign the Author's Team for Review](/automations/standard/review-assignment/review-team/review-team.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR author is a member of one of the teams specified in the `teams` custom expression.

    Automation Actions:

    * Assign that team to review the PR.


<div class="automationExample" markdown="1">
!!! example "Assign the Author's Team for Review"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/review-assignment/review_team.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/review_team.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md"

--8<-- "docs/snippets/automation-footer.md"
