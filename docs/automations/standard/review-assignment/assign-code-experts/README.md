---
title: Automation - Assign Code Experts
description: Automatically assign PR reviewers based on code expertise.
---
# Assign Code Experts

<!-- --8<-- [start:example]-->
=== "Using Labels"
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

=== "Using Slash Commands"
    Automatically Auto-assign code experts as reviewers using slash commands.

    ![Review Auto-assign Slash Command](/automations/standard/review-assignment/assign-code-experts/assign-code-experts-slash-command.png)

    !!! info "Configuration Description"

        **Conditions (all must be true):**

        * The PR has a comment that contains the text '/gitstream auto-assign'.

        **Automation Actions:**

        * Assign the top two code experts for the PR as reviewers.

    <div class="automationExample" markdown="1">
    !!! example "Auto-assign Reviewers Using a Slash Command"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/standard/review-assignment/assign_expert_slash_command.cm"
        ```
        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/assign_expert_slash_command.cm){ .md-button }
          </span>
        </div>
<!-- --8<-- [end:example]-->
## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"