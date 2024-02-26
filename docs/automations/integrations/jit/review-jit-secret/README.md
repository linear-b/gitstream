---
title: Automation - Review Jit Secret Detection
description: Automatically block PRs that contain secrets.
category: [security, jit]
---
# Review Jit Secret Detection
Close PRs where Jit detects a secret and post a comment explaining steps to remedy the situation.

<div class="automationImage" markdown="1">
![Label Jit Alerts](/automations/integrations/jit/review-jit-secret/review-jit-secret.png)
</div>
<div class="automationDescription" markdown="1">

!!! info "Configuration Description"
    Conditions (all must be true):

    * Jit detects a secret in the PR.

    Automation Actions:

    * Close the PR
    * Post a comment explaining why this action was taken and to outline the necessary steps to remedy the situation.
</div>
<div class="automationExample" markdown="1">
!!! example "Review Jit Security Control"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jit/review_jit_secret.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jit/review_jit_secret.cm){ .md-button }
      </span>
    </div>
</div>
