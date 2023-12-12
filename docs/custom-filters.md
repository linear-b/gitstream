# Custom filters

gitStream allows the use of custom plugins to extend its functionality, specifically through JavaScript. These plugins are based on the [CommonJS](https://en.wikipedia.org/wiki/CommonJS) module standard, a widely used pattern for structuring and importing JavaScript modules. This approach enables users to create and integrate custom filters and functionalities seamlessly within gitStream automations.

## Folder structure

Custom plugins in gitStream are organized using a specific folder structure:

**Specific Repo Filters**: In the desired repository, place your filter plugins at:
```.cm/plugins/filters/<filterName>/index.js```

**Asynchronous Filters**: Name asynchronous filters with an Async postfix, e.g.:
```.cm/plugins/filters/<filterNameAsync>/index.js```

**Org Level Filters**: Place these filters in your `cm` repository at:
```plugins/filters/<filterName>/index.js``` 

!!! Tip

    If two filters have the same name, the one in the repository currently overrides the one at the organization level.

!!! Note
    
    gitStream actions are terminated by default after 15 minutes, with no current option for extending this limit.

!!! Note 

    Errors in custom plugins are output as logs. Users can implement their own error handling; otherwise, gitStream will log errors in its default format.

#### Filter usage in gitStream

Once the filter has been added to gitStream, it can be used as any other high-level filter, for example:

```{{ "one banana" | bananify }}```

## Example: Creating a Custom Filter

Here's an example of how to create a simple custom filter that replaces the word "banana" with a banana emoji (🍌).

**Create the Filter**: In your gitStream project, navigate to the `.cm/plugins/filters/bananify` directory and create the following `index.js` file:

```js
module.exports = (text) => {
  return text.replaceAll('banana', '🍌');
}
```

**Using the Filter in Automations**: You can use this custom filter in your repository gitStream automations. Here's an example of how to use it in a CM automation script:

```yaml+jinja
# -*- mode: yaml -*-

manifest:
  version: 1.0

automations:
  banana_check:
    if:
      - {{ pr.description | includes(term='banana') }}
    run:
      - action: add-comment@v1
        args:
          comment: |
            BANANAS! {{ pr.description | bananify }}
```

In this example, the bananify filter is applied to the pull request description, and if the word "banana" is found, it's replaced with a banana emoji in the comment added by the automation.


#### Using external packages 

The following dependencies are supported in your plugin:

1. [axios](https://github.com/axios/axios)
2. github actions core (@actions/core)
3. [moment](https://github.com/moment/moment)
4. [lodash](https://github.com/lodash/lodash)
5. octokit rest api (@octokit/rest)

As of now, the integration of additional external packages beyond these specified ones is not supported.
