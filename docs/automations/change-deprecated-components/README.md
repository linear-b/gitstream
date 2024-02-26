---
title: Automation - Change Deprecated Components
description: Automatically detect the use of deprecated components and services in PRs.
category: [quality]
---
# Change Deprecated Components

Request changes when a PR includes one or more deprecated components.

<div class="automationImage" style="align:right" markdown="1">
![Change Deprecated Components](change_deprecated_components.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * A PR contains one or more references to functions, methods, or classes that have been designated as deprecated.

    Automation Actions:

    * Add a `deprecated-component` label to the PR
    * Request changes to the PR and post a comment that explains what deprecated component was included and what the alternative is.
</div>
<div class="automationExample" markdown="1">
!!! example "Change Deprecated Components"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/change_deprecated_components.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/change_deprecated_components.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/change-request-automation.md::1"
--8<-- "docs/snippets/change-request-automation.md:3:"

--8<-- "docs/snippets/automation-footer.md"
