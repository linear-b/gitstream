<a name="module_generateDescription"></a>

## askAI
A gitStream plugin to interact with AI models. Currently works with `ChatGPR-4o-mini`

![Example PR description](screenshots/askAI-qa.png)

**Returns**: <code>Object</code> - Returns the response from the AI model
**License**: MIT

| Param   | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| context | `Object` | The context that will be attached to the prompt |
| prompt  | `string` | The prompt string                               |
| token   | `Object` | The token to the AI model                       |


**Example**
!!! tip "Encoding output"
    The output of AI models may be lengthy, which might cause issues when setting the comment. We recommend using the `encode` filter function, as shown in the example, to ensure that the comment is passed fully.
    The `add-comment` action automatically decodes encoded strings.
    
```yaml
{{ code | askAI("Based on the given context, search for new functions without tests and suggest the tests to add. If all functions are covered completely, return 'no tests to suggest.'", env.OPEN_AI_TOKEN) | encode }}
```
