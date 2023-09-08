---
title: gitStream Quickstart Examples
description: Build your first gitStream automation in as little as two minutes.
---
# gitStream Quickstart Examples

This page contains common gitStream configurations that are a great place to get started with gitStream. For a more detailed list, check out the [gitStream automation library](automations/automation-library.md).

!!! tip "How to use these examples."
    These examples are all complete gitStream configuration files that you can download directly via the buttons below the examples and upload to the `.cm` directory of your repo. Alternatively, you can copy and paste the individual automations, but make sure you include all required declarations and any related custom expressions from the configurations to ensure they work properly. 

## Suggest Code Reviewers

When someone applies a `suggest-reviewers` label to a PR, use codeExperts to assign recommended reviewers and post a comment with the `explainCodeExperts` automation action.

[More details here.](automations/standard/explain-code-experts/README.md)

!!! example "Suggest Code Reviewers"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/explain_code_experts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/explain_code_experts.cm){ .md-button }
      </span>
    </div>
    
## Request Changes for Deprecated Components

Request changes when a PR includes one or more deprecated components.

[More details here.](automations/change-deprecated-components/README.md)

!!! example "Change Deprecated Components"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/change_deprecated_components.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/change_deprecated_components.cm){ .md-button }
      </span>
    </div>

## Review Sensitive Files
Require sensitive files from a pre-determined list to be reviewed by a specific team.

[More details here](automations/standard/review-assignment/review-sensitive-files/README.md)

!!! example "Review Sensitive Files"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/review-assignment/review_sensitive_files.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/review-assignment/review_sensitive_files.cm){ .md-button }
      </span>
    </div>

## Approve Safe Changes

Automatically approve documentation, formatting, and test changes.

[More details here.](automations/approve-safe-changes/README.md)

!!! example "Approve Safe Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve-safe-changes.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve-safe-changes.cm){ .md-button }
      </span>
    </div>

## Provide Estimated Time to Review
Label all PRs with an estimated number of minutes it would take someone to review. 

[More details here.](automations/provide-estimated-time-to-review/README.md)
!!! example "Provide Estimated Time to Review"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/provide_estimated_time_to_review.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/provide_estimated_time_to_review.cm){ .md-button }
      </span>
    </div>

## Label Missing Jira Info
Label PRs that don't reference a Jira ticket in the title or description. This uses regex to detect Jira ticket formats in the title (e.g. ABC-1234), and URLs to Jira tickets in the description.

[More details here.](automations/integrations/jira/label-missing-jira-info/README.md)

!!! example "Label Missing Jira Info"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jira/label_missing_jira_info.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jira/label_missing_jira_info.cm){ .md-button }
      </span>
    </div>
## More examples

!!! tip "Check out the gitStream automation library."
    [Click here](automations/automation-library.md) to find a more extensive list of automation examples.
