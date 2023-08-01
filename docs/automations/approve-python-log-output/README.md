---
title: Automation - Approve Python Log Output Changes
description: Automatically approve PRs that only affect Python log output.
---
# Approve Python Log Output Changes

Approve changes to Python files that only affect lines of code that invoke a specified logging object.

Conditions (all must be true):

* All files must end in .py
* The changes only affect lines of code that invoke a `logger` object. This should be customized to your environment.

Automation Actions:

* Applies a `log-output-only` label
* Approves the PR
* Posts a comment explaining that the change only affects logging output.

!!! example "Approve Python Log Output Changes"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_python_log_output.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_python_log_output.cm){ .md-button }
      </span>
    </div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/python-automation.md:2:"

--8<-- "docs/snippets/automation-footer.md"