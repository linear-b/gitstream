---
title: gitStream Automation - Enforce godoc for New Golang Classes
description: Enforce godoc requirements for PRs.
---
# Enforce godoc for New Golang Classes

Require godoc for all new Golang classes.


<div class="automationImage" markdown="1">
![Enforce godoc for New Golang Classes](/automations/integrations/godoc/review-new-class/review-new-class.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    
    Conditions (all must be true):

    * The PR creates a new Golang class.
    * The PR lacks godoc content.

    Automation Actions:

    * Request changes and post a comment explaining that godoc is required
    * Apply a yellow `⚠️ Missing godoc` label.


</div>
<div class="automationExample" markdown="1">
!!! example "Enforce godoc for New Golang Classes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/godoc/review_godoc_new_class.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/godoc/review_new_class.cm){ .md-button }
      </span>
    </div>
</div>
