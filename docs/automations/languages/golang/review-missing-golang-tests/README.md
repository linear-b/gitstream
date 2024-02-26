---
title: Automation - Review Missing Golang Tests
description: Automatically request changes for Golang PRs that are missing tests.
category: [go, quality, review]
---
# Review Missing Golang Tests

<!-- --8<-- [start:example]-->

Automatically request changes for Golang PRs that are missing tests.

![Review Missing Golang Tests](/automations/languages/golang/review-missing-golang-tests/review-missing-golang-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates one or more new Golang files
    * The PR lacks new test files that match the name of the Golang files

    Automation Actions:

    * The PR lacks new test files that match the name of the Golang files
    *  Apply a red missing-tests label

<div class="automationExample" markdown="1">
!!! example "Review Missing Golang Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/golang/review_missing_golang_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/golang/review_missing_golang_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
