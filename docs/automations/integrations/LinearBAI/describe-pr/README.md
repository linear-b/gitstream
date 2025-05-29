---
title: Automation - Add PR Description Using LinearB's AI
description: Use gitStream's integration with LinearB's AI service to summarize the PR changes.
category: [quality, genai, efficiency, quickstart]
starter_kits: [genai]
quickstart: true
---
# Add PR Description Using LinearB's AI :material-star-circle:

<!-- --8<-- [start:example]-->
Use the [`describe-changes`](/automation-actions/#describe-changes) automation action to automatically generate and append a concise, AI-generated description to a pull request. This ensures that all PRs include meaningful and helpful descriptions, improving review efficiency.

![summarized-pr](/automations/integrations/LinearBAI/describe-pr/LinearB-AI-describe-pr.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or new code has been committed to the PR.

    Automation Actions:

    * Append the AI-generated description to the PR description.

=== "For GitHub"

    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/LinearBAI/describe-pr.cm"
        ```
        <div class="result" markdown>
            <span>
            [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/LinearBAI/describe-pr.cm){ .md-button }
            </span>
        </div>

=== "For GitLab"

    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/LinearBAI/describe-pr-gl.cm"
        ```
        <div class="result" markdown>
            <span>
            [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/LinearBAI/describe-pr-gl.cm){ .md-button }
            </span>
        </div>

=== "For Bitbucket"

    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/LinearBAI/describe-pr-bb.cm"
        ```
        <div class="result" markdown>
            <span>
            [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/LinearBAI/describe-pr-bb.cm){ .md-button }
            </span>
        </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md"

--8<-- "docs/snippets/automation-footer.md"
