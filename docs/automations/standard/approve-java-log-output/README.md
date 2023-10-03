---
title: Automation - Approve Java Log Output Changes
description: Automatically approve PRs that only change Java log output.
---
# Approve Java Log Output Changes

<!-- --8<-- [start:example]-->

Approve changes to Java files that only affect lines of code that invoke the logger object.

![approve Java log output](/automations/standard/approve-java-log-output/approve-java-log-output.png)


!!! info "Configuration Description"


    Conditions (all must be true):
    
    * All files must end in .java
    * The changes only affect lines of code that invoke logger object.
    
    Automation Actions:
    
    * Applies a `log-output-only` label
    * Approves the PR
    * Posts a comment explaining that the change only affects logging output.

<div class="automationExample" markdown="1">
!!! example "Approve Java Log Output Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/approve-java-log-output/approve_java_log_output.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/approve-java-log-output/approve_java_log_output.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->