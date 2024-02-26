---
title: Automation - Review Java Input Parameters for Javadoc Changes
description: Notify PR authors to ensure proper Javadoc coverage.
category: [docs, java]
---
# Review Java Input Parameters for Javadoc Changes

If a PR modifies the input parameters for a Java method, but not the associated Javadocs, notify reviewers to check for Javadoc updates.

<div class="automationImage" markdown="1">
![Review Javadoc Input Parameters](/automations/integrations/javadoc/review-javadoc-input-parameters/review-javadoc-input-parameters.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR changes one or more input parameters in Java methods.
        * Note: This may not trigger for methods with annotations, methods that throw exceptions, multi-line method definitions, and other non-standard use cases.
    * The PR lacks changes to ‘@param’ declarations.


    Automation Actions:

    * Post a comment warning the user to review the method’s Javadoc to identify necessary updates.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Javadoc"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/javadoc/review_javadoc_input_parameters.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/javadoc/review_javadoc_input_parameters.cm){ .md-button }
      </span>
    </div>
</div>
