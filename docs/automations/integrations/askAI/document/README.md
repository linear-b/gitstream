---
title: Automation - Ask AI for Documentation for a PR
description: Use gitStream's integration with AI services to recommend documentation for the changes in the PR.
category: [quality, genai, copilot, tests, efficiency]
starter_kits: [genai]
---
# Ask AI for Documentation for a PR

<!-- --8<-- [start:example]-->
Use AI to recommend new or updated documentation for changes in a PR, focusing on functionality, parameters, and expected behavior.

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.
    * The PR has a label `askai document`.

    Automation Actions:

    * Add a comment with AI-generated documentation recommendations for the PR.

!!! example "Configuration Example"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/askAI/askAI_document.cm"
    ```
    <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/askAI/askAI_document.cm){ .md-button }
        </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
