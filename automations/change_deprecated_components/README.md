# Change Deprecated Components

Request changes when a PR includes one or more deprecated components.

![Change Deprecated Components](change_deprecated_components.png)

Conditions (all must be true):
* A PR contains one or more references to functions, methods, or classes that have been designated as deprecated.

Automation Actions:
* Add a `deprecated-component` label to the PR
* Request changes to the PR and post a comment that explains what deprecated component was included and what the alternative is.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation



