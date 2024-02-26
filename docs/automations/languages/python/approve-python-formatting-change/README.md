---
title: Automation - Approve Python Formatting Changes
description: Automatically approve PRs that only contain Python formatting changes.
category: [python, efficiency]
---
# Approve Python Formatting Changes

<!-- --8<-- [start:example]-->
Approve PRs that only contain formatting changes to Python files.

<div class="automationImage" style="align:right" markdown="1">
![Approve Python Formatting Changes](/automations/languages/python/approve-python-formatting-change/approve_python_formatting_change.png)
</div>

<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * All of the files end in `.py`.
    * All changes are non-functional

    Automation Actions:

    * Approve the PR
    * Apply a `code-formatting` label.
    * Post a comment that explains the automation.
</div>

!!! example "Approve Python Formatting Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_python_formatting_change.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_python_formatting_change.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
