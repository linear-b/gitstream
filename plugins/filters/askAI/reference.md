<a name="module_generateDescription"></a>

## askAI
The AskAI plugin allows gitStream workflows to interact with external AI services, enabling advanced automation capabilities such as code analysis, test case generation, and PR summarization. This plugin requires a valid API token for the AI service, which must be securely provided as an environment variable.

!!! note "Authorization and Data Sharing"
    The `AskAI` plugin integrates with an external AI model and requires the customer's API token for authorization. Ensure you provide a valid token through the `env.OPEN_AI_TOKEN` parameter or similar configuration. 

    When using the `AskAI` plugin, the provided **context** and **prompt** will be shared with the configured AI service. Ensure that no sensitive or proprietary information is included unless your organization's policies permit it. 
    
![Example PR description](screenshots/askAI-describe-PR.png)

**Returns**: <code>Object</code> -  Returns the AI-generated response based on the provided context and prompt.
**License**: MIT

| Param   | Type     | Description                                                                                                        |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| context | `Object` | The context that needs to be sent to the AI model for analysis.                                                    |
| role    | `string` |  Free text. If not empty, Defines the role or persona for the AI to adopt while generating the response.           |
| prompt  | `string` | The specific request or question you want the AI to respond to, after the context has been provided.               |
| token   | `Object` | The token to the AI model                                                                                          |


**Example**
    
```yaml
{{ source | askAI("QA tester", "Based on the given context, search for new functions without tests and suggest the tests to add. If all functions are covered completely, return 'no tests to suggest.'", env.OPEN_AI_TOKEN) }}
```
