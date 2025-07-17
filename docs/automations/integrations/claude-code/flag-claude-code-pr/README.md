---
title: Automation - Label Claude Code PRs
description: Automatically apply labels to PRs that are assisted by Claude Code
category: [quality, genai, claude_code, quickstart]
starter_kits: [genai]
---
# Automatically Label Claude Code PRs
<!-- --8<-- [start:example]-->
Automatically apply labels to PRs that are assisted by Claude Code. You can apply labels based on a known list of Claude Code users, PR tags, or by prompting the PR author to indicate if they used Claude Code.

=== "Label Co-author"
    Automatically apply labels to PRs that are authored by Claude or have Claude as a co-author in commit messages.

    ![Label Claude Code by Co-author](/automations/integrations/claude-code/flag-claude-code-pr/label-claude-code-by-coauthor.png)

    !!! info "Configuration Description"
        Conditions:

        * The PR author's name contains "Claude" (case-insensitive), OR
        * Any commit message in the PR contains a "Co-Authored-By" line with Claude

        Automation Actions:

        * Apply a `🤖 Claude Code` label to the PR

    !!! example "Label Claude Code by Co-author"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/claude_code/label_claude_code_by_co_author.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/claude_code/label_claude_code_by_co_author.cm){ .md-button }
        </span>
        </div>

=== "Label by Prompt"
    Prompt PR authors to indicate if they used Claude Code for the PR and automatically label the PR if they did. This requires two separate automation files to handle posting the prompt and labeling accordingly.

    ![Label Claude Code by Prompt](/automations/integrations/claude-code/flag-claude-code-pr/label-claude-code-by-prompt.png)

    !!! info "Configuration Description"
        Conditions:

        * A PR is created

        Automation Actions:

        * Post a comment prompting the author to indicate if Claude Code assisted the author with writing the code in the PR.

    !!! example "Ask the PR author about Claude Code usage."
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/claude_code/comment_claude_code_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/claude_code/comment_claude_code_prompt.cm){ .md-button }
        </span>
        </div>

    !!! info "Configuration Description"
        Conditions:

        * A PR is updated or merged where the author indicates they used Claude Code via a prompt.

        Automation Actions:

        * Apply a `🤖 Claude Code` label to the PR

    !!! example "Label PRs where the user indicated Claude Code usage"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/claude_code/label_claude_code_by_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/claude_code/label_claude_code_by_prompt.cm){ .md-button }
        </span>
        </div>
=== "Label by Known Users"
    Automatically apply labels to PRs that are created by known users of generative AI coding tools.

    ![Label by Contributors](/automations/integrations/claude-code/flag-claude-code-pr/label-claude-code-by-contributors.png)
    !!! info "Configuration Description"
        Conditions:

        * The PR author is one of a specified list of contributors

        Automation Actions:

        * Apply a `🤖 Claude Code` label to the PR

    !!! example "Label by Contributors"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/claude_code/label_claude_code_by_contributors.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/claude_code/label_claude_code_by_contributors.cm){ .md-button }
        </span>
        </div>
=== "Label by Tag"
    Look for a specific tag in the PR title, description, comments or commit messages and if found add a label to the PR

    ![Label Claude Code by Tag](/automations/integrations/claude-code/flag-claude-code-pr/label-claude-code-by-tag.png)
    !!! info "Configuration Description"
        Conditions:

        * The `#claude_code#` tag is found in any of the PR title, description, comments or commit messages for commits in the PR

        Automation Actions:

        * Apply a `🤖 Claude Code` label to the PR

    !!! example "Label Claude Code by Tag"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/claude_code/label_claude_code_by_tag.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/claude_code/label_claude_code_by_tag.cm){ .md-button }
        </span>
        </div>

## 📈 Track the Business Impact

By labeling PRs assisted by Claude Code, you can measure:

- Time savings (via Cycle Time, Review Time)
- PR risk (via Refactor Rate, CFR)
- Productivity lift from AI tools

<!-- --8<-- [end:example]-->
