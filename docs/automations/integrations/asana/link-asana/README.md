---
title: Automation - Automatically Link PRs to Related Asana Cards
description: Provide automatic links to Asana cards that are associated with PRs.
category: [efficiency, quality, project]
---
# Automatically Link PRs to Related Asana Cards
<!-- --8<-- [start:example]-->
Provide automatic links to Asana cards that are associated with PRs.

<div class="automationImage" markdown="1">
![Automatically Link to the Related Asana Card](/automations/standard/link-issue-tracker/link-issue-tracker.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains a reference to an Asana card in the title or branch name.

    Automation Actions:

    * Post a comment that provides a link to the associated Asana Card.

</div>
<div class="automationExample" markdown="1">
!!! example "Automatically Link to the Related Asana Card"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/asana/link_asana.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/asana/link_asana.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
