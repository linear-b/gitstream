---
title: Automation - Code Review Using LinearB's AI
description: Use gitStream's integration with LinearB's AI service to automate code reviews.
category: [quality, genai, efficiency, quickstart]
starter_kits: [genai]
quickstart: true
---
# Code Review Using LinearB's AI

<!-- --8<-- [start:example]-->
Use LinearB's AI with the [`code-review`](/automation-actions/#code-review) action to automatically review the introduced changes to the code.

![code-review](/automations/integrations/LinearBAI/code-review/LinearB-AI-code-review.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.
    * The PR is not on Draft staten and was not created by a bot.

    Automation Actions:

    * Perform an AI-driven code review and append the review comments to the PR.
    * Use `guidelines` to add your prompts to the team or org review

    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/LinearBAI/code-review.cm"
        ```
        <div class="result" markdown>
            <span>
            [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/LinearBAI/code-review.cm){ .md-button }
            </span>
        </div>

#### Localization Support

You can request the AI to provide code review comments in your preferred language by adding it to the guidelines:

```yaml+jinja
automations:
linearb_ai_review:
    if:
    - {{ not pr.draft }}
    run:
    - action: code-review@v1
        args:
        guidelines: |
            - Use Spanish language for all comments
            - Focus on code quality and best practices
```

#### Repository rules file example

1. Add the rules file to your repo root:

    ```title="./REVIEW_RULES.md"
    - Do not comment on missing documentation.
    - Do not comment on missing tests.
    - For JavaScript code, enforce using camelCase for variables and functions.
    ```

2. Load the file in the code review automation:

    ```
    automations:
        linearb_ai_review:
        if:
            - {{ not pr.draft }}
        run:
            - action: code-review@v1
            args:
                guidelines: {{ "./REVIEW_RULES.md" | readFile() | dump }}
    ```

<!-- --8<-- [end:example]-->



## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
