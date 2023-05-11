# Approve JavaScript Formatting Changes
Approve PRs that only contain formatting changes to JavaScript or TypeScript files. 

![Approve JavaScript formatting changes](approve-javascript-formatting-change.png)

Conditions (all must be true):

* All of the files end in `.js` or `.ts`
* All changes are non-functional

Automation Actions:

* Approve the PR
* Apply a `code-formatting` label.
* Post a comment that explains the automation.

!!! example "Approve JavaScript Formatting Change"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_javascript_formatting_change.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_javascript_formatting_change.cm){ .md-button }
      </span>
    </div>