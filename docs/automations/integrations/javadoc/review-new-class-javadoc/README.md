---
title: Automation - Enforce Javadoc Requirements for New Classes
description: Automatically request changes for PRs that fail to meet Javadoc requirements.
category: [docs, java]
---
# Enforce Javadoc Requirements for New Classes

Automatically request changes when someone creates a new Java class that lacks Javadoc content.

<div class="automationImage" markdown="1">
![Enforce Javadoc Requirements for New Classes](/automations/integrations/javadoc/review-new-class-javadoc/review-new-class-javadoc.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR creates a new Java class.
    * The PR lacks Javadoc content.

    Automation Actions:

    * Apply a `⚠️ Missing Javadoc` label.
    * Request changes, and post a comment explaining that Javadoc is required

</div>
<div class="automationExample" markdown="1">
!!! example "Review Javadoc Requirements for New Classes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/javadoc/review_new_class_javadoc.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/javadoc/review_new_class_javadoc.cm){ .md-button }
      </span>
    </div>
</div>
