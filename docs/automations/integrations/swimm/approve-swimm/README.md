---
title: Automation - Approve Swimm Changes
description: Automatically approve PRs that only change Swimm documentation.
category: [quality, docs]
---
# Approve Swimm Changes
Approve changes that only affect [Swimm](https://swimm.io) documentation.

<div class="automationImage" style="align:right" markdown="1">
![Approve Swimm Changes](/automations/integrations/swimm/approve-swimm/approve-swimm.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR only affects files that end in a `.swm` extension.

    Automation Actions:

    * Add a `swimm-docs-only` label
    * Approve the PR
    * Post a comment that explains that this is a Swimm docs change only.
</div>
<div class="automationExample" markdown="1">
!!! example "Approve Swimm Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/swimm/approve_swimm.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/swimm/approve_swimm.cm){ .md-button }
      </span>
    </div>

Special thanks to [Omerr](https://github.com/Omerr) for providing this example.
</div>
