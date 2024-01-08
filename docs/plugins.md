---
title: Filter Function Plugins
description: Use JavaScript plugins to extend gitStream capabilities, connect gitStream to external APIs, and handle more advanced use cases.
---

# Filter Function Plugins

gitStream enables you to build JavaScript plugins to extend functionality for more advanced data processing and pulling data from external APIs. Use gitStream plugins to seamlessly create and integrate custom filters and other capabilities within your gitStream automations.

!!! example "Example: isFlaggedUser"
    Here is an example of a filter function plugin that evaluates a username input against a list of specified usernames and returns true if the user is in the list.

    ``` JavaScript
    const flaggedUsers = ["user1", "user2"];

    function isFlaggedUser(username) {
        if (flaggedUsers.includes(username)) {
            return true;
        } else {
            return false;
        }
    };

    module.exports = isFlaggedUser;
    ```
    This creates a new `isFlaggedUser` filter function that can be invoked inside gitStream CM files. For example, you can use this to enable gitStream automations to trigger only for specific PR authors.

    ```yaml+jinja
    automations:
      detect_flagged_user:
        if:
          - {{ pr.author | isFlaggedUser }}
        run:
          - action: add-comment@v1
            args:
              comment: {{ pr.author }} is a gitStream user.
    ```

## Installation

gitStream plugins can be installed for an entire git organization or for individual repos.

!!! warning "Repository Plugins Take Precedence"

    If two filter function plugins have the same name, the repository-level plugin overrides the organization-level plugin.

=== "Org-Level"

    To use a filter function plugin in all your repositories, place it inside your `cm` repository in the following location: 
    
    `plugins/filters/<filterName>/index.js`

    !!! success
        Once installed, you should have a directory structure that looks like this:
        ```
        .
        ├─ gitstream.cm
        └─ plugins/filters/<filterName>
           └─ index.js
        ```

=== "Repo-Level"

    To use a filter function plugin for a single repository, place it inside the repo in the following location: 
    
    `.cm/plugins/filters/<filterName>/index.js`

    !!! success
        Once installed, you should have a directory structure that looks like this:
        ```
        .
        ├─ .cm/
        │  ├─ gitstream.cm
        │  └─ plugins/filters/<filterName>
        │     └─ index.js
        ```

!!! tip "gitStream Community Plugins"
    We maintain an official list of community-contributed gitStream plugins. [Click here to explore plugin examples](/filter-function-plugins).

## Usage
Once installed, you can call your new plugins inside CM files using the same conventions as the built in filter functions. 
Filters are called with a pipe operator (`|`) and can take arguments. The first argument must be declared before the pipe, and all remaining arguments are passed as a set inside parenthesis. For example:
```
{{ "Hello" | plugin(" world!") }}
```
If the filter does not expect any arguments, you can invoke it by passing an empty string:
```
{{ "" | myFilter }}
```
## Create Filter Function Plugins

