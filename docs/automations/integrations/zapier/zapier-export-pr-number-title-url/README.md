---
title: Automation - Export PR Number, Title, and URL to Zapier
description: Automatically export data from your git repo to Zapier.
category: [project, zapier]
---
# Export PR Number, Title, and URL to Zapier

<!-- --8<-- [start:example]-->
Export new PR titles, numbers, and URLs to Zapier.

!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created.

    Automation Actions:

    * gitStream sends the PR number, title, and URL to Zapier via webhook.

<div class="automationExample" markdown="1">
!!! example "Export PR Number, Title, and URL to Zapier"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/zapier/zapier_export_pr_number_title_url.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/zapier/zapier_export_pr_number_title_url.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
