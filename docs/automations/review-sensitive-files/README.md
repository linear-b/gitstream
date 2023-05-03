# Review Sensitive Files
Compare the changed files to a pre-defined list of files and directories in. If any files match, require a review from the team `my-organization/security`.

![Review Sensitive Files](review_sensitive_files.png)

Conditions (all must be true):

* Any files match the files or directories listed in the `sensitive_files` custom expression. Customize this list for your project.

Automation Actions:

* Assign `my-organization/security` to review the PR. Customize this value to match your organization.
* Require 2 approvals.
* Post a comment that explains the automation.

!!! example "Review Sensitive Files"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/review_sensitive_files.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/review_sensitive_files.cm){ .md-button }
      </span>
    </div>