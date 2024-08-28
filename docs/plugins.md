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
