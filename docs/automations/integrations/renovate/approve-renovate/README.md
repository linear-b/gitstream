---
title: Automation - Approve and Merge Renovate Changes
description: Automatically approve and merge Renovate PRs.
category: [security, renovate, efficiency]
---
# Approve and Merge Renovate Changes

<!-- --8<-- [start:example]-->
Approve PRs from Renovate

![Approve and Merge Renovate Changes](/automations/integrations/renovate/approve-renovate/approve-renovate.png)

!!! info "Configuration Description"

    **Conditions (all must be true):**

    * The PR author is Mend Renovate.

    **Automation Actions:**

    * Approve the PR
    * Apply an `approved-renovate` label to the PR
    * Merge the PR if all status checks pass.

<div class="automationExample" markdown="1">
!!! example "Approve Renovate"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/renovate/approve-renovate/approve_renovate.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/renovate/approve-renovate/approve_renovate.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
