---
title: Automation - Request Screenshot
description: Automatically ensure PRs contain screenshots to help illustrate the changes.
category: [quality, review]
---
# Request Screenshot
If the PR lacks an image file, or link to an image in the description, apply a `no-screenshot` label and post a comment to request a screenshot. If the PR author updates the description, gitStream will remove the label.

<div class="automationImage" style="align:right" markdown="1">
![Request Screenshot](request-screenshot.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR description lacks an image or link to an image.

    Automation Actions:

    * Apply a `no-screenshot` label.
    * Post a comment that requests a screenshot. Update this action to provide specific context for your project.
</div>
<div class="automationExample" markdown="1">
!!! example "Request Screenshot"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/request_screenshot.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/request_screenshot.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md::5"
--8<-- "docs/snippets/context-automation.md:7:"

--8<-- "docs/snippets/automation-footer.md"
