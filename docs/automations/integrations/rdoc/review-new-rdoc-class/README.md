---
title: gitStream Automation - Enforce Rdoc for New Ruby Classes
description: Enforce Rdoc requirements for PRs.
---
# Enforce Rdoc for New Ruby Classes

Require Rdoc for all new Ruby classes.

<!-- --8<-- [start:example]-->

<div class="automationImage" markdown="1">
![Enforce Rdoc for New Ruby Classes](/automations/integrations/rdoc/review-new-rdoc-class/review-new-rdoc-class.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    
    Conditions (all must be true):

    * The PR creates a new Ruby class.
    * The PR lacks Rdoc content.

    Automation Actions:

    * Request changes and post a comment explaining that Rdoc is required
    * Apply a yellow `⚠️ Missing Rdoc` label.


</div>
<div class="automationExample" markdown="1">
!!! example "Enforce Rdoc for New Ruby Classes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/rdoc/review_new_rdoc_class.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/rdoc/review_new_rdoc_class.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->