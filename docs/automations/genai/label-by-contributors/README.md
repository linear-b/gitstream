---
title: Automation - Label by Contributors
description: Label the PR if its author is one of a given list of contributors
---
# Label by contributors
Label the PR if the PR author is one of a given list of contributors

<div class="automationImage" style="align:right" markdown="1">
![Label by Contributors](label_by_contributors.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions:

    * PR author is one of a specified list of contributors

    Automation Actions:

    * Add a label to the PR

</div>
!!! example "Label by Contributors"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/genai/label-by-contributors.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/genai/label-by-contributors.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/genai-measurement.md:2:3"

--8<-- "docs/snippets/automation-footer.md"