---
title: Automation - Label GitHub Copilot PRs
description: Automatically apply labels to PRs that are assisted by GitHub Copilot
category: [quality, labeling]
---
# Automatically Label GitHub Copilot PRs
<!-- --8<-- [start:example]-->
Automatically apply labels to PRs that are assisted by GitHub Copilot. You can apply labels based on a known list of Copilot users, PR tags, or by prompting the PR author to indicate if they used Copilot.

=== "Label by Prompt"
    Prompt PR authors to indicate if they used Copilot for the PR and automatically label the PR if they did. This requires two separate automation files to handle posting the prompt and labeling accordingly.

    ![Label Copilot by Prompt](/automations/integrations/copilot/flag-copilot-pr/label-copilot-by-prompt.png)

    !!! info "Configuration Description"
        Conditions:

        * A PR is created

        Automation Actions:

        * Post a comment prompting the author to indicate if Copilot assisted the author with writing the code in the PR.

    !!! example "Ask the PR author about Copilot usage."
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/copilot/comment_copilot_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/copilot/comment_copilot_prompt.cm){ .md-button }
        </span>
        </div>

    !!! info "Configuration Description"
        Conditions:

        * A PR is updated or merged where the author indicates they used Copilot via a prompt.

        Automation Actions:

        * Apply a `🤖 Copilot` label to the PR

    !!! example "Label PRs where the user indicated Copilot usage"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/copilot/label_copilot_by_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/copilot/label_copilot_by_prompt.cm){ .md-button }
        </span>
        </div>
=== "Label by Known Users"
    Automatically apply labels to PRs that are created by known users of generative AI coding tools.

    ![Label by Contributors](/automations/integrations/copilot/flag-copilot-pr/label-copilot-by-contributors.png)
    !!! info "Configuration Description"
        Conditions:

        * The PR author is one of a specified list of contributors

        Automation Actions:

        * Apply a `🤖 Copilot` label to the PR

    !!! example "Label by Contributors"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/copilot/label_copilot_by_contributors.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/copilot/label_copilot_by_contributors.cm){ .md-button }
        </span>
        </div>
=== "Label by Tag"
    Look for a specific tag  in the PR title, description, comments or commit messages and if found add a label to the PR

    ![Label Copilot by Tag](/automations/integrations/copilot/flag-copilot-pr/label-copilot-by-tag.png)
    !!! info "Configuration Description"
        Conditions:

        * The `#copilot#` tag is found in any of the PR title, description, comments or commit messages for commits in the PR

        Automation Actions:

        * Apply a `🤖 Copilot` label to the PR

    !!! example "Label Copilot by Tag"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/copilot/label_copilot_by_tag.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/copilot/label_copilot_by_tag.cm){ .md-button }
        </span>
        </div>
<!-- --8<-- [end:example]-->