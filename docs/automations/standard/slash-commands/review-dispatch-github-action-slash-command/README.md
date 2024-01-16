---
title: gitStream Automation - Dispatch GitHub Actions Based on a Slash Command
description: Automatically dispatch gitHub actions workflow based on a slash command.
---
# Review Slash Commands and Dispatch GitHub Actions

<!-- --8<-- [start:example]-->
Automatically dispatch gitHub actions workflow based on a slash command.

![Review GitHub Actions Slash Command](/automations/standard/slash-commands/review-dispatch-github-action-slash-command/review-dispatch-github-action-slash-command.png)

!!! info "Configuration Description"

**Conditions (all must be true):**

* The PR has a comment that contains the term '/gitstream dispatch <action-name>'.

**Automation Actions:**

* Dispatch the Github action workflow mentioned in the term.

<div class="automationExample" markdown="1">
!!! example "Review Slash Commands and Dispatch GitHub Actions"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/slash-commands/review-dispatch-github-action-slash-command/review_dispatch_github_action_slash_command.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/slash-commands/review-dispatch-github-action-slash-command/review_dispatch_github_action_slash_command.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

