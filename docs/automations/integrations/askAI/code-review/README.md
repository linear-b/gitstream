---
title: Automation - Ask AI to Review a PR
description: Use gitStream's integration with AI services to perform a initial code review for a PR.
category: [quickstart, quality, genai, copilot, tests, efficiency]
starter_kits: [genai]
---
# Ask AI to Review a PR

<!-- --8<-- [start:example]-->
Use AI to generate an initial code review checklist, identify bugs, security risks, performance issues, deprecated methods, and style guide violations, and suggests improvements. The automation provides insights and recommended next actions for a human reviewer.

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.
    * The PR has a label `askai cr`.

    Automation Actions:

    * Add a comment with an AI-generated code review checklist for the PR.

!!! example "Configuration Example"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/askAI/askAI_CR.cm"
    ```
    <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/askAI/askAI_CR.cm){ .md-button }
        </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
