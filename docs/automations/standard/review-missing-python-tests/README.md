---
title: Automation - Review Missing Python Tests
description: Automatically request changes for Python classes that lack test files in a PR.
---
# Review Missing Python Tests

<!-- --8<-- [start:example]-->

Request changes for Python files that lack test files.

![Review Missing Python Tests](/automations/standard/review-missing-python-tests/review-missing-python-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR creates one or more new Python files
    * The PR lacks new test files that match the name of the Python files
    
    Automation Actions:
    
    * The PR lacks new test files that match the name of the Python files
    *  Apply a red missing-tests label

<div class="automationExample" markdown="1">
!!! example "Review Missing Python Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/python/review-missing-python-tests/review_missing_python_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/python/review-missing-python-tests/review_missing_python_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->