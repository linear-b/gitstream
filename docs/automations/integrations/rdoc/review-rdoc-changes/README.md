---
title: gitStream Automation - Review Rdoc Changes
description: Automatically approve PRs for Rdoc changes.
---
# Review Rdoc Changes

Approve PRs that only contain changes to Rdoc and assign optional reviewers.

<!-- --8<-- [start:example]-->

<div class="automationImage" markdown="1">
![Review Godoc](/automations/integrations/rdoc/review-rdoc-changes/review-rdoc-changes.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

**Conditions (all must be true):**

* The PR only contains changes to Rdoc content.

**Automation Actions:**

* Assign the org/tech-writers team for optional review.
* Apply a green `📓 Rdoc Only` label
* Approve the PR

</div>
<div class="automationExample" markdown="1">
!!! example "Review Godoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_rdoc_changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_rdoc_changes.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->