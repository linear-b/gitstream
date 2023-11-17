---
title: Automation - Flag Missing HTML Tags
description: Automatically request changes for HTML files that lack the canonical and robots tag.
---
# Flag Missing HTML Tags

<!-- --8<-- [start:example]-->

Request changes for HTML files that lack the canonical and robots tag.

![Flag Missing HTML Tags](/automations/languages/html/flag-missing-html-tags/flag-missing-html-tags.png)
!!! info "Configuration Description"

    Conditions (all must be true):
    
    * Creates an HTML file
    * The file lacks a canonical tag
    * The file lacks a Robot meta tag
    
    Automation Actions:
    
    * Add a label that says “missing crucial tag”
    * Post a comment asking the user to add crucial tags, canonical and robot. 

<div class="automationExample" markdown="1">
!!! example "Flag Missing HTML Tags"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/html/flag_missing_html_tags.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/html/flag_missing_html_tags.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->