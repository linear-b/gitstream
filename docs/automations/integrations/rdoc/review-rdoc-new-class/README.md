---
title: Automation - Enforce RDoc for New Ruby Classes
description: Enforce RDoc requirements for new Ruby code.
category: [quality, ruby]
---
# Enforce RDoc for New Ruby Classes

<!-- --8<-- [start:example]-->
Require RDoc for all new Ruby classes.


![Enforce RDoc for New Ruby Classes](/automations/integrations/rdoc/review-rdoc-new-class/review-rdoc-new-class.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates a new Ruby class.
    * The PR lacks RDoc content.

    Automation Actions:

    * Request changes and post a comment explaining that RDoc is required
    * Apply a yellow `⚠️ Missing RDoc` label.


<div class="automationExample" markdown="1">
!!! example "Enforce RDoc for New Ruby Classes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_rdoc_new_class.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_rdoc_new_class.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
