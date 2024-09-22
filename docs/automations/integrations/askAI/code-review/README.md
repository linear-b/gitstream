---
title: Automation - Ask AI for a Code Review
description: Use gitStream's integration with AI services to perform a comprehensive code review to your code
category: [quickstart, quality, genai, copilot, tests, efficiency]
---
# Ask AI for a Code Review

<!-- --8<-- [start:example]-->
Use AI to perform a comprehensive code review, identify bugs, security risks, performance issues, deprecated methods, and style guide violations, and suggests improvements.

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.
    * The PR has a label "askai cr"

    Automation Actions:

    * Add a comment with a code review generated by an AI model

!!! example "Configuration Example"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/askAI/askAI_CR.cm"
    ```
    <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/askAI/askAI-CR.cm){ .md-button }
        </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"