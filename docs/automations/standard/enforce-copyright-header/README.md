---
title: Automation - Enforce Copyright Headers
description: Automatically require copyright headers for all new source code files.
category: [review, compliance]
---
# Enforce Copyright Headers

Automatically require copyright headers for all new source code files.

![Enforce Copyright Headers](/automations/standard/enforce-copyright-header/enforce-copyright-header.png)

!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR creates a new file inside the /src directory that lacks a specified copyright header at the top of the file.

    Automation Actions:

    * Request changes and post a comment that explains the copyright header requirement.

!!! example "Enforce Copyright Headers"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/standard/enforce_copyright_header.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/standard/enforce_copyright_header.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/change-request-automation.md"

--8<-- "docs/snippets/automation-footer.md"
