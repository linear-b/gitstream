---
title: Automation - Assign Code Experts
description: Automatically assign PR reviewers based on code expertise.
category: [review, efficiency, quality]
---
# Assign Code Experts

<!-- --8<-- [start:example]-->
When someone applies a `suggest-reviewers` label to a PR, use codeExperts to assign recommended reviewers and post a comment with the `explainCodeExperts` automation action.

<div class="automationImage" style="align:right" markdown="1">
![Assign Code Experts](/automations/standard/review-assignment/assign-code-experts/assign_code_experts.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR has a suggest-reviewers label attached to it.

    Automation Actions:

    * Use `codeExperts` to assign recommended reviewers.
    * Use `explainCodeExperts` to post a comment that lists the top code experts for the PR.
</div>
<div class="automationExample" markdown="1">
!!! example "Assign Code Experts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/review-assignment/assign_code_experts.cm"
    ```
    <div class="result" markdown="1">
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/assign_code_experts.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md::1"
--8<-- "docs/snippets/review-assignment-automation.md:3:"

--8<-- "docs/snippets/automation-footer.md"
