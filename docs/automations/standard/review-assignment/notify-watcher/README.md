---
title: Automation - Notify Watchlist
description: Automatically notify code reviewers based on a resource watchlist.
category: [review, quality]
---
# Notify Watchlist

<!-- --8<-- [start:example]-->
Automatically notify code reviewers based on a resource watchlist.

![Notify Watchlist](/automations/standard/review-assignment/notify-watcher/notify-watcher.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR modifies any files listed under the `watchers` custom expression.

    Automation Actions:

    * Post a comment that notifies the responsible team or individual of the changes.

<div class="automationExample" markdown="1">
!!! example "Notify Watcher"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/review-assignment/notify_watcher.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/notify_watcher.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md"

--8<-- "docs/snippets/automation-footer.md"
