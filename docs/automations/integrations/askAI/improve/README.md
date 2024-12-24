---
title: Automation - Ask AI to Summarize the Changes in a PR
description: Use gitStream's integration with AI services to generate a summary of the changes in the PR.
category: [quality, genai, copilot, tests, efficiency]
---
# Ask AI to provide code suggestion to improve the PR

<!-- --8<-- [start:example]-->
Use AI to generate improvement suggestions for the code changes.

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.
    * The PR has a label "askai improve"

    Automation Actions:

    * Add a comment with omprovement suggestions for the added code

!!! example "Configuration Example"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/askAI/askAI_improve.cm"
    ```
    <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/askAI/askAI_improve.cm){ .md-button }
        </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
