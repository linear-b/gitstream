# Change Missing Lambda Field

If a PR creates a new Lambda function, but lacks a description field, gitStream will request changes and post a comment that explains why. 

Conditions (all must be true):

* The PR contains an update to a Lambda function.
* The affected files are missing a description field.

Automation Actions:

* Add a `lambda-missing-field` label to the PR.
* Request changes and post a comment that explains why.

!!! example "Change Missing Lambda Field"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/change_missing_lambda_field.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/change_missing_lambda_field.cm){ .md-button }
      </span>
    </div>