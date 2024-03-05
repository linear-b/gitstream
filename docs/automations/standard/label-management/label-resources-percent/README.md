---
title: Automation - Label Changed Resources By Percent
description: Automatically label PRs based on changes to code resources.
category: [review]
---
# Label Changed Resources By Percent

Apply a label to all PRs that indicates what percentage of new lines of code modify one or more specified resources.

<div class="automationImage" markdown="1">
![Label Changed Resources By Percent](/automations/standard/label-management/label-resources-percent/label-resources-percent.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR modifies resources listed in one or more specified locations.

    Automation Actions:

    * Apply labels that indicate what percentage of new code lines modify the specified resources.

</div>
<div class="automationExample" markdown="1">
!!! example "Label Changed Resources By Percent"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/label_resources_percent.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/label_resources_percent.cm){ .md-button }
      </span>
    </div>
</div>
