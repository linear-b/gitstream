---
title: Automation - Export PR Data to Zapier
description: Automatically export data from your git repo to Zapier.
category: [project, zapier]
---
# Export PR Data to Zapier

<!-- --8<-- [start:example]-->
This is an example of how to send data from gitStream to Zapier.

!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created.

    Automation Actions:

    * gitStream sends a webhook to Zapier that contains the PR number

<div class="automationExample" markdown="1">
!!! example "Export PR Number to Zapier"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/zapier/zapier_export_pr_number.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/zapier/zapier_export_pr_number.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
