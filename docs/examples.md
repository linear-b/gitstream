# gitStream Example Library

This example library contains detailed automation configurations that can be customized to meet the needs of your team.

!!! tip "How to use these examples."
    These examples are all complete gitStream configuration files that you can download directly via the buttons below the examples and upload to the `.cm` directory of your repo. Alternatively, you can copy and paste the individual automations, but make sure you include all required declarations and any related custom expressions from the configurations to ensure they work properly. 

## Provide Context With Labels
PR labels can make it easier for your team to identify where to focus your effort by reducing the mental calories needed to understand the changes contained in a PR. With gitStream, you can indicate the amount of time it would take to review a PR and provide hints about potential issues and context about the contents of a PR.

!!! example "PR Label Automations"
    ```yaml+jinja
    --8<-- "docs/downloads/labels.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/labels.cm){ .md-button }
      </span>
    </div>

## Approval Automation
Not all PRs need extensive review policies that loop in multiple experts. For minor changes to docs, tests, formatting, and other components that pose little risk, gitStream can automate the review process to keep your team focused on their work.

!!! example "PR Approval Automations"
    ```yaml+jinja
    --8<-- "docs/downloads/approvals.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/approvals.cm){ .md-button }
      </span>
    </div>

## Review Assignment
 Identifying the correct people to review a PR can take time, particularly for complex projects and repos that require deep expertise to understand. With features like code experts, gitStream extends CODEOWNER capabilities to provide intelligent automations that identify the best reviewers and give context to help speed up the review process.

!!! example "PR Approval Automations"
    ```yaml+jinja
    --8<-- "docs/downloads/code-experts.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/code-experts.cm){ .md-button }
      </span>
    </div>

## Organization Automations
Some rules and automations make most sense to enforce at the organization level. 

!!! example "Organization Automations"
    ```yaml+jinja
    --8<-- "docs/downloads/organization.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/organization.cm){ .md-button }
      </span>
    </div>
## Language-Specific Examples
This section contains examples that are specific to languages and development environments.
### JavaScript
!!! example "JavaScript Automations"
    ```yaml+jinja
    --8<-- "docs/downloads/javascript.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/javascript.cm){ .md-button }
      </span>
    </div>
### Python

!!! example "Python Automations"
    ```yaml+jinja
    --8<-- "docs/downloads/python.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/python.cm){ .md-button }
      </span>
    </div>
## More examples

More examples can be found in the [gitStream repository](https://github.com/linear-b/gitstream/tree/main/automations).

!!! tip

    You can boost your GitHub reputation with your new automation rule - open a PR and add it to the [gitStream repository](https://github.com/linear-b/gitstream/tree/main/automations)
