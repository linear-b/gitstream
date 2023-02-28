# CM Syntax

Taking the basic `safe-changes` example blow, every cm file has to have `automations` section. 

In it, you have dictionaries that define automation rules, you can name each automation rule as you desire. In the example below, `safe_changes` is a free form text. You can change it to any valid YAML string.

You can also define an accessory section, with common variables and expression, to simplify the automation rule readability and reuse it in different rules in the same file. In the example below we have defined `is.formatting`, `is.docs` and `is.tests`.

```yaml+jinja
automations:
  safe_changes: # (1)
    if:
      - {{ is.formatting or is.docs or is.tests }}
    run: 
      - action: add-label@v1
        args:
          label: 'safe-changes'
      - action: approve@v1

is: #(2)
  formatting: {{ source.diff.files | isFormattingChange }}
  docs: {{ files | allDocs }}
  tests: {{ files | allTests }}
```

1.  User defined string that used to name the automation rule
2.  User defined accessory section

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

### Reserved words

gitStream reserved words:

`manifest` `config` `automations` `every` `filter` `includes` `map` `match` `nope` `reject` `some` `allDocs` `allImages` `allTests` `estimatedReviewTime` `extensions` `explainRankByGitBlame` `isFirstCommit` `isFormattingChange` `matchDiffLines` `rankByGitActivity` `rankByGitBlame`

[Nunjucks](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) reserved words:

`e` `if` `for` `asyncEach` `asyncAll` `macro` `set` `extends` `block` `include` `import` `raw` `verbatim` `filter` `call` `abs` `batch` `capitalize` `center` `default` `dictsort` `dump` `escape` `first` `float` `forceescape` `groupby` `indent` `int` `join` `last` `length` `list` `lower` `nl2br` `random` `reject` `rejectattr` `replace` `reverse` `round` `safe` `select` `selectattr` `slice` `sort` `string` `striptags` `sum` `title` `trim` `truncate` `upper` `urlencode` `urlize` `wordcount`

### Syntax highlighting

You can add support for `.cm` in your code editor, see [FAQ](https://docs.gitstream.cm/faq/#is-there-cm-syntax-highlighting).
