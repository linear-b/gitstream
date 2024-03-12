---
title: Automation - Review JavaScript Exceptions
description: Automatically post a comment that requests the author to throw a specific exception.
---
# Review JavaScript Exceptions

<!-- --8<-- [start:example]-->

Post a comment that requests the author to throw a specific exception.

![Review JavaScript Exceptions](/automations/languages/javascript/review-javascript-exceptions/review-javascript-exceptions.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * A JavaScript file is modified.
    * A general exception is thrown. 
   
    Automation Actions:
    
    * Post a comment that requests the author to specify the exception being thrown.

<div class="automationExample" markdown="1">
!!! example "Review JavaScript Exceptions"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/javascript/review_javascript_exceptions.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/javascript/review_javascript_exceptions.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->