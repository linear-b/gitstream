---
title: Automation - Approve Golang Log Output Changes
description: Automatically approve PRs that only change Golang log output.
---
# Approve Golang Log Output Changes

<!-- --8<-- [start:example]-->

Approve changes to Golang files that only affect lines of code that invoke the logger object.

![approve Golang log output](/automations/standard/approve-ruby-log-output/approve-golang-log-output.png)


!!! info "Configuration Description"


    Conditions (all must be true):
    
    * All files must end in .rb
    * The changes only affect lines of code that invoke logger object.
    
    Automation Actions:
    
    * Applies a `log-output-only` label
    * Approves the PR
    * Posts a comment explaining that the change only affects logging output.

<div class="automationExample" markdown="1">
!!! example "Approve Golang Log Output Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/approve-golang-log-output/approve_golang_log_output.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/approve-golang-log-output/approve_golang_log_output.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->