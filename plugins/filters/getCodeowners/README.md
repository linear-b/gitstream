
When used, create a secret TOKEN, and add it to the workflow file, in GitHub:

```
jobs:
  gitStream:
    steps:
      - name: Evaluate Rules
        uses: linear-b/gitstream-github-action@v1
        env: 
          CODEOWNERS: ${{ secrets.GITSTREAM_CODEOWNERS }}
``` 

--8<-- "plugins/filters/getCodeowners/reference.md"

??? note "Plugin Code: getCodeowners"
    ```javascript
    --8<-- "plugins/filters/getCodeowners/index.js"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>


??? example "gitStream CM Example: getCodeowners"
    ```yaml+jinja
    --8<-- "plugins/filters/getCodeowners/get_codeowners.cm"
    ```
    <div class="result" markdown>
    <span>
    </span>
    </div>

[Download Source Code](https://github.com/linear-b/gitstream/tree/main/plugins/filters/getCodeowners)
