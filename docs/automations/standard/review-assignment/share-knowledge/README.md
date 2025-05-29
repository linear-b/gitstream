---
title: Automation - Knowledge Share
description: Automatically distribute PR reviews to increase code expertise.
category: [review]
---
# Knowledge Share

<!-- --8<-- [start:example]-->
Require the reviewer as a previous contributor with code expertise between set thresholds when PR contains `Share Knowledge` label.

![Knowledge Share](/automations/standard/review-assignment/share-knowledge/share-knowledge.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * A `Share Knowledge` label has been applied to the PR

    Automation Actions:

    * Choose a previous contributor between specified expertise thresholds and assign them as a reviewer.
    * Post a comment explaining why this action was taken.

<div class="automationExample" markdown="1">
!!! example "Knowledge Share"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/review-assignment/share_knowledge.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/share_knowledge.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/review-assignment-automation.md::3"
--8<-- "docs/snippets/merge-automation.md:5:"

--8<-- "docs/snippets/automation-footer.md"
