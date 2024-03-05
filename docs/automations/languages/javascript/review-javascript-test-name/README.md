---
title: Automation - Review JavaScript Test Name
description: Automatically request changes for JavaScript test files that fail to match the required naming convention.
category: [javascript]
---
# Review JavaScript Test Name

<!-- --8<-- [start:example]-->

Automatically request changes for JavaScript test files that fail to match the required naming convention.

![Review JavaScript Test Name](/automations/languages/javascript/review-javascript-test-name/review-javascript-test-name.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates one or more new JavaScript test files
    * The JavaScript test fails to match the required naming convention.

    Automation Actions:

    * Request changes and post a comment that explains the JavaScript test name requirements.

<div class="automationExample" markdown="1">
!!! example "Review JavaScript Test Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/javascript/review_javascript_test_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/javascript/review_javascript_test_name.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
