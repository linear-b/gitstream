# CM Syntax

gitStream CM syntax defines a powerful and flexible language that enables users to write automation rules and customize their workflows. In this guide, we'll walk you through the basics of CM syntax and provide examples to help you get started.

Every CM file must have a single `automations` section, which is where you define your automation rules. In this section, you can create dictionaries that specify the conditions and actions of your automation rules. You can name each automation rule as you desire, making it easy to keep track of different rules in your file. 

In the example below, `safe_changes` is an automation. You can name each automation rule as you desire. In the example below, `safe_changes` can have any other name you like as long as it is a valid YAML string.

You can also define user defined accessory sections. These sections can contain common variables and expressions that you can use to simplify your automation rule syntax and reuse it in different rules within the same file. This can help make your automation rules more readable and maintainable.

In the example below we have defined `is.formatting`, `is.docs` and `is.tests`.

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
