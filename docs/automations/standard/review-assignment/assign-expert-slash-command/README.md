---
title: gitStream Automation - Auto-assign Reviewers Using a Slash Command.
description: Automatically Auto-assign reviewers using a slash command.
---
# Auto-assign Reviewers Using a Slash Command

<!-- --8<-- [start:example]-->
Automatically Auto-assign reviewers using a slash command.

![Review Auto-assign Slash Command](/automations/standard/slash-commands/review-auto-assign-slash-command/review-auto-assign-slash-command.png)

!!! info "Configuration Description"

**Conditions (all must be true):**

* The PR has a comment that contains the term '/gitstream auto-assign'.

**Automation Actions:**

* Dispatch the Github action workflow mentioned in the term.

<div class="automationExample" markdown="1">
!!! example "Auto-assign Reviewers Using a Slash Command"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/slash-commands/review-auto-assign-slash-command/review_auto_assign_slash_command.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/slash-commands/review-auto-assign-slash-command/review_auto_assign_slash_command.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

