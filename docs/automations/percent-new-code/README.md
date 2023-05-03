# Calculate the Percentage of New Code
Post a comment that indicates what percentage of the PR contains new code.

![Percent new code](percent_new_code.png)

Conditions (all must be true):

* Any PR

Automation Actions:

* Use the `changes` custom expression to post a comment that indicates what percentage of the PR is new code.  

!!! example "Calculate the Percentage of New Code"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/percent_new_code.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/percent_new_code.cm){ .md-button }
      </span>
    </div>