---
title: gitStream Automation - Block a PR From Merging if the Description Lacks Any Required Checklist Items.
description: Block a PR from merging if the description lacks any required checklist items.
---
# Block a PR From Merging if the Description Lacks Any Required Checklist Items
<!-- --8<-- [start:example]-->
Block a PR from merging if the description lacks any required checklist items.

![PR Description Checklist](/automations/standard/pr-description-checklist/pr-description-checklist.png)

!!! info "Configuration Description"

**Conditions (all must be true):**

* The PR description has one or more unchecked checkboxes.

**Automation Actions:**

* Request changes and post a comment asking the author to complete the PR checklist.
* Apply a yellow “Missing Checklist Items” label.


<div class="automationExample" markdown="1">
!!! example "Block a PR from merging if the description lacks any required checklist items"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/pr-description-checklist/pr_description_checklist.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/pr-description-checklist/pr_description_checklist.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

