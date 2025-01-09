<a name="module_generateDescription"></a>

## askAI

The AskAI plugin allows gitStream workflows to interact with external AI services, enabling advanced automation capabilities such as code analysis, test case generation, and PR summarization. This plugin requires a valid API token for the AI service, which must be securely provided as an environment variable.

!!! note "Security note"
    The `AskAI` plugin integrates with an external AI model and requires your API token for authorization. Ensure you provide a valid token through the `env.OPEN_AI_TOKEN` parameter or similar configuration. This may also incur API costs.

    When using the `AskAI` plugin, the provided **context** and **prompt** will be shared with the configured AI service. **Ensure that no sensitive or proprietary information is included unless your organization's policies permit it**. 
    
![Example PR description](screenshots/askAI-describe-PR.png)

**Returns**: <code>Object</code> -  Returns the AI-generated response based on the provided context and prompt.
**License**: MIT

| Param   | Type     | Description                                                                                                        |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| context | `Object` | The context to be sent to the AI model with the prompt.                                                            |
| role    | `string` | The system role or persona for the AI to adopt while generating the response.                                      |
| prompt  | `string` | The specific request or question you want the AI to respond to, after the context has been provided.               |
| token   | `string` | Your OpenAI API token.                                                                                             |

**Example**

```yaml
{{ source | askAI("Experienced developer", "Summarize the changes in this PR in bullet points.", env.OPEN_AI_TOKEN) }}
```
