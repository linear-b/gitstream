# Overview

Continuous Merge automation files have a `.cm` extension. In a repository,  gitStream loads and parse the `.cm` directory, which can have multiple automation files, each of which is evaluated independently.

You can edit the `.cm` files and add your own checks and rules. Check out the [Automation examples](examples)

## The .cm directory

The `.cm` directory is located in the repo root and contains the automation files. 

Every file is parsed independently, and the parsing results are combined and executed.

Specifically:

1. Automations are allowed to have same name in different `.cm` files
2. The `config` section is defined per `.cm` file
3. Any accessory expression defined in one file cannot be reused in another file 

## Context variables

gitStream includes a collection of variables called contexts. These variable has all the inputs you need to code your automation, including files names and paths, code that was changed or who did the change.
See more [here](context-variables).

## Filter functions

Filter functions are essentially callable functions that can be applied to variables. They are called with a pipe operator `|` and can take arguments inside parentheses `( )`. The logic expressions are based on Jinja2 syntax, supported by Nunjucks library.

See more about the Nunjucks built-in filters [here](https://mozilla.github.io/nunjucks/templating.html#builtin-filters), and about gitStream built-in filters [here](filter-functions).

## Automation actions

Specify the desired automations that are triggered when all conditions are met, read more [here](automation-actions).

Each automation includes conditions in an `if` section and actions in a `run` section. 

**Conditions:** Multiple conditions can be listed for a single automation, with AND relationship between the conditions, hence all listed conditions must pass to invoke the actions. The conditions are evaluated on new Pull Requests or changes to the Pull Request.

**Actions:** Multiple actions can be listed in a single automation, the actions are invoked one by one.

PRs that are marked as Draft are ignored by default, you can change that, see [`config`](#config) .

## Schema

The following sections are used in `.cm` file to describe the desired automations:

- [`manifest`](#manifest)
- [`config`](#config)
- [`automations`](#automations)

### `manifest`

The first section in a `gitstream.cm` file is the `manifest`.

```yaml+jinja
manifest: 
  version: 1.0
```

The only field required is `version`.

| Key         | Required | Type    | Description                              |
| ----------- | ---------|---------|----------------------------------------- |
| `manifest`         | Y        | Map     | The manifest section root                |
| `manifest.version` | Y        | String  | Specify the `.cm` spec version: 0.1, 1.0 |

The manifest version field is used to parse the `.cm` file, in the future if breaking changes are introduced to the parser then older automation will be still supported.

### `config`

The `config` section is optional in `gitstream.cm` file and is used to specify configuration for the way gitStream works.

| Key         | Required | Type    |  Default | Description                              |
| ----------- | ---------|---------|----------|------------------------------ |
| `config`              | N | Map   | - | The config section root                |
| `config.ignore_files` | N | [String]   | - | Specifies files that will not be included in the context variables |

`config.ignore_files` supports glob pattern matching that contains list of files to ignore, for example:

```yaml+jinja
config:
  ignore_files:
    - 'yarn.lock'
    - 'package-lock.json'
    - 'openapi.json'
    - 'ui/src/**/*Model.d.ts'
```

### `automations` 

The `automations` section defines the automations and their conditions. 

```yaml+jinja
automations:
  mark_small_pr:
    if:
      - {{ checks.size.is.xsmall }}
    run:
      - action: add-label@v1
        args:
          label: xsmall
```

Each automation includes its name, and few fields: `if` and `run`.

| Key        | Required  | Type    | Description                                     |
|------------|-----------|---------|------------------------------------------------ |
| `automations`  | Y        | Map     | The automations section root     |
| `automations.NAME`     | Y | Map | User defined name of the automation, can be any string       |
| `automations.NAME.if`  | Y | Map | List of conditions with AND relationship |
| `automations.NAME.run` | Y | Map | Actions to run if all conditions are met, invoked one by one |

The `if` field includes the list of conditions. The conditions are checked when a pull request 
is opened or changed, if all the conditions pass, the automation is executed.

The `run` field includes the automation to execute. It includes the following fields:

| Key         | Required | Type    | Description                                     |
| ----------- | ---------|---------|------------------------------------------------ |
| `action`    | Y        | String  | The action pointer                              |
| `engine`    | N        | String  | The action engine, default is `gitstream`       |
| `args`      | N        | List    | The action inputs list                          |

For `gitstream` engine, the action is specified by: `name@version`

gitStream supported actions, see [actions](automation-actions).

### Reusing checks

You can define an accessory section, e.g. `checks`, that defines common conditions, and reuse.  

```yaml+jinja
size:
  is:
    small: {{ branch.diff.size < 20 }}
    medium: {{ branch.diff.size >= 20 and branch.diff.size < 100 }}
    large: {{ branch.diff.size >= 100 }}
automations:
  approve_small:
    if:
      - {{ size.is.small }}
    run:
      - action: approve@v1
  mark_small_medium:
    if:
      # Check that the PR is either small or medium size 
      - {{ size.is.small or size.is.medium }}
      # AND its less than 5 minutes review (estimated) 
      - {{ branch | estimatedReviewTime <= 5 }}
    run:
      - action: add-label@v1
        args:
          label: 'good-size'

```