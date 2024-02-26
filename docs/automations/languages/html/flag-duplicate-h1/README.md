---
title: Automation - Flag Duplicate H1
description: Automatically request changes when PRs contain HTML files that have more than one H1 heading.
category: [html, css, quality]
---
# Flag Duplicate H1

<!-- --8<-- [start:example]-->

Automatically request changes when PRs contain HTML files that have more than one H1 heading.

![Flag Duplicate H1](/automations/languages/html/flag-duplicate-h1/flag-duplicate-h1.png)
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains more than one H1 heading in an HTML file.

    Automation Actions:

    * Post a comment requesting the author to reduce H1 headings to one per file.

<div class="automationExample" markdown="1">
!!! example "Flag Duplicate H1"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/html/flag_duplicate_h1.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/html/flag_duplicate_h1.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
