# Custom filters V1

Custom filters are JavaScript code snippets that will be embedded into gitStream's functionality after a review and approval process by our engineers.

!!! Attention

    :octicons-beaker-24: Coming soon


## Creating filters

Filters can have input parameters of any type allowed in the `.cm` file. The 1st argument can be piped to the filter, and the rest must be used as conventional function arguments.

Filters must return a valid JavaScript type (i.e., Bool, Int, String, Object, etc...)

#### Dependencies
!!! Attention
    TBD

    Consult with gitStream's team if the custom filter requires any dependencies.
## Examples

### Basic custom filter
The following example shows a filter that receives a string and returns its length.
```ts
const strLengthFilter = (str: string) => {
	return str.length;
}
```

#### Filter usage in gitStream
Once the filter has been added to gitStream, it can be used as any other high-level filter. Since it receives only one argument, it can be piped or passed as a function argument, for example:

`{{ "my string" | strLengthFilter }}`,  or  `{{ strLengthFilter("my string") }}` 

### Custom filter with context variable
The following example shows a filter receiving the pr context and a commenter name as input. It returns `true` if the last [general comment](context-variables.md#generalcomment-structure)'s author equals the commenter name and the content contains the string "foo". Otherwise, it returns `false`.

```ts
const myFilter = (pr_context: any, commenter: string) => {
  const comments = pr_context.general_comments;
  if (!comments || comments.length === 0) {
    return false; // If there are no comments or the comments array is empty, return false
  }

  const lastComment = comments[comments.length - 1];
  return (lastComment.commenter === commenter && lastComment.content.includes('foo')); // check the criteria for the last comment
};
```

#### Filter usage in gitStream
Approve the PR if the value of `myFilterOutput` is `true`:
```yaml+jinja
automations:
# approve the PR if the value of `myFilterOutput` is `true`.
  if:
    - {{ pr | myFilter("bar") }}
  run:
    - action: approve@v1
```

## Local testing
!!! Attention
    TBD
