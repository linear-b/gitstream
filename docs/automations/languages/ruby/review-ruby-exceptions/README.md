---
title: Automation - Review Ruby Exceptions
description: Automatically post a comment that requests the author to throw a specific exception.
---
# Review Ruby Exceptions

<!-- --8<-- [start:example]-->

Post a comment that requests the author to throw a specific exception.

![Review Ruby Exceptions](/automations/languages/ruby/review-ruby-exceptions/review-ruby-exceptions.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * A Ruby file is modified.
    * A general exception is thrown. 
   
    Automation Actions:
    
    * Post a comment that requests the author to specify the exception being thrown.

<div class="automationExample" markdown="1">
!!! example "Review Ruby Exceptions"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/python/review_python_exceptions.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/python/review_python_exceptions.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->