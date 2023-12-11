---
title: gitStream Quickstart
description: Build your first gitStream automation in as little as two minutes.
---
# gitStream Quickstart

This page contains common gitStream configurations that are a great place to get started with gitStream. If you haven't already, you'll need to install gitStream to your [GitHub](github-installation.md) or [GitLab](gitlab-installation.md) organization before you can use these automations

## Complete Starter Automation
This starter automation is a great place to start if you're new to gitStream. It includes a handful of non-intrustive automations that can help you begin to adopt a Continuous Merge mindset with gitStream. 

The following example includes workflow automations to do the following:

* Apply color-coded labels that estimate how long it takes to review the PR.
* Recommend the most knowledgeable code experts to review the PR.
* Flag PRs that lack required references to project management tickets.
* Indicate which PRs have unresolved requests for changes.
* Flag PRs that delete files to alert of potential refactoring.
* Automatically approve low-risk PRs to docs, testing, or code formatting.
* Define criteria for when PRs need one or more reviews.

!!! tip "How to use this example."
    This example is a complete gitStream configuration files that you can download directly via the buttons below the examples and upload to the `.cm` directory of your repo. Alternatively, you can copy and paste the individual automations, but make sure you include all required declarations and any related custom expressions from the configuration to ensure everything works properly. 

!!! example "gitStream Starter Automation"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/gitstream_starter.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/gitstream_starter.cm){ .md-button }
      </span>
    </div>

You can find more details about how these automations work here:

* [Approve safe changes](approve-safe-changes/README.md) - Approve documentation, formatting changes, and tests.
* [Provide estimated time to review](provide-estimated-time-to-review/README.md) - Label all PRs with an estimated number of minutes it would take someone to review.
* [Explain Code Experts](standard/explain-code-experts/README.md) - Post a comment that recommends reviewers based on their expertise. 
* [Review sensitive files](standard/review-assignment/review-sensitive-files/README.md) - Define a custom list of files and directories that trigger additional reviews.
* [Additional review for large PRs](additional-review-for-large-pr/README.md) - Require additional reviewers for complex PRs.


## Next Step

For a more detailed list of automations, check out the gitStream [integrations page](integrations/README.md) or [automation library](automations/automation-library.md).