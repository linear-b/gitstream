# Approve test changes

Label and approve PRs that only include tests, and post an explanation comment.

![Adding tests example](approve_tests.png)

Conditions (all must be true):

* The PR only contains changes to tests

Automation Actions:

* Add a tests-only label
* Approve the PR
* Post a comment that explains why the PR was approved.

!!! example "Approve Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_tests.cm){ .md-button }
      </span>
    </div>