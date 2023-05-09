# Custom filters V1

Custom filters are Javascript code snipets that will be embedded into gitStream's functionality after a review and approval proccess by our engineers

!!! attention

    :octicons-beaker-24: Coming soon


###  Creating filters

Filters can have at most one input parameter such as the available [context variables](context-variables.md), that is provided to the filter in the `.cm` file using a pipe.

Filters must return a valid Javascript type (i.e Bool, Int, String, Object, etc...)

In addition to the code implemetion of the filter, the filter creator must specify the npm dependecies in JSON format, as it appears in the `package_lock.json` file

### Custom filter example:
The following example shows a filter that recieves the [pr context](context-variables.md#pr) as its input, returns `true` if the last [general comment](context-variables.md#generalcomment-structure)'s author is "foo", and the content contains the string "bar", and returns `false` otherwise.

```ts
const myFilter = (pr_context: any) => {
  const comments = pr_context.general_comments;
  if (!comments || comments.length === 0) {
    return false; // If there are no comments or comments array is empty, return false
  }

  const lastComment = comments[comments.length - 1];
  return (lastComment.commenter === 'foo' && lastComment.content.includes('bar')); // check the criteria for the last comment
};
```

#### Filter usage in gitstream
Once the filter has been added to gitstream, it can be used as any other high-level filter:

Assign the output of `myFilter` into a variable inside the `.cm` file, and approve the PR if the value of `myFilterOutput` is `true`:
```yaml+jinja
automations:
# approve the PR if the value of `myFilterOutput` is `true`
  if:
    - {{ myFilterOutput }}
  run:
    - action: approve@v1

#assign the output of `myFilter` into a variable
myFilterOutput: {{ pr | myFilter }}
```
