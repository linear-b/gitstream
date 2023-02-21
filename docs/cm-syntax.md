# CM Syntax

Taking the basic safe-changes example:

```yaml+jinja
automations:
  safe_changes:
    if:
      - {{ is.formatting or is.docs or is.tests }}
    run: 
      - action: add-label@v1
        args:
          label: 'safe-changes'
      - action: approve@v1

is:
  formatting: {{ source.diff.files | isFormattingChange }}
  docs: {{ files | allDocs }}
  tests: {{ files | allTests }}
```

The `is.formatting` and the other terms in the line are not the actual expression, it is just a way to make the long expression shorter or reuse it.

It actually refers to the section at the bottom of the example that has the actual expressions:

```yaml+jinja
is:
  formatting: {{ source.diff.files | isFormattingChange }}
  docs: {{ files | allDocs }}
  tests: {{ files | allTests }}
```

You can change the `is` or the keys below it (e.g. `formatting`) to any word (except some reserved words) you like and use that in your expressions – much like variables…

Following in this example to invert the logic you can use `not` - a reserved word that invert boolean results: 

```yaml+jinja
{{ not (is.formatting or is.docs or is.tests) }}
```

You can add support for `.cm` in your code editor, see [FAQ](https://docs.gitstream.cm/faq/#is-there-cm-syntax-highlighting).
