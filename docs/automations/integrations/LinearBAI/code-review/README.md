---
title: Automation - Code Review Using LinearB's AI
description: Use gitStream's integration with LinearB's AI service to automate code reviews.
category: [quality, genai, copilot, tests, efficiency]
starter_kits: [genai]
---
# Code Review Using LinearB's AI :material-star-circle:

<!-- --8<-- [start:example]-->
Use LinearB's AI with the `code-review` action to automatically review the introduced changes to the code.

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.

    Automation Actions:

    * Perform an AI-driven code review and append the review comments to the PR.

!!! example "Configuration Example"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/LinearBAI/code-review.cm"
    ```
    <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/LinearBAI/code-review.cm){ .md-button }
        </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
