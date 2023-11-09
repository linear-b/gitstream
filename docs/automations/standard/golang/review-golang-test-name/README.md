---
title: Automation - Review Golang Test Name
description: Automatically request changes for Golang test files that fail to match the required naming convention.
---
# Review Golang Test Name

<!-- --8<-- [start:example]-->

Request changes Golang test files that fail to match the required naming convention.

![Review Golang Test Name](/automations/standard/golang/review-golang-test-name/review-golang-test-name.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR creates one or more new Golang test files
    * The Golang test fails to match the required naming convention.
    
    Automation Actions:
    
    * Request changes and post a comment that explains the Golang test name requirements.

<div class="automationExample" markdown="1">
!!! example "Review Golang Test Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/golang/review-golang-test-name/review_golang_test_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/golang/review-golang-test-name/review_golang_test_name.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->