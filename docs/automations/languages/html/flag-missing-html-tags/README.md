---
title: Automation - Flag Missing HTML Tags
description: Automatically request changes for HTML files that lack the canonical and robots tag.
category: [html, css, quality]
---
# Flag Missing HTML Tags

<!-- --8<-- [start:example]-->

Request changes for HTML files that lack the canonical and robots tag.

![Flag Missing HTML Tags](/automations/languages/html/flag-missing-html-tags/flag-missing-html-tags.png)
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains only new HTML files
    * One or more files are missing a canonical tag
    * One or more files are missing a robots meta tag

    Automation Actions:

    * Apply a `⚠️ Missing Required Tag` label.
    * Post a comment asking the user to add required tags.

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
