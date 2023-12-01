---
title: Automation - Summarize Language Changes
description: Automatically post a comment that summarizes which programming languages are contained in PRs..
---
# Summarize Language Changes

<!-- --8<-- [start:example]-->

Post a comment that summarizes which programming languages are contained in PRs.

![Summarize Language Changes](/automations/standard/summarize-language-changes/summarize-language-changes.png)
!!! info "Configuration Description"

    Conditions (all must be true):
    
    * A PR is created or has new commits pushed to it.
    
    Automation Actions:
    
    * Post a comment that shows the percent of total changes for each programming language present in the PR.

<div class="automationExample" markdown="1">
!!! example "Summarize Language Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/summarize-language-changes/summarize_language_changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/summarize-language-changes/summarize_language_changes.cm){ .md-button }
      </span>
    </div>

## Additional Resources

**Related Automations**:

--8<-- "docs/automations/standard/label-prs-by-language/README.md:example"

<!-- --8<-- [end:example]-->