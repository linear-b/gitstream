---
title: Automation - Ask AI to Summarize a PR
description: Use gitStream's integration with AI services to generate a concise bullet-point summary of a PR.
category: [quality, genai, copilot, tests, efficiency]
starter_kits: [genai]
---
# Ask AI to Summarize a PR

<!-- --8<-- [start:example]-->
Use AI to generate a concise bullet-point summary of changes in a PR.

![summarized-pr](/automations/integrations/askAI/summarize-pr/summarized-pr.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.
    * The PR has a label `askai summarize`.

    Automation Actions:

    * Add a comment with an AI-generated summary of the PR.

!!! example "Configuration Example"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/askAI/askAI_summarize.cm"
    ```
    <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/askAI/askAI_summarize.cm){ .md-button }
        </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
