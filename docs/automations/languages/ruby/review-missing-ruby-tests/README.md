---
title: Automation - Review Missing Ruby Tests
description: Automatically request changes for Ruby PRs that lack test files.
category: [ruby]
---
# Review Missing Ruby Tests

<!-- --8<-- [start:example]-->

Automatically request changes for Ruby PRs that lack test files.

![Review Missing Ruby Tests](/automations/languages/ruby/review-missing-ruby-tests/review-missing-ruby-tests.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates one or more new Ruby files
    * The PR lacks new test files that match the name of the Ruby files

    Automation Actions:

    * Apply a red missing-tests label
    * Request changes and post a comment listing the files that need tests.

<div class="automationExample" markdown="1">
!!! example "Review Missing Ruby Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/ruby/review_missing_ruby_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/ruby/review_missing_ruby_tests.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
