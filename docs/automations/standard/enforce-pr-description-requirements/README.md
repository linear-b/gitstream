---
title: gitStream Automation - Enforce PR Description Requirements.
description: Automaticallly request changes for PRs that have empty descriptions.
---
# Enforce PR Description Requirements
<!-- --8<-- [start:example]-->
Automaticallly request changes for PRs that have empty descriptions.

![Enforce PR Description Requirements](/automations/standard/enforce-pr-description-requirements/enforce-pr-description-requirements.png)

!!! info "Configuration Description"

**Conditions (all must be true):**

* The PR description is empty.

**Automation Actions:**

* Request changes and post a comment explaining that PR descriptions are required.

<div class="automationExample" markdown="1">
!!! example "Enforce PR Description Requirements"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/enforce-pr-description-requirements/enforce_pr_description_requirements.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/enforce-pr-description-requirements/enforce_pr_description_requirements.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

