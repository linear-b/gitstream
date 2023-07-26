---
title: gitStream Automation - Knowledge Share
description: Automatically distribute PR reviews to increase code expertise.
---
# Knowledge Share
Require the reviewer as a previous contributor with code expertise between set thresholds when PR contains `Share Knowledge` label.

<div class="automationImage" markdown="1">
![Knowledge Share](share-knowledge.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    
    Conditions (all must be true):

    * A `Share Knowledge` label has been applied to the PR

    Automation Actions:

    * Choose a previous contributor between specified expertise thresholds and assign them as a reviewer.
    * Post a comment explaining why this action was taken.

</div>
<div class="automationExample" markdown="1">
!!! example "Knowledge Share"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/share_knowledge.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/share_knowledge.cm){ .md-button }
      </span>
    </div>
</div>