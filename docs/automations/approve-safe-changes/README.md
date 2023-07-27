---
title: gitStream Automation - Approve Safe Changes
description: Automatically approve PRs for documentation, formatting, and tests.
---
# Approve Safe Changes

If the PR content only contains one or more of documentation, formatting changes, or tests, automatically approve the PR and apply a safe change label.
<div class="automationImage" style="align:right" markdown="1">![Approve safe changes](approve-safe-changes.png)</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR only contains documentation, tests, or formatting changes.

    Automation Actions:

    * Add a `safe-change` label
    * Approve the PR
    * Post a comment that explains that this is a safe change

</div>



!!! example "Approve Safe Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve-safe-changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve-safe-changes.cm){ .md-button }
      </span>
    </div>

<style>


  </style>
