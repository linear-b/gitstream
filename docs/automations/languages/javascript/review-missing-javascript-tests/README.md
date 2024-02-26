---
title: Automation - Review Missing JavaScript Tests
description: Automatically request changes for JavaScript PRs that lack test files.
category: [javascript]
---
# Review Missing JavaScript Tests

<!-- --8<-- [start:example]-->

Request changes for JavaScript PRs that lack test files.

![Review Missing JavaScript Tests](/automations/languages/javascript/review-missing-javascript-tests/review-missing-javascript-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates one or more new JavaScript files
    * The PR lacks new test files that match the name of the JavaScript files

    Automation Actions:

    * Apply a red `missing-tests` label
    * Request changes and post a comment listing the files that need tests.

<div class="automationExample" markdown="1">
!!! example "Review Missing JavaScript Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/javascript/review_missing_javascript_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/javascript/review_missing_javascript_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
