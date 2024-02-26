---
title: Automation - Label PRs by Language
description: Automatically detect which programming languages are contained in PRs and automatically label the PRs appropriately.
category: [review]
---
# Label PRs by Language

<!-- --8<-- [start:example]-->
Automatically detect which programming languages are contained in PRs and automatically label the PRs appropriately.

![Label PRs by Language](/automations/standard/label-management/label-prs-by-language/label-prs-by-language.png)
!!! info "Configuration Description"

    Conditions (all must be true):

    * A PR is created or updated.

    Automation Actions:

    * Label the PR for each programming language that is included.

!!! example "Label PRs by Language"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/label-management/label_prs_by_language.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/label-management/label_prs_by_language.cm){ .md-button }
      </span>
    </div>

<!-- --8<-- [end:example]-->
