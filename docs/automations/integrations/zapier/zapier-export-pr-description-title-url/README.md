---
title: Automation - Create Project Management Tasks Via Zapier
description: Automatically export new PR titles, description, and url to Zapier.
category: [project, zapier]
---
# Create Project Management Tasks Via Zapier

<!-- --8<-- [start:example]-->
Export new PR titles, description, and URL to Zapier.

!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created.

    Automation Actions:

    * gitStream sends a webhook to Zapier that contains the PR title, description, and URL.

<div class="automationExample" markdown="1">
!!! example "Create Project Management Tasks Via Zapier"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/zapier/zapier_export_pr_description_title_url.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/zapier/zapier_export_pr_description_title_url.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
