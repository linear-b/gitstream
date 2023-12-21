---
search:
  exclude: true
---

# Custom filters

gitStream enables you to build custom Javascript plugins to extend its functionality for more advanced data processing and pulling data from external APIs. gitStream plugins are based on the [CommonJS](https://en.wikipedia.org/wiki/CommonJS) module standard, a widely used pattern for structuring and importing JavaScript modules. This approach enables you to create and integrate custom filters and functionalities seamlessly within your gitStream automations.

## Folder structure

Custom plugins in gitStream are organized using a specific folder structure:

#### Specific Repo Filters

In the desired repository, place your filter plugins in the following location:
```.cm/plugins/filters/<filterName>/index.js```

#### Asynchronous Filters

Name asynchronous filters with an Async suffix, e.g.:
```.cm/plugins/filters/<filterNameAsync>/index.js```

Name asynchronous filters with an **Async** suffix when creating an asynchronous filter, it's crucial to follow the naming conventions for both the folder structure and the usage within CM scripts:

1. Folder Naming: The folder name for an asynchronous filter should include the `Async` postfix. This naming convention helps gitStream to recognize and handle the filter appropriately. For example, if your filter's name is `dataFetcher`, the folder should be named `dataFetcherAsync`, e.g. `.cm/plugins/filters/dataFetcherAsync/index.js`.

2. Usage in CM Scripts: Similarly, when using the asynchronous filter in your CM scripts, include the `Async` postfix in the filter name. This ensures that gitStream processes the filter as an asynchronous operation, e.g. In your CM script, refer to the above filter as `dataFetcherAsync`.

Implementation requires to return a promise that includes both the error info and the result of the filter, see details in the example below.

!!! Note

    Errors in async plugins are output as logs. Users can implement their own error handling; otherwise, gitStream will log errors in its default format.

#### Org Level Filters

Place these filters in your `cm` repository in the following location:
```plugins/filters/<filterName>/index.js``` 

!!! Tip

    If two filters have the same name, the one in the repository currently overrides the one at the organization level.

## Error handling

Timeout: gitStream actions are terminated by default after 15 minutes, with no current option for extending this limit.

#### Filter usage in gitStream

Once you've created your custom plugin, it can be called using the same convention as default gitStream filter functions, for example:

```{{ "one banana" | bananify }}```

## Example: Creating a Custom Filter

Here's an example of a simple custom filter that replaces the word "banana" with a banana emoji (🍌).

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

In this example, the bananify filter is applied to the pull request description. gitStream will post a comment that changes all occurrences of the word "banana" with a banana emoji.

## Example: Creating a Async Custom Filter

When implementing an asynchronous filter, ensure that your `index.js` file exports an asynchronous function. This function should return a Promise that resolves with the desired output.

Example `index.js` for an asynchronous filter:

```js
const axios = require('axios');

const sayHelloAsync = async (params, callback) => {
  const webhookUrl = 'WEBHOOK_URL';
  const message = {
    text: "Hello From 'sayHello' plugin from parser",
  };
  const result = await axios.post(webhookUrl, message);
  const error = null;
  return callback(error, result); 
};

module.exports = sayHello;
```

#### Available JavaScript Packages

gitStream supports the following JavaScript dependencies:

1. [axios](https://github.com/axios/axios)
2. github actions core (@actions/core)
3. [moment](https://github.com/moment/moment)
4. [lodash](https://github.com/lodash/lodash)
5. octokit rest api (@octokit/rest)

No other dependencies are supported at this time. If you have recommendations for new dependencies, please open a new issue on the [gitStream GitHub repo](https://github.com/linear-b/gitstream).
