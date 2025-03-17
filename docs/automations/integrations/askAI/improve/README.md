---
title: Automation - Ask AI for PR Improvements
description: Use gitStream's integration with AI services to recommend improvements to a PR.
category: [quality, genai, copilot, tests, efficiency]
starter_kits: [genai]
---

# Ask AI for PR Improvements

<!-- --8<-- [start:example]-->
Use AI to recommend improvements to a PR that enhance readability, performance, security, and maintainability.

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.
    * The PR has a label `askai improve`.

    Automation Actions:

    * Add a comment with AI-generated improvement suggestions for the PR.

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
