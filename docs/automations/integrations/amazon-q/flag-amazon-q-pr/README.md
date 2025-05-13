---
title: Automation - Label Amazon Q PRs
description: Automatically apply labels to PRs that are assisted by Amazon Q
category: [quality, genai, amazon_q, quickstart]
starter_kits: [genai]
---
# Automatically Label Amazon Q PRs
<!-- --8<-- [start:example]-->
Automatically apply labels to PRs that are assisted by Amazon Q. You can apply labels based on a known list of Amazon Q users, PR tags, or by prompting the PR author to indicate if they used Amazon Q.

=== "Label by Prompt"
    Prompt PR authors to indicate if they used Amazon Q for the PR and automatically label the PR if they did. This requires two separate automation files to handle posting the prompt and labeling accordingly.

    ![Label Amazon Q by Prompt](/automations/integrations/amazon-q/flag-amazon-q-pr/label-amazon-q-by-prompt.png)

    !!! info "Configuration Description"
        Conditions:

        * A PR is created

        Automation Actions:

        * Post a comment prompting the author to indicate if Amazon Q assisted the author with writing the code in the PR.

    !!! example "Ask the PR author about Amazon Q usage"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/amazon_q/comment_amazon_q_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/amazon_q/comment_amazon_q_prompt.cm){ .md-button }
        </span>
        </div>

    !!! info "Configuration Description"
        Conditions:

        * A PR is updated or merged where the author indicates they used Amazon Q via a prompt.

        Automation Actions:

        * Apply a `🤖 Amazon Q` label to the PR

    !!! example "Label PRs where the user indicated Amazon Q usage"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/amazon_q/label_amazon_q_by_prompt.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/amazon_q/label_amazon_q_by_prompt.cm){ .md-button }
        </span>
        </div>
=== "Label by Known Users"
    Automatically apply labels to PRs that are created by known users of generative AI coding tools.

    ![Label by Contributors](/automations/integrations/amazon-q/flag-amazon-q-pr/label-amazon-q-by-contributors.png)
    !!! info "Configuration Description"
        Conditions:

        * The PR author is one of a specified list of contributors

        Automation Actions:

        * Apply a `🤖 Amazon Q` label to the PR

    !!! example "Label by Contributors"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/amazon_q/label_amazon_q_by_contributors.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/amazon_q/label_amazon_q_by_contributors.cm){ .md-button }
        </span>
        </div>
=== "Label by Tag"
    Look for a specific tag in the PR title, description, comments or commit messages and if found add a label to the PR

    ![Label Amazon Q by Tag](/automations/integrations/amazon-q/flag-amazon-q-pr/label-amazon-q-by-tag.png)
    !!! info "Configuration Description"
        Conditions:

        * The `#amazon_q#` tag is found in any of the PR title, description, comments or commit messages for commits in the PR
        Automation Actions:

        * Apply a `🤖 Amazon Q` label to the PR

    !!! example "Label Amazon Q by Tag"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/amazon_q/label_amazon_q_by_tag.cm"
        ```
        <div class="result" markdown>
        <span>
        [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/amazon_q/label_amazon_q_by_tag.cm){ .md-button }
        </span>
        </div>

## 📈 Track the Business Impact

By labeling PRs assisted by Amazon Q, you can measure:

- Time savings (via Cycle Time, Review Time)
- PR risk (via Refactor Rate, CFR)
- Productivity lift from AI tools

<!-- --8<-- [end:example]-->
