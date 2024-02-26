---
title: Automation - Summarize Language Changes
description: Automatically post a comment that summarizes which programming languages are contained in PRs.
category: [review]
---
# Summarize Language Changes

<!-- --8<-- [start:example]-->

Post a comment that summarizes which programming languages are contained in PRs.

<div class="automationImage" markdown="1">
![Summarize Language Changes](/automations/standard/summarize-language-changes/summarize-language-changes.png)
</div>

<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR is created.

    Automation Actions:

    * Post a comment containing a table that shows the percent of total changes for each programming language present in the PR.
</div>

<div class="automationExample" markdown="1">
!!! example "Summarize Language Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/summarize_language_changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/summarize_language_changes.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"
