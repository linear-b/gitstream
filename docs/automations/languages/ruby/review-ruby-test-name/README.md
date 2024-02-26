---
title: Automation - Review Ruby Test Name
description: Automatically request changes for Ruby test files that fail to match the required naming convention.
category: [ruby]
---
# Review Ruby Test Name

<!-- --8<-- [start:example]-->

Automatically request changes for Ruby test files that fail to match the required naming convention.

![Review Ruby Test Name](/automations/languages/ruby/review-ruby-test-name/review-ruby-test-name.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR creates one or more new Ruby test files
    * The Ruby test fails to match the required naming convention.

    Automation Actions:

    * Request changes and post a comment that explains the Ruby test name requirements.

<div class="automationExample" markdown="1">
!!! example "Review Ruby Test Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/ruby/review_ruby_test_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/ruby/review_ruby_test_name.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
