---
title: Automation - Change Missing Lambda Field
description: Detect missing Lambda fields that are required in all PRs.
category: [quality]
---
# Change Missing Lambda Field

If a PR creates a new Lambda function, but lacks a description field, gitStream will request changes and post a comment that explains why.

<div class="automationImage" style="align:right" markdown="1">
![Change Missing Lambda Info](change_missing_lambda_field.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains an update to a Lambda function.
    * The affected files are missing a description field.

    Automation Actions:

    * Add a `lambda-missing-field` label to the PR.
    * Request changes and post a comment that explains why.
</div>
<div class="automationExample" markdown="1">
!!! example "Change Missing Lambda Field"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/change_missing_lambda_field.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/change_missing_lambda_field.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/change-request-automation.md"

--8<-- "docs/snippets/automation-footer.md"
