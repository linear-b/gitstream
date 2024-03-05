---
title: Automation - Label Missing Shortcut
description: Automatically label PRs that are missing references to Shortcut resources.
category: [shortcut, project]
---
# Label Missing Shortcut
<!-- --8<-- [start:example]-->
Automatically label PRs that are missing references to Shortcut resources.

![Label Missing Shortcut](/automations/label-missing-project-tracker/label-missing-project-tracker.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR is missing one of the following:
        * An Shortcut ticket reference in the PR title.
        * A link to an Shortcut resource in the PR description.

    Automation Actions:

    * Apply a red `⚠️ Missing Shortcut Link` label
    * Post a comment that asks the author to add an Shortcut reference to the PR.

<div class="automationExample" markdown="1">
!!! example "Label Missing Shortcut"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/shortcut/label_missing_shortcut.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/shortcut/label_missing_shortcut.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
