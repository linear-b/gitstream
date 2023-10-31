---
title: Automation - Review Missing Ruby Tests
description: Automatically request changes for Ruby classes that lack test files in a PR.
---
# Review Missing Golang Tests

<!-- --8<-- [start:example]-->

Request changes for Ruby files that lack test files.

![Review Missing Ruby Tests](/automations/standard/review-missing-ruby-tests/review-missing-ruby-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):
    
    * The PR creates one or more new Ruby files
    * The PR lacks new test files that match the name of the Ruby files
    
    Automation Actions:
    
    * The PR lacks new test files that match the name of the Ruby files
    *  Apply a red missing-tests label

<div class="automationExample" markdown="1">
!!! example "Review Missing Ruby Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/ruby/review-missing-ruby-tests/review_missing_ruby_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/ruby/review-missing-ruby-tests/review_missing_ruby_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->