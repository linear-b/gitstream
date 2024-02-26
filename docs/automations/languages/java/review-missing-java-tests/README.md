---
title: Automation - Review Missing Java Tests
description: Automatically request changes for Java PRs that lack test files.
category: [java, review, quality]
---
# Review Missing Java Tests

<!-- --8<-- [start:example]-->

Automatically request changes for Java PRs that lack test files.

![Review Missing Java Tests](/automations/languages/java/review-missing-java-tests/review-missing-java-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates one or more new Java files
    * The PR lacks new test files that match the name of the Java files

    Automation Actions:

    * Apply a red missing-tests label
    * Request changes and post a comment listing the files that need tests.

<div class="automationExample" markdown="1">
!!! example "Review Missing Java Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/java/review_missing_java_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/java/review_missing_java_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
