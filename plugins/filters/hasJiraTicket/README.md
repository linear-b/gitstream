??? note "Plugin Code: hasJiraTicket"
    ```javascript
    --8<-- "plugins/filters/hasJiraTicket/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

To run this plugin, you must have a valid Jira account and a valid automation to trigger in that account. The Jira automation should be triggered by an incoming webhook, and the provided webhook URL should be given to the plugin either by being hardcoded in or through an environment variable. The next step in the Jira automation should be "Create issue", and you can pass in whatever data you'd like to create Jira issues of varying complexity. The example provided here passes in the URL of the applicable PR, which is then used in the summary of the new Jira issue like this: `Created from GitHub PR: {{webhookData.pr_url}}`


??? example "gitStream CM Example: hasJiraTicket"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/create_jira_ticket.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/hasJiraTicket)
