---
title: Automation - Approve JavaScript Formatting Changes
description: Automatically approve PRs that only change JavaScript formatting.
category: [javascript, efficiency]
---
# Approve JavaScript Formatting Changes

<!-- --8<-- [start:example]-->
Approve PRs that only contain formatting changes to JavaScript or TypeScript files.

<div class="automationImage" style="align:right" markdown="1">
![Approve JavaScript formatting changes](/automations/languages/javascript/approve-javascript-formatting-change/approve-javascript-formatting-change.png)
</div>

<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * All of the files end in `.js` or `.ts`
    * All changes are non-functional

    Automation Actions:

    * Approve the PR
    * Apply a `code-formatting` label.
    * Post a comment that explains the automation.
</div>

!!! example "Approve JavaScript Formatting Change"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_javascript_formatting_change.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_javascript_formatting_change.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
