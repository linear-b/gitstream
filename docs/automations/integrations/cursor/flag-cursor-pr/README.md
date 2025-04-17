---
title: Automation - Label Cursor PRs
description: Automatically apply labels to PRs that are assisted by Cursor
category: [quality, genai, cursor, quickstart]
---

# Automatically Label Cursor PRs
<!-- --8<-- [start:example]-->
Automatically apply labels to Pull Requests that are assisted by Cursor AI. This automation helps track the impact and usage of Cursor's AI capabilities across your development workflow. You can apply labels based on:

- A known list of Cursor users
- AI-generated code comments
- PR tags
- Inline prompt responses

=== "Label by Prompt"
    Prompt PR authors to indicate if they used Cursor for the PR and automatically label the PR if they did. This requires two separate automation files to handle posting the prompt and labeling accordingly.

    ![Label Cursor by Prompt](/automations/integrations/cursor/flag-cursor-pr/label-cursor-by-prompt.png)

    !!! info "Configuration Description"
        Conditions:

        * A PR is created

        Automation Actions:

        * Post a comment prompting the author to indicate if Cursor assisted the author with writing the code in the PR.

    !!! example "Ask the PR author about Cursor usage."
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/cursor/comment_cursor_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/cursor/comment_cursor_prompt.cm){ .md-button }
        </span>
        </div>

    !!! info "Configuration Description"
        Conditions:

        * A PR is updated or merged where the author indicates they used Cursor via a prompt.

        Automation Actions:

        * Apply a `🤖 Cursor` label to the PR

    !!! example "Label PRs where the user indicated Cursor usage"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/cursor/label_cursor_by_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/cursor/label_cursor_by_prompt.cm){ .md-button }
        </span>
        </div>

=== "Label by Known Users"
    Automatically apply labels to PRs that are created by known users of generative AI coding tools.

    ![Label by Contributors](/automations/integrations/cursor/flag-cursor-pr/label-cursor-by-contributors.png)
    !!! info "Configuration Description"
        Conditions:

        * The PR author is one of a specified list of contributors

        Automation Actions:

        * Apply a `🤖 Cursor` label to the PR

    !!! example "Label by Contributors"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/cursor/label_cursor_by_contributors.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/cursor/label_cursor_by_contributors.cm){ .md-button }
        </span>
        </div>

=== "Label by Tag"
    Look for a specific tag in the PR title, description, comments or commit messages and if found add a label to the PR

    ![Label Cursor by Tag](/automations/integrations/cursor/flag-cursor-pr/label-cursor-by-tag.png)
    !!! info "Configuration Description"
        Conditions:

        * The `#cursor#` tag is found in any of the PR title, description, comments or commit messages for commits in the PR

        Automation Actions:

        * Apply a `🤖 Cursor` label to the PR

    !!! example "Label Cursor by Tag"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/cursor/label_cursor_by_tag.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/cursor/label_cursor_by_tag.cm){ .md-button }
        </span>
        </div>
<!-- --8<-- [end:example]-->
