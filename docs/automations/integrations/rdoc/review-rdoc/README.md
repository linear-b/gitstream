---
title: Automation - Approve RDoc Changes
description: Automatically approve PRs for RDoc changes.
category: [efficiency, ruby]
---
# Automatically Approve RDoc Changes

<!-- --8<-- [start:example]-->
Approve PRs that only contain changes to RDoc and assign optional reviewers.


![Review RDoc](/automations/integrations/rdoc/review-rdoc/review-rdoc.png)

!!! info "Configuration Description"

    **Conditions (all must be true):**

    * The PR only contains changes to RDoc content.

    **Automation Actions:**

    * Assign the org/tech-writers team for optional review.
    * Apply a green `📓 RDoc Only` label
    * Approve the PR


<div class="automationExample" markdown="1">
!!! example "Review RDoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_rdoc.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_rdoc.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
