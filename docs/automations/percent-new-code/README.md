---
title: Automation - Calculate the Percentage of New Code
description: Indicate the amount of new code contained in a PR.
category: [review]
---
# Calculate the Percentage of New Code
Post a comment that indicates what percentage of the PR contains new code.

<div class="automationImage" style="align:right" markdown="1">
![Percent new code](percent_new_code.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * Any PR

    Automation Actions:

    * Use the `changes` custom expression to post a comment that indicates what percentage of the PR is new code.
</div>
<div class="automationExample" markdown="1">
!!! example "Calculate the Percentage of New Code"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/percent_new_code.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/percent_new_code.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/context-automation.md::4"
--8<-- "docs/snippets/context-automation.md:6:"

--8<-- "docs/snippets/automation-footer.md"
