---
title: Automation - Review Missing JavaScript Tests
description: Automatically request changes for JavaScript classes that lack test files in a PR.
---
# Review Missing JavaScript Tests

<!-- --8<-- [start:example]-->

Request changes for JavaScript files that lack test files.

![Review Missing JavaScript Tests](/automations/standard/review-missing-javascript-tests/review-missing-javascipt-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR creates one or more new JavaScript files
    * The PR lacks new test files that match the name of the JavaScript files
    
    Automation Actions:
    
    * The PR lacks new test files that match the name of the JavaScript files
    *  Apply a red missing-tests label

<div class="automationExample" markdown="1">
!!! example "Review Missing JavaScript Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/javascript/review-missing-javascript-tests/review_missing_javascript_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/javascript/review-missing-javascript-tests/review_missing_javascript_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->