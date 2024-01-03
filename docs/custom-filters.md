---
search:
  exclude: true
---

# Custom filters

gitStream enables you to build custom JavaScript plugins to extend its functionality for more advanced data processing and pulling data from external APIs. gitStream plugins are based on the [CommonJS](https://en.wikipedia.org/wiki/CommonJS) module standard, a widely used pattern for structuring and importing JavaScript modules. This approach enables you to create and integrate custom filters and functionalities seamlessly within your gitStream automations.

Check here for community plugins: [Plugins](https://docs.gitstream.cm/plugins).

### Example: a simple custom filter

Here's an example of a simple custom filter that replaces the word “banana” with a banana emoji (🍌).

In your repository project, navigate to the `.cm` folder and create the `.cm/plugins/filters/bananify` path with the following `index.js` file.

```js
module.exports = (text) => {
  return text.replaceAll('banana', '🍌');
}
```

You should see the following directory structure:

```
.
├─ .cm/
│  ├─ gitstream.cm
│  └─ plugins/filters/bananify
│     └─ index.js
```

You can now use this custom filter in your repository gitStream automations. Here's an example of how to use it in a CM automation script:

```yaml+jinja
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

In this example, the `bananify` filter is applied to the pull request description. gitStream will post a comment that changes all occurrences of the word “banana” with a banana emoji.

## Folder structure

Custom plugins in gitStream are organized using a specific folder structure. In the desired repository, place your filter plugins in the following location:
```.cm/plugins/filters/<filterName>/index.js```

```
.
├─ .cm/
│  ├─ gitstream.cm
│  └─ plugins/filters/<filterName>
│     └─ index.js
```

To use filters in all your repositories, place these filters in your `cm` repository in the following location: `plugins/filters/<filterName>/index.js`

```
.
├─ gitstream.cm
└─ plugins/filters/<filterName>
   └─ index.js
```

!!! Tip

    If two filters have the same name, the one in the repository overrides the one at the organization level.


#### Asynchronous Filters

When using async JavaScript in your plugin, beside using the `async` keyword on the function definitions and passing on the `callback` as the last argument to the function, the module should also export an `async` property marker that indicates it is an async function. 


```javascript
module.exports = {
   async: true, // (1)
   filter: async (/* args */, callback) => { // (2)
    // filter implementation details
    // ...
    const error = null;
    return callback(error, unique); // (3)
  },
}
```

1.  Export module property `async: true` 
2.  Export function `filter: async (..., callback) => { }`
2.  Return the `callback` with `error` object as its first argument

When using the async function, it is required to return a promise that includes both the error info and the result of the filter, see details in the example below.

#### Debug and error handling

When using `console.log` the output is printed as logs in the workflow runner, e.g. GitHub action log. 

Errors in async plugins are output as logs. 

gitStream actions are terminated by default after 15 minutes, with no current option for extending this limit.

## Example: Creating a Async Custom Filter

When implementing an asynchronous filter, ensure that your `index.js` file exports an asynchronous function. This function should return a `Promise` that resolves with the desired output.

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

module.exports = {
   async: true,
   filter: sayHello,
}
```

#### Available JavaScript Packages

gitStream supports the following JavaScript dependencies:

1. [axios](https://github.com/axios/axios)
2. github actions core (@actions/core)
3. [moment](https://github.com/moment/moment)
4. [lodash](https://github.com/lodash/lodash)
5. octokit rest api (@octokit/rest)

No other dependencies are supported at this time. If you have recommendations for new dependencies, please open a new issue on the [gitStream GitHub repo](https://github.com/linear-b/gitstream).
