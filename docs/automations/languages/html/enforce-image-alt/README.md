---
title: Automation - Enforce Image Alt Attributes
description: Automatically request changes for HTML files that add images but lack the alt attribute.
---
# Enforce Image Alt Attributes

<!-- --8<-- [start:example]-->

Request changes for HTML files that add images but lack the alt attribute.

![Enforce Image Alt Attributes](/automations/languages/html/enforce-image-alt/enforce-image-alt.png)
!!! info "Configuration Description"

    Conditions (all must be true):
    
    * Creates or modifies an HTML file.
    * Adds an image without writing an alt attribute.
    
    Automation Actions:
    
    * Add a “missing alt attribute” label
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