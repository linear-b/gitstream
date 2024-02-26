---
title: Automation - Review Jit Ignore and Accept
description: Automatically notify your security team when someone ignores Jit vulnerabilities.
category: [security, jit]
---
# Review Jit Ignore and Accept
Notify your Security team when someone ignores a Jit vulnerability report and accepts the risk.

<div class="automationImage" markdown="1">
![Label Jit Alerts](/automations/integrations/jit/review-jit-ignore-accept/review-jit-ignore-accept.png)
</div>
<div class="automationDescription" markdown="1">

!!! info "Configuration Description"
    Conditions (all must be true):

    * Someone [ignores and accepts](https://docs.jit.io/docs/ongoing-monitoring-of-pull-requests#the-developer-addresses-the-finding) a Jit finding

    Automation Actions:

    * Request review from the organization’s security team.
    * Label the PR to indicate someone accepted the risk of a Jit security alert.
    * Post a comment explaining why this action was taken.
</div>
<div class="automationExample" markdown="1">
!!! example "Review Jit Ignore and Accept"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jit/review_jit_ignore_accept.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jit/review_jit_ignore_accept.cm){ .md-button }
      </span>
    </div>
</div>
