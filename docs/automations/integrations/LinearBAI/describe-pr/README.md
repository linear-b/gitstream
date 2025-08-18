---
title: Automation - Add PR Description Using LinearB's AI
description: Use gitStream's integration with LinearB's AI service to summarize the PR changes.
category: [quality, genai, efficiency, quickstart]
starter_kits: [genai]
quickstart: true
---
# PR Description Using LinearB's AI

<!-- --8<-- [start:example]-->
Use the [`describe-changes`](/automation-actions/#describe-changes) automation action to automatically generate and append a concise, AI-generated description to a pull request. This ensures that all PRs include meaningful and helpful descriptions, improving review efficiency.

![summarized-pr](/automations/integrations/LinearBAI/describe-pr/LinearB-AI-describe-pr.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.

    Automation Actions:

    * Append the AI-generated description to the PR description.

    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/LinearBAI/describe-pr.cm"
        ```
        <div class="result" markdown>
            <span>
            [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/LinearBAI/describe-pr.cm){ .md-button }
            </span>
        </div>

#### Localization Support

You can request the AI to provide code review comments in your preferred language by adding it to the guidelines:

```yaml+jinja
automations:
  linearb_ai_desc:
    if:
      - {{ not pr.draft }}
    run:
      - action: describe-changes@v1
        args:
          concat_mode: append
          guidelines: |
            - Use Korean language for all comments
```

#### Repository rules file example

1. Add the rules file to your repo root:

    ```title="./DESCRIPTION_RULES.md"
    -  Add emojis to highlight important changes.
    -  Use clear and concise language.
    -  Avoid using jargon or technical terms.
    ```

2. Load the file in the code review automation:

    ```
    automations:
      linearb_ai_desc:
        if:
          - {{ not pr.draft }}
        run:
          - action: describe-changes@v1
            args:
              concat_mode: append
              guidelines: {{ "./DESCRIPTION_RULES.md" | readFile() | dump }}
    ```

<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
