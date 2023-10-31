---
title: Automation - Review Java Test Name
description: Automatically request changes for Java test files that fail to match the required naming convention.
---
# Review Java Test Name

<!-- --8<-- [start:example]-->

Request changes Java test files that fail to match the required naming convention.

![Review Java Test Name](/automations/standard/review-java-test-name/review-java-test-name.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR creates one or more new Java test files
    * The Java test fails to match the required naming convention.
    
    Automation Actions:
    
    * Request changes and post a comment that explains the Java test name requirements.

<div class="automationExample" markdown="1">
!!! example "Review Java Test Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/java/review-java-test-name/review_java_test_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/java/review-java-test-name/review_java_test_name.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->