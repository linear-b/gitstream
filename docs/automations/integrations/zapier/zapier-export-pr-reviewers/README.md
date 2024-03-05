---
title: Automation - Auto-Schedule Sync Meetings via Zapier
description: Automatically export data from your git repo to Zapier.
category: [zapier]
---
# Auto-Schedule Sync Meetings via Zapier

<!-- --8<-- [start:example]-->
Automatically update Zapier with a list of PR reviewers.

!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created or updated.

    Automation Actions:

    * gitStream sends the list of reviewers to Zapier via webooks.

<div class="automationExample" markdown="1">
!!! example "Auto-Schedule Sync Meetings via Zapier"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/zapier/zapier_export_pr_reviewers.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/zapier/zapier_export_pr_reviewers.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