gitStream plugins are based on the [CommonJS](https://en.wikipedia.org/wiki/CommonJS) module standard, a widely used pattern for structuring and importing JavaScript modules. 

!!! info "Supported JavaScript Dependencies"
    gitStream supports the following JavaScript dependencies: [axios](https://github.com/axios/axios), github actions core (@actions/core), [moment](https://github.com/moment/moment), [lodash](https://github.com/lodash/lodash), octokit rest api (@octokit/rest)

    No other dependencies are supported at this time. If you have recommendations for new dependencies, please open a new issue on the [gitStream GitHub repo](https://github.com/linear-b/gitstream).

### Define a New Plugin

Each filter function plugin must have its own unique directory inside the appropriate `/filters` directory for your repo or organization. To create a new filter function, create an index.js file inside the plugin's top-level directory, all plugins must have an index.js file that serves as the primary entry point

One of the functions contained inside this file must be exported via `module.exports`, using the following conventions:

=== "Synchronous"
    Export plugins that use synchronous code:
    
    ``` javascript
    function myFilter(author) {
        return "Hello ${author}!";
    };

    module.exports = myFilter;
    ```
    
=== "Asynchronous"
    When using async JavaScript in your plugin, you need two things:

    * A primary async function that returns a `callback()` containing any errors as the first argument and the result of the filter as the second.
    * A `module.exports` statement that includes the properties `async: true` and `filter: <filterName>` with `<filterName>` matching the primary function that's being exported.

    ``` javascript
    const myFilter = async (author, callback) => {
        const message = { text: "Hello ${author}!" };
        const error = null;
        return callback(error, message.text); 
    };
    
    module.exports = {
        async: true,
        filter: myFilter
    }
    ```

    !!! info "Async Error Handling"
        Errors reported by async plugins are output to the workflow runner logs. E.g. GitHub Actions, GitLab CI, etc.

Here's how to invoke the new filter from this example:

```yaml+jinja
automations:
  welcome_author:
    if:
      - true
    run:
      - action: add-comment@v1
        args:
          comment: {{ pr.author | myFilter }}
```

!!! tip "Debugging with console.log()"
    Data passed to `console.log()` is output in your workflow runner logs, e.g. GitHub Actions, GitLab CI, etc.

!!! warning "15 Minute Time Limit"
    gitStream actions are terminated after 15 minutes, this is a hard limit that can't be extended.

### Accept Arguments

Filter function plugins can accept any number of arguments. The first argument must be passed to the filter function via a ` | ` operator; all subsequent arguments are passed as a set inside parenthesis. 

!!! example "Filter function to combine two strings"

    This example accepts two strings and combines them, separating by a space:

    ```javascript
    function combineStrings(str1, str2) {
      return str1 + " " + str2;
    }
    module.exports = combineStrings;
    ```
    
    In the following invocation, "Hello" is passed as `str1` and "world!" is passed as `str2`

    `{{ "Hello" | combineStrings("world!") }}`

## Next Step

!!! tip "Check out the community plugin library."
    Check out the [filter function plugin library](/filter-function-plugins) to explore plugins created by the LinearB community.

## Contribute to the Community Plugin Library

LinearB maintains a collection of [community-contributed gitStream plugins](/filter-function-plugins). Here are the instructions for publishing a plugin as part of this library.

Create a directory for your plugin inside one of the subdirectories in `plugins/filters`. The name of the directory must match the name of the exported JavaScript function. Then ensure you have all of the required files and JSDoc content outlined below.

Here is an [example of a well-designed gitStream plugin](https://github.com/linear-b/gitstream/tree/main/plugins/filters/isFlaggedUser).

Required Files:

* index.js - The entry point for your plugin. This should have a main function that is exported via `module.exports` that is documented according to the JSDoc requirements outlined below.
* README.md - Use this [template](https://github.com/linear-b/gitstream/tree/main/docs/templates/filter-readme-template.md).
* reference.md - This file must be auto-generated by `jsdoc2md`, see the instructions below.
* plugin_name.cm - A gitStream CM example that uses the plugin.
* LICENSE - The full text of the open source license the code is provided under.

Required JSDoc tags:

* `@module` - This must match the name of the exported JavaScript function.
* `@description` - A 1-2 line description that wholistically describes the functionality of the plugin.
* `@param` - There should be one `@param` tag for each argument the plugin accepts, with indicated types. Indicate which parameter is the default input parameter with the name "Input."
* `@returns` - Provide the type and a short description.
* `@example` - Simple examples that show how to invoke the plugin.
* `@license` - The name of the lincense contained in the LICENSE file. 

Here is an example of properly formatted JSDoc content:


```javascript
/**
 * @module isFlaggedUser
 * @description Returns true if the username that is passed to this function is specified in a predefined list of users. 
 * This is useful if you want gitStream automations to run only for specified users.
 * @param {string} Input - The GitHub username to check.
 * @returns {boolean} Returns true if the user is specified in the flaggedUsers list, otherwise false.
 * @example {{ pr.author | isFlaggedUser }}
 * @license MIT
**/
```

***How to Generate Plugin Reference Markdown***

You can use jsdoc2md to convert the JSDoc content of your plugin to markdown using templates we've provided. First install jsdoc2md: 

```npm install -g jsdoc-to-markdown```

Then, invoke the following command from inside your plugin directory:

`jsdoc2md --partial ../../../docs/snippets/partials/body.hbs --partial ../../../docs/snippets/partials/sig-name.hbs --files index.js > reference.md`

This should output a reference.md file that contains properly formatted markdown based on the JSDoc contents of your plugin.