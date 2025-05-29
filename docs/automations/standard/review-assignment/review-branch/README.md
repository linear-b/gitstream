---
title: Automation - Branch-Based Review Policies
description: Automatically route and manage PRs based on the target or destination branch.
category: [review]
---
# Branch-Based Review Policies


<!-- --8<-- [start:example]-->
Automatically route and manage PRs based on the target or destination branch.

![Branch-Based Review Policies](/automations/standard/review-assignment/review-branch/review-branch.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The target or source branch name contains a specified prefix.

    Automation Actions:

    * Implement custom review policies for the branch.

=== "By Target Branch"
    <div class="automationExample" markdown="1">
    !!! example "Review Target Branch"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/standard/review-assignment/review_target_branch.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/review_target_branch.cm){ .md-button }
        </span>
        </div>
    </div>
=== "By Source Branch"
    <div class="automationExample" markdown="1">
    !!! example "Review Source Branch"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/standard/review-assignment/review_source_branch.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/review_source_branch.cm){ .md-button }
        </span>
        </div>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md"

--8<-- "docs/snippets/automation-footer.md"
