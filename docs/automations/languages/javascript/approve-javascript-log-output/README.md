---
title: Automation - Approve JavaScript Log Output Changes
description: Automatically approve PRs that only change JavaScript log output.
category: [javascript, efficiency]
---
# Approve JavaScript Log Output Changes

<!-- --8<-- [start:example]-->
Approve changes to JavaScript files that only affect lines of code that invoke the console.log() method.

![approve JavaScript log output](/automations/languages/approve-log-output.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * All files must end in .js or .ts
    * The changes only affect lines of code that invoke console.log()

    Automation Actions:

    * Applies a `log-output-only` label
    * Approves the PR
    * Posts a comment explaining that the change only affects logging output.

!!! example "Approve JavaScript Log Output Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_javascript_log_output.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_javascript_log_output.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
