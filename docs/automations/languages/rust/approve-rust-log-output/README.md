---
title: Automation - Approve Rust Log Output Changes
description: Automatically approve PRs that only change Rust log output.
category: [rust, efficiency]
---
# Approve Rust Log Output Changes

<!-- --8<-- [start:example]-->

Approve changes to Rust files that only affect lines of code that invoke the logging marcos.

![approve Rust log output](/automations/languages/approve-log-output.png)


!!! info "Configuration Description"


    Conditions (all must be true):

    * All files end in `.rs`
    * The changes only affect lines of code that invoke `print`, `println` or `dbg` macros or use the `log` crate macros.

    Automation Actions:

    * Apply a `log-output-only` label
    * Approve the PR
    * Post a comment explaining that the change only affects logging output.

<div class="automationExample" markdown="1">
!!! example "Approve Rust Log Output Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/rust/approve_rust_log_output.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/rust/approve_rust_log_output.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
