---
title: gitStream Automation - Review Pydoc Changes
description: Automatically approve PRs for Pydoc changes.
---
# Review Pydoc Changes

Approve PRs that only contain changes to Pydoc and assign optional reviewers.

<!-- --8<-- [start:example]-->

<div class="automationImage" markdown="1">
![Review Pydoc](/automations/integrations/pydoc/review-pydoc/review-pydoc.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

**Conditions (all must be true):**

* The PR only contains changes to Pydoc content.

**Automation Actions:**

* Assign the org/tech-writers team for optional review.
* Apply a green `📓 Pydoc Only` label
* Approve the PR

</div>
<div class="automationExample" markdown="1">
!!! example "Review Pydoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/pydoc/review_pydoc.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/pydoc/review_pydoc.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->