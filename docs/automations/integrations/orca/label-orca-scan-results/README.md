---
title: Automation - Auto-Label Orca Scan Results
description: Automatically apply labels to PRs that indicate the result of Orca Security scans.
category: [security, orca]
---
# Auto-Label Orca Scan Results


<!-- --8<-- [start:example]-->
Automatically apply labels to PRs that indicate the result of Orca Security scans.

!!! warning "Required gitStream Plugin"
    This example requires you to [install the `extractOrcaFindings` plugin](/filter-function-plugins/#extractorcafindings).

    [Learn more about gitStream plugins](/plugins/).

<div class="automationImage" markdown="1">
![Auto-Label Orca Scan Results](/automations/integrations/orca/label-orca-scan-results/label-orca-scan-results.png#only-light)![Auto-Label Orca Scan Results](/automations/integrations/orca/label-orca-scan-results/label-orca-scan-results-dark.png#only-dark)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * Orca Security detects one or more issues with the code in the PR.

    Automation Actions:

    * Apply a label that indicates which issue was identified.

</div>
<div class="automationExample" markdown="1">
!!! example "Auto-Label Orca Scan Results"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/orca/label_orca_scan_results.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/orca/label_orca_scan_results.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
