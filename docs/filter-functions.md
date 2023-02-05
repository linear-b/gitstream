# Filter functions

Filters can change the look and format of the source data, or even generate new data derived from the input values. What's important is that the original data is replaced by the result of transformations, and that's what ends up in rendered templates.

!!! note 
    
    Items marked with :octicons-beaker-24: are under development and are not available yet.

## Overview

The following functions are supported in addition to the built-in functions provided by [Nunjucks](https://mozilla.github.io/nunjucks/templating.html#builtin-filters).

### Low level functions

<div class="big-summary" markdown=1>

| Function | Input | Args | Output |
| --------------- | ------- | ---- |  ---- |
| [`every`](#every)<br />Checks whether all element in the list are `true` | [Bool] | - | Bool |
| [`filter`](#filter)<br />Reduce list of items into a list of same items that match the specified term | [String]<br />[Object] | `regex`, `term`, `list`, `attr` | [String]<br />[Object] |
| [`includes`](#match)<br />Check if substring match | String | `regex`, `term`, `list` | Bool |
| [`map`](#map)<br />Maps each object in a list into their specified attribute value | [Object] | `attr` | [Object] |
| [`match`](#match)<br />Maps list of items into a list of booleans that match the specified term | [String]<br />[Object] | `regex`, `term`, `list` `attr` | [Bool] |
| [`nope`](#nope)<br />Checks whether all element in the list are `false` | [Bool] | - | Bool |
| [`reject`](#reject)<br />Inverse of [`filter`](#filter), the result list contains non-matching items | [String]<br />[Object] | `regex`, `term`, `list`, `attr` | [String]<br />[Object] |
| [`some`](#some)<br />Checks whether at least one element in the list is `true` | [Bool] | - | Bool |

</div>

### High level functions

<div class="big-summary" markdown=1>

| Function | Input | Args | Output |
| --------------- | ------- | ---- |  ---- |
| [`allDocs`](#alldocs)<br />Checks the list includes only documents | [files](/context-variables.md#files) | - | Bool |
| [`allImages`](#allimages)<br />Checks the list includes only images | [files](/context-variables.md#files) | - | Bool |
| [`allTests`](#alltests)<br />Checks the list includes only tests | [files](/context-variables.md#files) | - | Bool |
| [`estimatedReviewTime`](#estimatedreviewtime)<br />Estimated review time in minutes | [branch](/context-variables.md#branch-context)| - | Integer |
| [`extensions`](#extensions)<br />Lists all the unique file extensions | [String] | - | [String] |
| [`explainRankByGitBlame`](#explainrankbygitblame)<br /> Short markdown text explaining rankByGitBlame results | [`repo`](/context-variables.md#repo) | `gt`, `lt` | [String] |
| [`isFirstCommit`](#isfirstcommit)<br />Checks if its the author first commit in the repo | [`repo.contributors`](/context-variables.md#repo) | String | Bool |
| [`isFormattingChange`](#isformattingchange)<br />Checks that only formatting changed | [[`FileDiff` ](/context-variables.md#filediff-structure)] | - | Bool |
| [`matchDiffLines`](#matchdifflines)<br />Match every line in diff | [[`FileDiff` ](/context-variables.md#filediff-structure)] | `regex`, `ignoreWhiteSpaces` | [Bool] |
| [`rankByGitActivity`](#rankbygitactivity)<br />Get list of contributors based on `git-commit` activity | [`repo`](/context-variables.md#repo) | `gt`, `lt` | [String] |
| [`rankByGitBlame`](#rankbygitblame)<br />Get list of contributors based on `git-blame` results| [`repo`](/context-variables.md#repo) | `gt`, `lt` | [String] |

</div>

### Named arguments

Some functions supports named arguments, many of these repeat in different functions.

`term` - a single string, used as substring to match with the matched item.

`list` - a list of strings, trying to match any of the listed substrings with the matched item.

`regex` - a single string, used as _regular expression_ to with the matched item. A regular expression can be created just like JavaScript, but needs to be prefixed with r, for example `r/^foo.*/g`, for more info see [Nunjucks](https://mozilla.github.io/nunjucks/templating.html#regular-expressions). 

`globs` - a key to an element in the `.cm` that holds a list of strings, used as _glob_ pattern test on the matched item. For more info, see [Wikipedia](https://en.wikipedia.org/wiki/Glob_(programming)).

`attr` - a key in the element to use when doing the requested operation.

For example, the following expressions provide an identical result:

```yaml+jinja
- {{ 'something' | includes(regex=r/^some.*/) }}
- {{ 'something' | includes(term='some') }}
- {{ 'something' | includes(list=['some']) }}
```

## Reference

#### `every`

Checks whether all element in the list are `true`. In case the list of elements is empty, it will return `false`.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | [Bool]    | List of booleans |
| -  | Output  | Bool   | Returns `true` when all list items are `true` |

</div>

For example, check that all changes are in either 'src' or 'dest' directories:

```yaml+jinja
{{ files | match(list=['src', 'dest']) | every }}
```

#### `filter`

Creates a shallow copy of a portion of a given list, filtered down to just the elements that match the given term. You can use either a single term, regex, or a list of terms to match with.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                              |
| ---------|-----------|-----------|------------------------------------ |
| - | Input | [String]<br />[Object]  | The list of strings to match, or list of objects if `attr` is used      |
| `term`<br />`regex`<br />`list`  | Input (either)  |  String<br />String<br />[String]  | Search term to match with the input items |
| `attr` |Input  (optional) | String  | match a named attribute in the input object |
| - | Output | [String]<br />[Object] | The list with only the matching items |

</div>

For example, check if all changes to JavaScript files are in tests directory:

```yaml+jinja
{{ files | filter(regex=r/\.js$/) | match(regex=r/tests\//) | every }}
```

For example, check if all changes to JavaScript files are formatting:

```yaml+jinja
{{ source.diff.files | filter(attr='new_file', regex=r/\.js$/) | isFormattingChange }}
```

#### `includes`

Determines whether a string includes a certain substring. You can use either a single term, regex, or a list of terms to match with.

<div class="filter-details" markdown=1>

| Argument        | Usage    | Type      | Description                                     |
| ------------- | ---------|-----------|--------------------------------------|
| -       | Input    | String  |  The list of strings to match                        |
| `term`<br />`regex`<br />`list`  | Input (either)  |  String<br />String<br />[String]  | Substring term to match
| -      | Output   | Bool | `true` if search terms matches   |

</div>

Check string matches either of the terms:

```yaml+jinja
{{ 'something' | includes(list=['any', 'thing']) }}
```

#### `map`

Creates a new list populated with the values of the selected attribute of every element in the input list. 

<div class="filter-details" markdown=1>

| Argument      | Usage    | Type      | Description                        |
| ------------- | ---------|-----------|--------------------------------------|
| -      | Input    | [Object] | The list of objects to map, see [context](/context-variables) for valid inputs               |
| `attr` | Input    | String   | Object attribute to select      |
| -      | Output   | [Object] | List of the selected object attributes  |

</div>

For example, the `source.diff.files` context holds a list of [`FileDiff` ](/context-variables.md#filediff-structure), each has `new_file` attribute. You can create a list of all the new file names by mapping to the `new_file` attribute and then check if there are changes to any `handler.js` file:

```yaml+jinja
{{ source.diff.files | map(attr='new_file') | match(term='handler.js') | some }}
```

#### `match`

Return `true` for each element in the list that match the search term.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                                     |
| ------ | ---------|-----------|------------------------------------------------ |
| - | Input  | [String]<br />[Object]  | The list of strings or if `attr` used the list of objects      |
| `term`<br />`regex`<br />`list`  | Input (either)  |  String<br />String<br />[String]  | Search term to match
| `attr` | Input   | String  | match a named attribute in the input object |
| - | Output | [Bool]      | `true` for every matching item |

</div>

For example, to check if all code changes are in the `tests` directory:

```yaml+jinja
{{ files | match(regex=r/tests\//) | every }}
```

For example, to check if there are code changes with specific function call:

```yaml+jinja
{{ source.diff.files | match(attr='diff', term='myFunction') | some }}
```

#### `nope`

The inverse of [`every`](#every), checks whether all element in the list are `false`. In case the list of elements is empty, it will return `false`.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | [Bool]    | List of booleans |
| -  | Output  | Bool   | Returns `true` when all list items are `false` |

</div>

For example, check that no changes in either 'src' or 'dest' directories:

```yaml+jinja
{{ files | match(list=['src', 'dest']) | nope }}
```

#### `reject`

Creates a shallow copy of a portion of a given list, filtered down to just the elements that does **not** match the given term. You can use either a single term, regex, or a list of terms to match with.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                              |
| ---------|-----------|-----------|------------------------------------ |
| - | Input | [String]<br />[Object]  | The list of strings to match, or list of objects if `attr` is used      |
| `term`<br />`regex`<br />`list`  | Input (either)  |  String<br />String<br />[String]  | Search term to match with the input items |
| `attr` |Input  (optional) | String  | match a named attribute in the input object |
| - | Output | [String]<br />[Object] | The list with only the non-matching items |

</div>

For example, check if all changes, but JavaScript files are in tests directory:

```yaml+jinja
{{ files | reject(regex=r/\.js$/) | match(regex=r/tests\//') | every }}
```

For example, check if all changes except for `config.json` files are formatting:

```yaml+jinja
{{ source.diff.files | reject(attr='new_file', regex=r/config\.json$/) | isFormattingChange }}
```

#### `some`

Checks whether any element in the list is `true`. In case the list of elements is empty it will return `false`.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | [Bool]    | List of booleans |
| -  | Output  | Bool    | Returns `true` when any of the items is `true` |

</div>

```yaml+jinja
{{ files | match(list=['src', 'dest']) | some }}
```

#### `allDocs`

Return `true` if the input list includes only documents based on file extensions.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                         |
| -------- | ---------|-----------|------------------------------------------------ |
| -  | Input    | [`files`](/context-variables.md#files)  | The list of changed files with their path     |
| - | Output   | Bool      | `true` if all file extensions are of docs       |

</div>

Doc files extensions are: `md`, `mkdown`, `txt`, `rst`, except for `requirements.txt`. In case you want to exclude more files, use [`reject`](#reject).

```yaml+jinja
{{ files | allDocs }}
```

#### `allImages`

Return `true` if the input list includes only images based on file extensions.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input    | [`files`](/context-variables.md#files)  | The list of changed files with their path       |
| - | Output   | Bool      | `true` if all file extensions are of images     |

</div>

Image file extensions are: `svg`, `png`, `gif`.

```yaml+jinja
{{ files | allImages }}
```

#### `allTests`

Return `true` if the input list includes only tests based on file's path and name.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                                     |
| ------ | ---------|-----------|------------------------------------------------ |
| - | Input   | [`files`](/context-variables.md#files)  |The list of changed files with their path        |
| - | Output | Bool      | `true` if all file tests based on name and path |

</div>

Test files must include the substring `test` or `spec` in its name or path.

```yaml+jinja
{{ files | allTests }}
```

#### `estimatedReviewTime`

Returns the estimated review time in minutes based on statistical model.
For the estimation the model uses additions and deletions statistics grouped by the file types and additional information about the commits and base branch.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | [`branch`](/context-variables.md#branch)    | Branch meta data |
| -  | Output  | Integer    | the estimated time for review in minutes |

</div>

```yaml+jinja
{{ branch | estimatedReviewTime }}
```

#### `extensions`

Expects `files` and provide a list of all unique file extensions.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                                     |
| ------ | ---------|-----------|------------------------------------------------ |
| -  | Input    | [`files`](/context-variables.md#files)  | The list of changed files with their path       |
| - | Output   | [String]  | List of all unique file extensions              |

</div>

For example, check that only one file type was changed:

```yaml+jinja
{{ files | extensions | length == 1 }}
```

#### `explainRankByGitBlame`

This filter helps to explain the results of [`rankByGitBlame`](#rankbygitblame), the output is in Markdown format that can be used in a PR comment.

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`repo`](/context-variables.md#repo)  | The `repo` context variable  |
| `lt`     | Input    | Integer  | Filter the user list, keeping those below the specified threshold  |
| `gt`  | Input  | Integer  | Filter the user list, keeping those above the specified threshold  |
| -     | Output   | String   | Explaining [`rankByGitBlame`](#rankbygitblame) results in markdown format |

</div>

For example:

```yaml+jinja
automations:
  the_right_reviewer:
    if: 
      - true
    run:
      - action: add-reviewers@v1
        args:
          reviewers: {{ repo | rankByGitBlame(gt=50) }}
      - action: add-comment@v1
        args:
          comment: |
            {{ repo | explainRankByGitBlame(gt=50) }}
```

Note the comment starts with `|` and a `new-line` as `explainRankByGitBlame` generates a multiline comment.

#### `isFirstCommit`

Return `true` if it's the author first commit in the repo.

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`repo.contributors`](/context-variables.md#repo)  | List of contributors in the repo |
| -     | Input    | String  | The contributor name |
| -     | Output   | Bool   | `true` if its the first commit of the selected contributor |

</div>

```yaml+jinja
if: 
  - {{ repo.contributors | isFirstCommit(branch.author) }}
run: 
  - action: add-comment@v1
    args:
      comment: Welcome {{branch.author}}!
```

#### `isFormattingChange`

Return `true` if all file diffs are validated as formatting changes.

Support source code languages: JavaScript, TypeScript, JSON, YAML and HTML.

If changes in other formats detected, the filter will return `false`.

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`source.diff.files`](/context-variables.md#source)  | List of file diffs  |
| -     | Output   | Bool   | `true` if the all code changes are non functional |

</div>

```yaml+jinja
{{ source.diff.files | isFormattingChange }}
```

#### `matchDiffLines`

Checks diff for matching lines.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                                     |
| ------ | ---------|-----------|------------------------------------------------ |
| - | Input  | [Object]  | The list of objects      |
| `regex` | Input   | String  | Regex term to match with the input items, use `\\` for `\` |
| `ignoreWhiteSpaces` | Input   | Bool  | `false` by default, match a named attribute in the input object |
| :octicons-beaker-24: `caseSensitive` | Input   | Bool  | `true` by default, ignore case when matching terms |
| - | Output | [Bool]      | `true` for every matching object |

</div>

For example, to check if all the changes are of adding prints and ignore white spaces:

```yaml+jinja	
{{ source.diff.files | matchDiffLines(regex=r/^\+.*console\.log/, ignoreWhiteSpaces=true) | every }}
```


#### `rankByGitActivity`

Get list of contributors based on `git-commit` activity.

The `repo` context includes all the changed files, for each file it includes each 
contributor number of lines changed every week over the last 52 weeks, based on `git-commit`. 

These functions compare each contributor changes per week and yield an average percentage of contribution for any given file. For example, in a certain week a file had 500 line changed, 200 by a first user, while 3 other users changed 100 lines each. So the score for the first user in that week will be 40 (200/500 in %). The function then average the score for each user for the selected time period. 

Then you can use the thresholds to get the right reviewer.

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`repo`](/context-variables.md#repo)  | The `repo` context variable  |
| `weeks`     | Input    | Integer  | The number of last weeks to include |
| `lt`     | Input    | Integer  | Filter the user list, keeping those below the specified threshold  |
| `gt`  | Input  | Integer  | Filter the user list, keeping those above the specified threshold  |
| -     | Output   | [String]   | The list of users based on their code score comparison |

</div>

Check if the branch author is a rookie

```yaml+jinja
active_coders: {{ repo | rankByGitActivity(gt=50, weeks=12) }}
```

#### `rankByGitBlame`

Get list of contributors based on `git-blame` results

The `repo` context includes all the changed files, for each file it includes the 
contributors' percentage of lines in the file, based on `git-blame`. 

This function sums all these percentages per user and yield an average percentage of contribution. Then you can use the thresholds to get the right reviewer.

The output lists the Git provider users, e.g., GitHub users, which are mapped from the Git users included in the `git-blame` output. When gitStream cannot map the Git user to a Git provider user it will be dropped from the output list, hence the list may contain less than 100% of the lines.

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`repo`](/context-variables.md#repo)  | The `repo` context variable  |
| `lt`     | Input    | Integer  | Filter the user list, keeping those below the specified threshold  |
| `gt`  | Input  | Integer  | Filter the user list, keeping those above the specified threshold  |
| -     | Output   | [String]   | The list of users based on their code score comparison, sorted by rank - first has highest score |

</div>

Example of the filter output, note the output are GitHub users in the example:
```json
[
  "PopeyeUser",
  "olive_user",
  "BRUTUS_USER"
]
```

Get the most significant contributors for the PR files:

```yaml+jinja
contributors: {{ repo | rankByGitBlame(gt=30) }}
```

Check if the branch author is a rookie

```yaml+jinja
is_rookie: {{ repo | rankByGitBlame(lt=15) | match(term=branch.author) | some }}
```

