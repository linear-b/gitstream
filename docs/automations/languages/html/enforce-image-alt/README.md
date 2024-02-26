---
title: Automation - Enforce Image Alt Attributes
description: Automatically request changes for PRs that are missing image alt attributes.
category: [html, css]
---
# Enforce Image Alt Attributes

<!-- --8<-- [start:example]-->

Automatically request changes for PRs HTML files that are missing image alt attributes.

![Enforce Image Alt Attributes](/automations/languages/html/enforce-image-alt/enforce-image-alt.png)
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR adds an image tag to an HTML file.
    * The PR is missing alt attributes for one or more images.

    Automation Actions:

    * Add a `⚠️ Missing alt label` label
    * Request changes and post a comment asking the author to add alt attributes to images.

<div class="automationExample" markdown="1">
!!! example "Enforce Image Alt Attributes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/html/enforce_image_alt.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/html/enforce_image_alt.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
