---
title: gitStream Automation - Enforce Pydoc for New Python Classes
description: Enforce Pydoc requirements for PRs.
---
# Enforce Pydoc for New Python Classes

<!-- --8<-- [start:example]-->
Require Pydoc for all new Python classes.



![Enforce Pydoc for New Python Classes](/automations/integrations/pydoc/review-pydoc-new-class/review-pydoc-new-class.png)


!!! info "Configuration Description"
    
    Conditions (all must be true):

    * The PR creates a new Python class.
    * The PR lacks Pydoc content.

    Automation Actions:

    * Request changes and post a comment explaining that Pydoc is required
    * Apply a yellow `⚠️ Missing Pydoc` label.


<div class="automationExample" markdown="1">
!!! example "Enforce Pydoc for New Python Classes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/pydoc/review_pydoc_new_class.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/pydoc/review_pydoc_new_class.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
