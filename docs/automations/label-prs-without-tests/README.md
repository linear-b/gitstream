
# Label PRs Without Tests
Apply a `missing-tests` label to any PRs that don't update tests. gitStream will remove this label if the contributor adds a test change to the PR.

![Automation Name](label_prs_without_tests.png)

Conditions (all must be true):

* The PR has no changes to a test.

Automation Actions:

* Apply a `missing-tests` label.

!!! example "Label PRs Without Tests"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/label_prs_without_tests.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/label_prs_without_tests.cm){ .md-button }
      </span>
    </div>