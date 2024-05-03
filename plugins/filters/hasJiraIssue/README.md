--8<-- "plugins/filters/hasJiraIssue/reference.md"

!!! warning "Prerequisite Configuration"
    You will need to complete the following steps to use this plugin:

    1. [Create an API token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) for your Jira account.
    1. Make the token available to gitStream via an [environment variable](https://docs.gitstream.cm/context-variables/#env).

??? note "Plugin Code: hasJiraIssue"
    ```javascript
    --8<-- "plugins/filters/hasJiraIssue/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: hasJiraIssue"
    ```yaml+jinja
    --8<-- "plugins/filters/hasJiraIssue/has_jira_issue.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/hasJiraIssue)
