---
title: Automation - Label by Hint
description: Label the PR if a hint text is found in the PR title, description, comments or commit messages
---
# Label by Hint
Look for a hint string (in this example, `#copilot#`) in the PR title, description, comments or commit messages and if found add a label to the PR

<div class="automationImage" style="align:right" markdown="1">
![Label by Hint](label_by_hint.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions:

    * Hint text is found in any of the PR title, description, comments or commit messages for commits in the PR

    Automation Actions:

    * Add a label to the PR

</div>
!!! example "Label by Hint"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/genai/label-by-hint.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/genai/label-by-hint.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/genai-measurement.md::1"
--8<-- "docs/snippets/genai-measurement.md:3:"

--8<-- "docs/snippets/automation-footer.md"