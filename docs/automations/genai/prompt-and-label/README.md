---
title: Automation - Prompt and Label
description: Prompt the PR author asking whether Generative AI was used in the PR, then label accordingly
---
# Prompt and Label
Use a prompt to determine if Generative AI was used in the PR, then lable the PR accordingly

<div class="automationImage" style="align:right" markdown="1">
![Prompt and Label](prompt_and_label.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions:

    * None (this runs on all PRs)

    Automation Actions:

    * Add a comment using a task list to ask whether Generative AI was used in this PR
    * If the "assisted by Generative AI" box is ticked, label the PR accordingly
</div>
!!! example "Prompt and Label"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/genai/prompt-and-label.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/genai/prompt-and-label.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/genai-measurement.md::2"

--8<-- "docs/snippets/automation-footer.md"