---
title: Automation - Enforce HTML Title Length Requirements
description: Automatically request changes for `<title>` tags that don't comply with best practices.
category: [html, css]
---
# Enforce HTML Title Length Requirements

<!-- --8<-- [start:example]-->

Automatically request changes for `<title>` tags that don't comply with best practices.

![Enforce HTML Title Length Requirements](/automations/languages/html/enforce-html-title-length/enforce-html-title-length.png)
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR adds a `<title>` tag that is less than 30 or greater than 90 characters.

    Automation Actions:

    * Request changes and post a comment asking the author to modify the title.

<div class="automationExample" markdown="1">
!!! example "Enforce HTML Title Length Requirements"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/html/enforce_html_title_length.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/html/enforce_html_title_length.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
