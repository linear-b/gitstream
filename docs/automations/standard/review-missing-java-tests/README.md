---
title: Automation - Review Missing Java Tests
description: Automatically request changes for Java classes that lack test files in a PR.
---
# Review Missing Java Tests

<!-- --8<-- [start:example]-->

Request changes for Java files that lack test files.

![Review Missing Java Tests](/automations/standard/review-missing-java-tests/review-missing-java-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR creates one or more new Java files
    * The PR lacks new test files that match the name of the Java files
    
    Automation Actions:
    
    * The PR lacks new test files that match the name of the Java files
    *  Apply a red missing-tests label

<div class="automationExample" markdown="1">
!!! example "Review Missing Java Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/java/review-missing-java-tests/review_missing_java_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/java/review-missing-java-tests/review_missing_java_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->