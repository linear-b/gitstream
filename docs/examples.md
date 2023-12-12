---
title: gitStream Quickstart
description: Build your first gitStream automation in as little as two minutes.
---
# gitStream Quickstart

This page contains common gitStream configurations that are a great place to begin adopting a continuous merge mindset with gitStream. If you haven't already, you'll need to install gitStream to your [GitHub](github-installation.md) or [GitLab](gitlab-installation.md) organization before you can use these automations



!!! tip "Build your first gitStream automation in as little as two minutes."
    These example are complete gitStream configuration files that you can download directly via the buttons below the examples and upload to the `.cm` directory of your repo. Alternatively, you can copy and paste the individual automations, but make sure you include all required declarations and any related custom expressions from the configuration to ensure everything works properly. 

## Improve PR Context with Label Automation

The following example includes workflow automations to do the following:

* Apply color-coded labels that [estimate how long it takes to review the PR](automations/provide-estimated-time-to-review/README.md).
* Recommend the most knowledgeable [code experts](automations/standard/explain-code-experts/README.md) to review the PR.
* Flag PRs that lack required references to [project management tickets](automations/integrations/jira/label-missing-jira-info/README.md), have [unresolved requests](automations/standard/label-management/label-unresolved-threads/README.md) for changes, or [delete code](automations/label-deleted-files/README.md).

!!! example "Label Management with gitStream"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label_automation.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label_automation.cm){ .md-button }
      </span>
    </div>



## Automatically Route PR Reviews

* Automatically approve low-risk PRs to docs, testing, or code formatting.
* Define criteria for when PRs need one or more reviews.

!! example "Review Routing with gitStream"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/review_routing.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review_routing.cm){ .md-button }
      </span>
    </div>

You can find more details about how these automations work here:

* [Approve safe changes](automations/approve-safe-changes/README.md) - Approve documentation, formatting changes, and tests.
* [Review sensitive files](automations/assign-reviewers-by-directory/README.md) - Define a custom list of files and directories that trigger additional reviews.
* [Additional review for large PRs](automations/additional-review-for-large-pr/README.md) - Require additional reviewers for complex PRs.


## Next Step

For a more detailed list of automations, check out the gitStream [integrations page](integrations/README.md) or [automation library](automations/automation-library.md).