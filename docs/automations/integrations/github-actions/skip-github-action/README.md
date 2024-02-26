---
title: Automation - Skip Required GitHub Actions
description: Automatically skip GitHub Actions based on branch names, modified resource, slash commands, and more.
category: [efficiency, CI]
---
# Skip Required GitHub Actions


<!-- --8<-- [start:example]-->
Automatically skip GitHub Actions based on branch names, modified resource, slash commands, and more.

![Automatically Skip GitHub Actions](/automations/integrations/github-actions/skip-github-action/skip-github-action.png)

!!! tip "Prerequisite Config for Required Statuses"
    If you want to skip a required status check, you will need to make sure that your branch protection is configured to allow gitStream to bypass status check requirements.

    ![GitHub Branch Protection Config](/automations/integrations/github-actions/skip-github-action/required-status-config.png)

=== "By Branch"
    !!! info "Configuration Description"
        Conditions (all must be true):

        * The target branch name includes a specified keyword. Optionally, you can modify this to detect the source branch name.

        Automation Actions:

        * Skip the specified CI pipelines.

    <div class="automationExample" markdown="1">
    !!! example "Automatically Skip GitHub Actions by Branch"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/github-actions/skip-github-action/skip_github_action_branch.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/github-actions/skip-github-action/skip_github_action_branch.cm){ .md-button }
        </span>
        </div>
    </div>
=== "Using Labels"
    !!! info "Configuration Description"
        Conditions (all must be true):

        * Someone applies one or more specified labels to a PR.

        Automation Actions:

        * Skip the specified CI pipelines.

    <div class="automationExample" markdown="1">
    !!! example "Use Labels to Automatically Skip GitHub Actions"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/github-actions/skip-github-action/skip_github_action_label.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/github-actions/skip-github-action/skip_github_action_label.cm){ .md-button }
        </span>
        </div>
    </div>
=== "By Modified Resource"
    !!! info "Configuration Description"
        Conditions (all must be true):

        * A PR modifies specific files or directories.

        Automation Actions:

        * Skip a specified GitHub Action.

    <div class="automationExample" markdown="1">
    !!! example "Automatically Skip GitHub Actions Based on Modified Resources"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/github-actions/skip-github-action/skip_github_action_resource.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/github-actions/skip-github-action/skip_github_action_resource.cm){ .md-button }
        </span>
        </div>
    </div>

<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/safe-merge-automation.md"

--8<-- "docs/snippets/automation-footer.md"
