---
title: Automation - Review Missing Python Tests
description: Automatically request changes for Python PRs that lack test files.
category: [python]
---
# Review Missing Python Tests

<!-- --8<-- [start:example]-->

Automatically request changes for Python PRs that lack test files.

![Review Missing Python Tests](/automations/languages/python/review-missing-python-tests/review-missing-python-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates one or more new Python files
    * The PR lacks new test files that match the name of the Python files

    Automation Actions:

    * Apply a red missing-tests label
    * Request changes and post a comment listing the files that need tests.

<div class="automationExample" markdown="1">
!!! example "Review Missing Python Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/python/review_missing_python_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/python/review_missing_python_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
