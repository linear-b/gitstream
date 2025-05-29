---
title: Automation - Ask AI to provide PR documentation
description: Use gitStream's integration with AI services to generate conscious documentation of the changes in the PR.
category: [quality, genai, copilot, tests, efficiency]
search:
  exclude: true
---
# Ask AI to provide PR documentation

<!-- --8<-- [start:example]-->
Use AI to generate documentation for the newly added features and changes based on the code diff.

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created, or new code has been committed to the PR.
    * The PR has a label "askai document"

    Automation Actions:

    * Add a comment with a summary of the PR

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
