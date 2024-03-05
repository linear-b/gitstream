---
title: Automation - Approve Java Log Output Changes
description: Automatically approve PRs that only change Java log output.
category: [java, efficiency]
---
# Approve Java Log Output Changes

<!-- --8<-- [start:example]-->

Approve changes to Java files that only affect lines of code that invoke the logger object.

![approve Java log output](/automations/languages/approve-log-output.png)


!!! info "Configuration Description"


    Conditions (all must be true):

    * All files end in .java
    * The changes only affect lines of code that invoke logger object.

    Automation Actions:

    * Apply a `log-output-only` label
    * Approve the PR
    * Post a comment explaining that the change only affects logging output.

<div class="automationExample" markdown="1">
!!! example "Approve Java Log Output Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/java/approve_java_log_output.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/java/approve_java_log_output.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
