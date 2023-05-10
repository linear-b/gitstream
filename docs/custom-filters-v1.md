# Custom filters V1

Custom filters are JavaScript code snippets that will be embedded into gitStream's functionality after a review and approval process by our engineers.

!!! Attention

    :octicons-beaker-24: Coming soon


###  Creating filters

Filters can have input parameters of any type allowed in the `.cm` file. The 1st argument should be piped to the filter, and the rest of the arguments must be used as conventional function arguments.

Filters must return a valid JavaScript type (i.e. Bool, Int, String, Object, etc...)

#### Dependencies
!!! Attention
    TBD

    Consult with gitStream's team if the custom filter requires any dependencies

### Custom filter example:
The following example shows a filter that receives the [pr context](context-variables.md#pr), and a commenter name as its input, and returns `true` if the last [general comment](context-variables.md#generalcomment-structure)'s author equals the commenter name, and the content contains the string "foo". Otherwise, it returns `false`.

```ts
const myFilter = (pr_context: any, commenter: string) => {
  const comments = pr_context.general_comments;
  if (!comments || comments.length === 0) {
    return false; // If there are no comments or comments array is empty, return false
  }

  const lastComment = comments[comments.length - 1];
  return (lastComment.commenter === commenter && lastComment.content.includes('foo')); // check the criteria for the last comment
};
```

#### Filter usage in gitStream
Once the filter has been added to gitStream, it can be used as any other high-level filter:

Approve the PR if the value of `myFilterOutput` is `true`:
```yaml+jinja
automations:
# approve the PR if the value of `myFilterOutput` is `true`
  if:
    - {{ pr | myFilter("bar") }}
  run:
    - action: approve@v1
```
### Local testing
!!! Attention
    TBD
