---
title: Automation - Approve Python Log Output Changes
description: Automatically approve PRs that only affect Python log output.
category: [python, efficiency]
---
# Approve Python Log Output Changes

<!-- --8<-- [start:example]-->
Approve changes to Python files that only affect lines of code that invoke a specified logging object.

![approve Python log output](/automations/languages/approve-log-output.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * All files must end in .py
    * The changes only affect lines of code that invoke a `logger` object. This should be customized to your environment.

    Automation Actions:

    * Apply a `log-output-only` label
    * Approve the PR
    * Post a comment explaining that the change only affects logging output.

!!! example "Approve Python Log Output Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_python_log_output.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_python_log_output.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
