---
title: Automation - Auto-Label Checkmarx Scan Results
description: Automatically apply labels to PRs that indicate the result of Checkmarx scans.
category: [security, checkmarx]
---
# Auto-Label Checkmarx Scan Results


<!-- --8<-- [start:example]-->
Automatically apply labels to PRs that indicate the result of Checkmarx scans.

!!! warning "Required gitStream Plugin"
    This example requires you to [install the `extractCheckmarxFindings` plugin](/filter-function-plugins/#extractcheckmarxfindings).

    [Learn more about gitStream plugins](/plugins/).

<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * Checkmarx detects one or more new issues with the code in the PR.

    Automation Actions:

    * Apply a label that indicates which scan type identified the issue (SAST, SCA, or IaC).

</div>
<div class="automationExample" markdown="1">
!!! example "Auto-Label Checkmarx Scan Results"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/checkmarx/label_checkmarx_scan_results.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/checkmarx/label_checkmarx_scan_results.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
