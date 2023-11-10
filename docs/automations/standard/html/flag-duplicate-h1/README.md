---
title: Automation - Flag Duplicate H1
description: Automatically request changes for HTML files that have duplicate H1 headings.
---
# Flag Duplicate H1

<!-- --8<-- [start:example]-->

Request changes for HTML files that have duplicate H1 headings.

![Flag Duplicate H1](/automations/standard/html/flag-duplicate-h1/flag-duplicate-h1.png)
!!! info "Configuration Description"

    Conditions (all must be true):
    
    * Creates or modifies an HTML file.
    * Creates more than one H1 headings.
    
    Automation Actions:
    
    * Post a comment requesting the author to create only one H1 for the main heading.

<div class="automationExample" markdown="1">
!!! example "Flag Duplicate H1"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/html/flag-duplicate-h1/flag_duplicate_h1.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/html/flag-duplicate-h1/flag_duplicate_h1.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->