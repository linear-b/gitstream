---
title: Automation - Approve and Merge Snyk Changes
description: Automatically approve and merge Snyk PRs.
category: [security, snyk, efficiency]
---
# Approve and Merge Snyk Changes

<!-- --8<-- [start:example]-->
Approve PRs from Snyk

![Approve and Merge Snyk Changes](/automations/integrations/snyk/approve-snyk/approve-snyk.png)

!!! info "Configuration Description"

    **Conditions (all must be true):**

    * The PR author is Snyk.

    **Automation Actions:**

    * Approve the PR
    * Apply an `approved-snyk` label to the PR
    * Merge the PR if all status checks pass.

<div class="automationExample" markdown="1">
!!! example "Approve Snyk"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/snyk/approve-snyk/approve_snyk.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/snyk/approve-snyk/approve_snyk.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
