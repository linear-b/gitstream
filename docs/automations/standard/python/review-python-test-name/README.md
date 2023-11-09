---
title: Automation - Review Python Test Name
description: Automatically request changes for Python test files that fail to match the required naming convention.
---
# Review Python Test Name

<!-- --8<-- [start:example]-->

Request changes Python test files that fail to match the required naming convention.

![Review Python Test Name](/automations/standard/python/review-python-test-name/review-python-test-name.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR creates one or more new Python test files
    * The Python test fails to match the required naming convention.
    
    Automation Actions:
    
    * Request changes and post a comment that explains the Python test name requirements.

<div class="automationExample" markdown="1">
!!! example "Review Python Test Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/python/review-python-test-name/review_python_test_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/python/review-python-test-name/review_python_test_name.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->