---
title: Automation - Enforce HTML Title Length Requirements
description: Automatically request changes for a title that has less than 30 characters or exceeds 60 characters.
---
# Enforce HTML Title Length Requirements

<!-- --8<-- [start:example]-->

Request changes for a title that has less than 30 characters or exceeds 60 characters.

![Enforce HTML Title Length Requirements](/automations/standard/html/enforce-html-title-length/enforce-html-title-length.png)
!!! info "Configuration Description"

    Conditions (all must be true):
    
    * Creates or modifies an HTML file.
    * Adds an image without writing an alt attribute.
    
    Automation Actions:
    
    * Add a “missing alt attribute” label
    * Request changes and post a comment asking the author to add alt attributes to images.

<div class="automationExample" markdown="1">
!!! example "Enforce HTML Title Length Requirements"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/html/enforce-html-title-length/enforce_html_title_length.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/html/enforce-html-title-length/enforce_html_title_length.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->