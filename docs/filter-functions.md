---
title: gitStream Reference - Filter Functions
description: Filter Functions enable you to process data that gitStream extracts.
---
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
| [`capture`](#capture)<br />Find and return the first occurrence of a regex in the input string | String | `regex` | [Objects] |
| [`difference`](#difference)<br />Given two lists, keep only items that are in the 1st list but not in the 2nd. | [Objects] | `list` | [Objects] |
| [`every`](#every)<br />Checks whether all element in the list are `true` | [Bool] | - | Bool |
| [`filter`](#filter)<br />Reduce list of items into a list of same items that match the specified term | [String]<br />[Object] | `regex`, `term`, `list`, `attr` | [String]<br />[Object] |
| [`includes`](#match)<br />Check if substring match | String | `regex`, `term`, `list` | Bool |
| [`intersection`](#intersection)<br />Given two lists, keep only items that are in both lists.| [Objects] | `list` | [Objects] |
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
| [`allDocs`](#alldocs)<br />Checks the list includes only documents | [`files`](./context-variables.md#files) | - | Bool |
| [`allImages`](#allimages)<br />Checks the list includes only images | [`files`](./context-variables.md#files) | - | Bool |
| [`allTests`](#alltests)<br />Checks the list includes only tests | [`files`](./context-variables.md#files) | - | Bool |
| [`codeExperts`](#codeexperts)<br />Get list of contributors based on expert reviewer model results| [`repo`](./context-variables.md#repo) | `gt`, `lt` | [String] |
| [`estimatedReviewTime`](#estimatedreviewtime)<br />Estimated review time in minutes | [`branch`](./context-variables.md#branch)| - | Integer |
| [`extensions`](#extensions)<br />Lists all the unique file extensions | [String] | - | [String] |
| [`extractJitFindings`](#extractjitfindings) :fontawesome-brands-github: <br />Get an object with a summary of the findings found by the Jit scan | [`pr`](./context-variables.md#pr) | - | Object |
| [`extractSonarFindings`](#extractsonarfindings) :fontawesome-brands-github: <br />Get an object with a summary of the findings found by the SonarCloud scan | [`pr`](./context-variables.md#pr) | - | Object |
| [`explainRankByGitBlame`](#explainrankbygitblame)<br />Short markdown text explaining rankByGitBlame results | [`repo`](./context-variables.md#repo) | `gt`, `lt` | [String] |
| [`isFirstCommit`](#isfirstcommit)<br />Checks if its the author first commit in the repo | [`repo.contributors`](./context-variables.md#repo) | String | Bool |
| [`isFormattingChange`](#isformattingchange)<br />Checks that only formatting changed | [[`FileDiff` ](./context-variables.md#filediff-structure)] | - | Bool |
| [`mapToEnum`](#maptoenum)<br />return the enum value matches to the input key | String | Enum object | Object |
| [`matchDiffLines`](#matchdifflines)<br />Match every line in diff | [[`FileDiff` ](./context-variables.md#filediff-structure)] | `regex`, `ignoreWhiteSpaces` | [Bool] |
| [`rankByGitActivity`](#rankbygitactivity)<br />Get list of contributors based on `git-commit` activity | [`repo`](./context-variables.md#repo) | `gt`, `lt` | [String] |
| [`rankByGitBlame`](#rankbygitblame)<br />Get list of contributors based on `git-blame` results| [`repo`](./context-variables.md#repo) | `gt`, `lt` | [String] |

</div>

### Named arguments

Some functions support named arguments, many of these repeat in different functions.

`term` - a single string, used as a substring to match with the matched item.

`list` - a list of strings, trying to match any of the listed substrings with the matched item.

`regex` - a single string, used as a _regular expression_ with the matched item. A regular expression can be created just like JavaScript, but needs to be prefixed with r, for example, `r/^foo.*/g`, for more info see [Nunjucks](https://mozilla.github.io/nunjucks/templating.html#regular-expressions). 

<!-- `globs` - a key to an element in the `.cm` that holds a list of strings, used as _glob_ pattern test on the matched item. For more info, see [Wikipedia](https://en.wikipedia.org/wiki/Glob_(programming)). -->

`attr` - a key in the element to use when doing the requested operation.

For example, the following expressions provide an identical result:

```yaml+jinja
- {{ 'something' | includes(regex=r/^some.*/) }}
- {{ 'something' | includes(term='some') }}
- {{ 'something' | includes(list=['some']) }}
```

## Reference

#### `capture`

Extract the first match of the regex in the input string. If no match is found, the function returns an empty string.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | String    | The string to find the match in |
| `regex`  | Input |  String  | Search term to match with the input string |
| -  | Output  | Bool   | The first substring that match the provided regex |

</div>

For example, the following line will extract the substring "hello wo" from the input

```yaml+jinja
{{ "hello world" | capture(regex=r/he.+o/) }}
```

#### `difference`

Given two lists, keep only items that are in the 1st list but not in the 2nd.

<div class="filter-details" markdown=1>
| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | [Objects]    | List of objects to inspect. |
| list | Input  | [Objects]    | List of objects to exclude. |
| -  | Output  | [Objects]    | Returns a list of objects containing items that exist in one input, but not in the other. |

</div>

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

Examples:
Check if all changes to JavaScript files are in the tests directory:

```yaml+jinja
{{ files | filter(regex=r/\.js$/) | match(regex=r/tests\//) | every }}
```

Check if all changes to JavaScript files are formatting:

```yaml+jinja
{{ source.diff.files | filter(attr='new_file', regex=r/\.js$/) | isFormattingChange }}
```

Check if the PR has new Python files:
```yaml+jinja
{{ branch.diff.files_metadata | filter(attr='original_file', regex=r/^$/) | filter(attr='new_file', regex=r/\.py$/) | some }}
```
#### `includes`

Determines whether a string includes a certain substring. You can use either a single term, regex, or a list of terms to match with.

<div class="filter-details" markdown=1>

| Argument        | Usage    | Type      | Description                                     |
| ------------- | ---------|-----------|--------------------------------------|
| -       | Input    | String  |  The string you want to check for matching substrings |
| `term`<br />`regex`<br />`list`  | Input (either)  |  String<br />String<br />[String]  | Substring term to match
| -      | Output   | Bool | `true` if search terms matches   |

</div>

Check string matches either of the terms:

```yaml+jinja
{{ 'something' | includes(list=['any', 'thing']) }}
```
#### `intersection`

Given two lists, keep only items that are in both lists.

<div class="filter-details" markdown=1>
| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | [Objects]    | List of objects to inspect. |
| list | Input  | [Objects]    | List of objects to check for intersection. |
| -  | Output  | [Objects]    | Returns a list of objects containing items that intersect between the two lists. |
</div>

#### `map`

Creates a new list populated with the values of the selected attribute of every element in the input list. 

<div class="filter-details" markdown=1>

| Argument      | Usage    | Type      | Description                        |
| ------------- | ---------|-----------|--------------------------------------|
| -      | Input    | [Object] | The list of objects to map, see [context](/context-variables) for valid inputs               |
| `attr` | Input    | String   | Object attribute to select      |
| -      | Output   | [Object] | List of the selected object attributes  |

</div>

For example, the `source.diff.files` context holds a list of [`FileDiff` ](./context-variables.md#filediff-structure), each has `new_file` attribute. You can create a list of all the new file names by mapping to the `new_file` attribute and then check if there are changes to any `handler.js` file:

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

The inverse of [`every`](#every), checks whether all elements in the list are `false`. In case the list of elements is empty, it will return `true`.

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

Creates a shallow copy of a portion of a given list, filtered down to just the elements that do **not** match the given term. You can use either a single term, regex, or a list of terms to match with.

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

Doc files extensions are: `md`, `mkdown`, `txt`, `rst`, `adoc`, except for `requirements.txt`.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                         |
| -------- | ---------|-----------|------------------------------------------------ |
| -  | Input    | [`files`](./context-variables.md#files)  | The list of changed files with their path     |
| - | Output   | Bool      | `true` if all file extensions are of docs       |

</div>

```yaml+jinja
{{ files | allDocs }}
```

In case you want to exclude more files, like all `txt` under the `requirements` directory, add another check:

```yaml+jinja
{{ (files | allDocs) and (files | match(regex=r/requirements\/.*\.txt$/) | nope ) }}
```

#### `allImages`

Return `true` if the input list includes only images based on file extensions.

Image file extensions are: `svg`, `png`, `gif`.

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input    | [`files`](./context-variables.md#files)  | The list of changed files with their path       |
| - | Output   | Bool      | `true` if all file extensions are of images     |

</div>

```yaml+jinja
{{ files | allImages }}
```

#### `allTests`

Return `true` if the input list includes only tests based on the file's path and name.

To identify as test the file must include the word `test` or `spec` in its name or path, it is checked using this regex: `[^a-zA-Z0-9](spec|test|tests)[^a-zA-Z0-9]`.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                                     |
| ------ | ---------|-----------|------------------------------------------------ |
| - | Input   | [`files`](./context-variables.md#files)  |The list of changed files with their path        |
| - | Output | Bool      | `true` if all file tests are based on name and path |

</div>

```yaml+jinja
{{ files | allTests }}
```

#### `codeExperts`

When requesting a review for a pull request, it's important to select a reviewer who has a deep understanding of the relevant code area, the domain problem, and the framework being used. This ensures that the reviewer can provide specific and informed feedback, rather than general comments that may not take into account the context in which the issue was solved.

The filter provides the list of most qualified contributors based on `git-blame` and `git-commit` results to determine who has been most active in the relevant code area, and then combines this information into a score between 0 and 100. The commit activity is scored higher for recent commits, which ensures that those who are actively contributing to the codebase are given higher priority as potential reviewers. The result will be limited to 2 users and shall not include the PR author.

The output lists the Git provider users, e.g., GitHub users, which are mapped from the Git users included in the `git-blame` output. When gitStream cannot map the Git user to a Git provider user it will be dropped from the output list, hence the list may contain less than 100% of the lines.

!!! note

    The `codeExperts` filter function calls gitStream app API with the `repo` context to calculate the estimated review time value.

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`repo`](./context-variables.md#repo)  | The `repo` context variable  |
| `lt`     | Input    | Integer  | Filter the user list, keeping those below the specified threshold  |
| `gt`  | Input  | Integer  | Filter the user list, keeping those above the specified threshold  |
| -     | Output   | [String]   | Up to 2 users, sorted by best match first (it won't include the PR author) |

</div>

For example:

```yaml+jinja
automations:
  code_experts:
    if: 
      - true
    run:
      - action: add-reviewers@v1
        args:
          reviewers: {{ repo | codeExperts(gt=10) }}
```

#### `estimatedReviewTime`

Returns the estimated review time in minutes based on statistical model.
The model uses the amount of additions and deletions statistics for each file type with additional information about the commits and base branch.

!!! note

    The `estimatedReviewTime` filter function calls gitStream app API with the `branch` context to calculate the estimated review time value.

The following files are excluded when calculating this value:

<div class="filter-details" markdown=1>

| Argument   | Usage    | Type      | Description                                     |
| -------- | ---------|-----------|------------------------------------------------ |
| - | Input  | [`branch`](./context-variables.md#branch)    | Branch meta data |
| -  | Output  | Integer    | the estimated time for review in minutes |

</div>

```yaml+jinja
{{ branch | estimatedReviewTime }}
```

The following files are automatically excluded from the estimated review time calculation. 

| File type | Filter type | Values| 
| - | - | - |
| Data | Extension | `ini` `csv` `xls` `xlsx` `xlr` `doc` `docx` `txt` `pps` `ppt` `pptx` `dot` `dotx` `log` `tar` `rtf` `dat` `ipynb` `po` `profile` `object` `obj` `dxf` `twb` `bcsymbolmap` `tfstate` `pdf` `rbi` `pem` `crt` `svg` `png` `jpeg` `jpg` `ttf` |
| Data | Regex | `.*dist/.*\.js$` `.*public/assets/.*\.js$` |
| Lock | Regex | `.*package-lock|packages\.lock|package)\.json$` | 
| Lock | File | `yarn.lock` `gemfile.lock` `podfile.lock` `cargo.lock` `composer.lock` `pipfile.lock` `gopkg.lock` |
| Lock | Regex | `.*gradle\.lockfile$` `.*lock\.sbt$` |
| Pipeline | Regex | `.*ci\.yml$` |

!!! tip

    You can also filter more files, using [`config.ignore_files`](/cm-file/#configignore_files).

#### `extensions`

Expects `files` and provide a list of all unique file extensions.

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                                     |
| ------ | ---------|-----------|------------------------------------------------ |
| -  | Input    | [`files`](./context-variables.md#files)  | The list of changed files with their path       |
| - | Output   | [String]  | List of all unique file extensions              |

</div>

For example, check that only one file type was changed:

```yaml+jinja
{{ files | extensions | length == 1 }}
```

#### `extractJitFindings`

!!! Warning ":fontawesome-brands-github: Available in GitHub only"

    This filter is currently availalbe only in GitHub

Get an object with a summary of the findings found by [Jit](https://www.jit.io/) scan. This filter is relevant only for repos that use Jit to scan PRs

The `pr` context includes all the reviews in the pull request, including the reviews written by the Jit bot, along with all the comments ([conversations](./context-variables.md#conversation-structure)) to the review.

This filter reads and parses the reviews with Jit's findings, making them available for use inside the `.cm` file automations.

The output is an object of the following format:
```JSON
{
  "vulnerabilities": [{
    "security_control": 'string',
    "type": 'string',
    "description": 'string',
    "severity": 'string',
    "summary": 'string'
  }],
  "metrics": { 
    "HIGH": number, 
    "MEDIUM": number,
    "LOW": number,
    "INFO": number 
  }
}
```
<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`pr`](./context-variables.md#pr)  | The `pr` context variable  |
| -     | Output   | Object   | The object contains the summary of Jit's scan |

</div>
Example of the filter output
```json
{
  "vulnerabilities": [
    {
      "security_control": "Static Code Analysis Js",
      "type": "Codsec.Javascriptnosql-Injection.Nosql-Injection",
      "description": "Putting request data into a mongo query can leadto a NoSQL Injection. Be sure to properly sanitize thedata if you absolutely must pass request data into a query.",
      "severity": "HIGH",
      "summary": "Jit Bot commands and options (e.g., ignore issue)"
    },
    {
      "security_control": "Secret Detection",
      "type": "Private-Key",
      "description": "Private Key",
      "severity": "HIGH",
      "summary": "Jit Bot commands and options (e.g., ignore issue)"
    }
  ],
  "metrics": {
    "HIGH": 2,
    "MEDIUM": 0,
    "LOW": 0,
    "INFO": 0
  }
}
```

Assign the output to a variable

```yaml+jinja
jit: {{ pr | extractJitFindings }}
```

Add a label if Jit detected secrets in the PR 

```yaml+jinja

automations:
    add_bugs_label:
      if:
        - {{ jit.metrics.HIGH > 0 }}
      run:
        - action: add-label@v1
          args:
            label: "Vulnerable code!""
```

#### `extractSonarFindings`
!!! Warning ":fontawesome-brands-github: Available in GitHub only"

    This filter is currently availalbe only in GitHub

Get an object with a summary of the findings found by the SonarCloud scan. This filter is relevant only for repos that use SonarCloud to scan PRs

The `pr` context includes all the comments added to the pull request, including the comment written by the SonarCloud bot that holds a summary of its scan. 

This filter reads and parses the comment with SonarCloud's scan summary and makes them available to use inside the `.cm` file automations.

The output is an object of the following format:
``` JSON
{
  "bugs": {
      "count": number,
      "rating": 'string' //('A'-'E')
    },
  "code_smells": {
      "count": number,
      "rating": 'string' //('A'-'E')
    },
  "vulnerabilities": {
      "count": number,
      "rating": 'string' //('A'-'E')
    },
  "security_hotspots": {
      "count": number,
      "rating": 'string' //('A'-'E')
    },
  "duplications": number,
  "coverage": number
}
```
<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`pr`](./context-variables.md#pr)  | The `pr` context variable  |
| -     | Output   | Object   | The object contains the summary of SonCloud's scan |

</div>

Example of the filter output
```json
{
  "bugs": {
      "count": 1,
      "rating": 'B'
    },
  "code_smells": {
      "count": 2,
      "rating": 'B'
    },
  "vulnerabilities": {
      "count": 2,
      "rating": 'E'
    },
  "security_hotspots": {
      "count": 0,
      "rating": 'A'
    },
  "duplications": 3,
  "coverage": 70
}
```

Assign the output to a variable

```yaml+jinja
sonar: {{ pr | extractSonarFindings }}
```

Add a label with the number of bugs if the bugs rating is other than 'A', and use [mapToEnum](#maptoenum) to set its color

```yaml+jinja
automations:
# Add Bugs label
  show_bugs_count:
    if:
      - {{ sonar.bugs.count > 0}}
    run:
      - action: add-label@v1
        args:
          label: '🐞 x {{ sonar.bugs.count }} Bugs'
          color: {{ sonar.bugs.rating | mapToEnum(enum = colors) }}

colors:
  A: '05AA02'
  B: 'B6D146'
  C: 'EABE05'
  D: 'DF8339'
  E: 'D4343F'
```

#### `explainRankByGitBlame`

This filter helps to explain the results of [`rankByGitBlame`](#rankbygitblame), the output is in Markdown format that can be used in a PR comment. 

The output lists the Git provider users, e.g., GitHub users, which are mapped from the Git users included in the `git-blame` output. Git users that could not be automatically mapped are marked with `*`. To map these users, you can add `user_mapping` see instructions [here](/cm-file#config).

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`repo`](./context-variables.md#repo)  | The `repo` context variable  |
| `lt`     | Input    | Integer  | Filter the user list, keeping those below the specified threshold  |
| `gt`  | Input  | Integer  | Filter the user list, keeping those above the specified threshold  |
| -     | Output   | String   | Explaining [`rankByGitBlame`](#rankbygitblame) results in markdown format |

!!! note 

    Each contributor's result is rounded down to the nearest integer, so the total may add up to less than 100%.

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
| -     | Input    | [`repo.contributors`](./context-variables.md#repo)  | List of contributors in the repo |
| -     | Input    | String  | The contributor name |
| -     | Output   | Bool   | `true` if its the first commit of the selected contributor |

</div>

```yaml+jinja
if: 
  - {{ repo.contributors | isFirstCommit(branch.author) }}
run: 
  - action: add-comment@v1
    args:
      comment: "Welcome {{branch.author}}!"
```

#### `isFormattingChange`

Return `true` if all file diffs are validated as formatting changes. This filter function works for JavaScript, TypeScript, Python, JSON, YAML and HTML.

gitStream determines formatting changes by minifying the source code for the incoming changes and the existing code and comparing them. If they are identical, this filter function returns `true`. If any unsupported languages are contained in the PR, gitStream will return `false`. 

<div class="filter-details" markdown=1>

| Argument       | Usage    | Type   | Description                                     |
| ------------ | ---------|--------|------------------------------------------------ |
| -     | Input    | [`source.diff.files`](./context-variables.md#source)  | List of file diffs  |
| -     | Output   | Bool   | `true` if the all code changes are non functional |

</div>

```yaml+jinja
{{ source.diff.files | isFormattingChange }}
```


#### `mapToEnum`

Get the enum value matches to the input key

<div class="filter-details" markdown=1>

| Argument | Usage    | Type      | Description                                     |
| ------ | ---------|-----------|------------------------------------------------ |
| - | Input  | String  | The key name  |
| `enum` | Input   | Enum Object  | The enum object to which the input string should be matched |
| - | Output | Object      | The value of the input key in the input enum object |

</div>

For example, set a label color according to names in the enum:

```yaml+jinja	
automations:
  label_color:
    if:
       - true
	run:
	  - action: add-label@v1
	    args:
	      label: 'Blue label'
	      color: {{ "blue" | mapToEnum(enum = colors) }}

colors:
  red: 'FF0000'
  green: '00FF00'
  blue: '0000FF'
  yellow: 'FFFF00'
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
| -     | Input    | [`repo`](./context-variables.md#repo)  | The `repo` context variable  |
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
| -     | Input    | [`repo`](./context-variables.md#repo)  | The `repo` context variable  |
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
