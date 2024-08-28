---
title: Automation - PR Checklist General
description: Automatically evaluate PRs against code requirement checklists.
---
# PR Checklist General

<!-- --8<-- [start:example]-->
Automatically evaluate PRs against code requirement checklists.

<div class="automationImage" markdown="1">
![PR Checklist General](/automations/standard/pr-checklist-general/pr-checklist-general.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    There are no conditions for this action - if included as presented in the demo, it's run every time.

    Automation Actions:

    * Post a comment containing a checklist with each completed item checked off.

</div>
<div class="automationExample" markdown="1">
!!! example "PR Checklist General"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/pr_checklist_general.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/pr_checklist_general.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
