---
title: Automation - Require Godoc for New Golang Classes
description: Enforce Godoc requirements for PRS that include new Golang classes.
category: [docs, go]
---
# Require Godoc for New Golang Classes
<!-- --8<-- [start:example]-->
Require Godoc for all new Golang classes.


<div class="automationImage" markdown="1">
![Enforce Godoc for New Golang Classes](/automations/integrations/godoc/review-godoc-new-class/review-godoc-new-class.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates a new Golang class.
    * The PR lacks Godoc content.

    Automation Actions:

    * Request changes and post a comment explaining that Godoc is required
    * Apply a yellow `⚠️ Missing Godoc` label.


</div>
<div class="automationExample" markdown="1">
!!! example "Enforce Godoc for New Golang Classes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/godoc/review_godoc_new_class.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/godoc/review_godoc_new_class.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
