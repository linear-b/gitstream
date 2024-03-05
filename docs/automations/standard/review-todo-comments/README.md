---
title: Automation - Review TODO Comments
description: Automatically request changes for a PR that contains a TODO statement.
category: [review]
---
# Review TODO Comments

<!-- --8<-- [start:example]-->

Request changes for a PR that contains a TODO statement.

![Review TODO Comments](/automations/standard/review-todo-comments/review-todo-comments.png)
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR contains a TODO statement

    Automation Actions:

    * Request changes and post a comment explaining why.

<div class="automationExample" markdown="1">
!!! example "Review TODO Comments"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/review-todo-comments/review_todo_comments.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-todo-comments/review_todo_comments.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
