---
title: Automation - Label Missing Asana
description: Automatically label PRs that are missing references to Asana resources.
category: [quality, project, labeling]
---
# Label Missing Asana
<!-- --8<-- [start:example]-->
Automatically label PRs that are missing references to Asana resources.

![Label Missing Asana](/automations/label-missing-project-tracker/label-missing-project-tracker.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR is missing an Asana ticket reference in the PR title and a link to an Asana resource in the PR description.

    Automation Actions:

    * Apply a red `⚠️ Missing Asana Link` label
    * Post a comment that asks the author to add an Asana reference to the PR.


<div class="automationExample" markdown="1">
!!! example "Label Missing Asana"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/asana/label_missing_asana.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/asana/label_missing_asana.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
