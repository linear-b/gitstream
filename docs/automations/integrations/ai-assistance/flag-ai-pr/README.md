---
title: Automation - Label AI-Assisted PRs
description: Automatically apply labels to PRs based on AI assistance.
category: [quality, genai, ai, quickstart]
starter_kits: [genai]
---
# Automatically Label AI-Assisted PRs
<!-- --8<-- [start:example]-->
Automatically apply labels to PRs based on whether they were assisted by AI tools. Developers can indicate the specific AI tools or models used, or pre-add an AI-related label to skip the prompt.

=== "Ask Developers About AI Assistance"
    Prompt PR authors with a convenient checkbox survey to indicate which AI tools they used for the PR.

    ![Ask About AI Assistance](/automations/integrations/ai-assistance/flag-ai-pr/ask-ai-assistance.png)

    !!! info "Configuration Description"
        Conditions:

        * A PR is created, and no `🤖 ai-*` label is pre-applied.
        * The question hasn't been asked before.

        Automation Actions:

        * Post a comment with a checkbox survey about AI tools used.
        * Apply labels based on the checkboxes selected.

    !!! example "Ask the PR author about AI assistance."
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/ai-assistance/comment_ai_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/ai-assistance/comment_ai_prompt.cm){ .md-button }
        </span>
        </div>

=== "Skip Question with Pre-Added Label"
    Developers can pre-add any `🤖 ai-*` label to skip the question. The automation checks for existing labels before posting the prompt.

    ![Skip Question with Label](/automations/integrations/ai-assistance/flag-ai-pr/skip-question-label.png)

    !!! info "Configuration Description"
        Conditions:

        * A PR is created with a pre-applied `🤖 ai-*` label.

        Automation Actions:

        * Automatically skip posting the AI assistance question.
        * Retain the pre-applied label.

=== "Track AI Tools, Models and Services"
    Extend the automation to track the specific AI tools, services, and models used.

    !!! info "Configuration Description"
        Conditions:

        * A PR with selected checkboxes for AI tools used.
        * Optional: Details about AI Service and Model specified.

        Automation Actions:

        * Apply labels for specific AI tools (e.g., `🤖 ai-copilot`, `🤖 ai-cursor`).
        * Apply labels for AI services and models if provided.

    !!! example "Track AI tools, models and services."
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/ai-assistance/track_ai_models.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/ai-assistance/track_ai_models.cm){ .md-button }
        </span>
        </div>
<!-- --8<-- [end:example]-->
