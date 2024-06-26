---
title: Automation - Label Unresolved Review Threads
description: Automatically label PRs when there are unresolved code review comments.
category: [security]
quickstart: true
---
# Label Unresolved Review Threads
Automatically label PRs when there are unresolved code review comments.

<div class="automationImage" markdown="1">
![Label Unresolved Review Threads](/automations/standard/label-management/label-unresolved-threads/label-unresolved-threads.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR has one or more unresolved code review comments.

    Automation Actions:

    * Apply a label that indicates how many unresolved comments the PR has.

</div>
<div class="automationExample" markdown="1">
!!! example "Label Unresolved Review Threads"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/label_unresolved_threads.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/label_unresolved_threads.cm){ .md-button }
      </span>
    </div>
</div>
