<a name="module_generateDescription"></a>

## askAI
A gitStream plugin to interact with AI models. Currently works with `ChatGPR-4o-mini`

![Example PR description](screenshots/askAI-CR.png)

**Returns**: <code>Object</code> - Returns the generated PR description.
**License**: MIT

| Param   | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| context | `Object` | The context that will be attached to the prompt |
| prompt  | `string` | The prompt string                               |
| token   | `Object` | The token to the AI model                       |


**Example**
```yaml
{{ code | askAI("Based on the given context, write a few bullet points about how I can improve my code? address only to diff code, if it exists", env.OPEN_AI_TOKEN) | encode }}
```
