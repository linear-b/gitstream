---
title: gitStream Automation - Skip GitHub Action Checks for Urgent PRs.
description: Automatically unblock CI pipelines for urgent PRs that need to be merged quickly.
---
# Skip GitHub Action Checks for Urgent PRs
<!-- --8<-- [start:example]-->
Automatically unblock CI pipelines for urgent PRs that need to be merged quickly.

![Skip GitHub Action Checks for Urgent PRs](/automations/integrations/github-actions/skip-github-action-checks-for-urgent-prs/skip-github-action-checks-for-urgent-prs.png)

!!! info "Configuration Description"

**Conditions (all must be true):**

* A PR has a label applied to it that says “urgent” or someone posts `/gitstream urgent` as a comment.

**Automation Actions:**

* Skip a predetermined list of GitHub Actions

<div class="automationExample" markdown="1">
!!! example "Skip GitHub Action Checks for Urgent PRs"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/github-actions/skip-github-action-checks-for-urgent-prs/skip_github_action_checks_for_urgent_prs.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/github-actions/skip-github-action-checks-for-urgent-prs/skip_github_action_checks_for_urgent_prs.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->

