<a name="module_generateDescription"></a>

## askAI

!!! warning "Data privacy"
    The [`askAI`](/filter-function-plugins/#askai) plugin will provide context to the configured model provider and may incur API costs.

    [Learn more about gitStream plugins](/plugins/).

A gitStream plugin to facilitate AI workflows with OpenAI's `gpt-4o-2024-08-06` model.

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
