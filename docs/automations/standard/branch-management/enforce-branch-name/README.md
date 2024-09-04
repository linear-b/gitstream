---
title: Automation - Enforce Branch Naming Conventions
description: Automatically enforce prefixes or keywords in PR branch names.
category: [review, quality]
---
# Enforce Branch Naming Conventions
<!-- --8<-- [start:example]-->
Automatically enforce prefixes or keywords in PR branch names.

![Enforce Branch Naming Conventions](/automations/standard/branch-management/enforce-branch-name/enforce-branch-name.png)
!!! info "Configuration Description"
    Conditions (all must be true):

    * The incoming branch name is missing a required prefix `feature` `fix` or `stable`
    * The invoming branch name fails to match a specified regex pattern. In this case `abc-` followed by a number.
    * The incoming branch name is not listed in an `ignoreList` custom expression.

    Automation Actions:

    * Post a comment explaining the branch name requirements.
    * Apply a red label: `❗ Incorrect Branch Name`
    * Close the PR.

!!! example "Enforce Branch Naming Conventions"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/branch-management/enforce_branch_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/branch-management/enforce_branch_name.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md"

--8<-- "docs/snippets/automation-footer.md"