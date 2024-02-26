---
title: Automation - Dispatch GitHub Actions
description: Automatically trigger GitHub Actions based on PR content like changed resources, source or target branch, slash commands, and more.
category: [efficiency]
---
# Dispatch GitHub Actions


<!-- --8<-- [start:example]-->
Automatically trigger GitHub Actions based on PR content like changed resources, source or target branch, slash commands, and more.

![Automatically Dispatch GitHub Actions](/automations/integrations/github-actions/dispatch-github-action/dispatch-github-action.png)

=== "By Branch"
    !!! info "Configuration Description"
        Conditions (all must be true):

        * The PR source or target branch matches a specified format.

        Automation Actions:

        * Trigger a manual dispatch for the specified CI pipeline.

    <div class="automationExample" markdown="1">
    !!! example "Dispatch GitHub Actions by Branch"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/github-actions/dispatch-github-action/dispatch_github_action_branch.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/github-actions/dispatch-github-action/dispatch_github_action_branch.cm){ .md-button }
        </span>
        </div>
    </div>
=== "Using Labels"
    !!! info "Configuration Description"
        Conditions (all must be true):

        * The PR has one or more specified labels applied to it.

        Automation Actions:

        * Trigger a manual dispatch for the specified CI pipeline.

    <div class="automationExample" markdown="1">
    !!! example "Dispatch GitHub Actions Using Labels"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/github-actions/dispatch-github-action/dispatch_github_action_label.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/github-actions/dispatch-github-action/dispatch_github_action_label.cm){ .md-button }
        </span>
        </div>
    </div>
=== "By Modified Resources"
    !!! info "Configuration Description"
        Conditions (all must be true):

        * The PR modifies one or more specified resources.

        Automation Actions:

        * Trigger a manual dispatch for the specified CI pipeline.

    <div class="automationExample" markdown="1">
    !!! example "Dispatch GitHub Actions Based on Modified Resources"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/github-actions/dispatch-github-action/dispatch_github_action_resource.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/github-actions/dispatch-github-action/dispatch_github_action_resource.cm){ .md-button }
        </span>
        </div>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/safe-merge-automation.md"

--8<-- "docs/snippets/automation-footer.md"
