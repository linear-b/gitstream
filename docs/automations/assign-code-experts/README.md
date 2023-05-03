
# Assign Code Experts

When someone applies a `suggest-reviewers` label to a PR, use codeExperts to assign recommended reviewers and post a comment with the `explainCodeExperts` automation action.

![Assign Code Experts](assign_code_experts.png)

Conditions (all must be true):

* The PR has a suggest-reviewers label attached to it.

Automation Actions:

* Use `codeExperts` to assign recommended reviewers.
* Use `explainCodeExperts` to post a comment that lists the top code experts for the PR.

!!! example "Assign Code Experts"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/assign_code_experts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/assign_code_experts.cm){ .md-button }
      </span>
    </div>