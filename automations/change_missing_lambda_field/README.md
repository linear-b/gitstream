# Change Missing Lambda Information

If a PR creates a new Lambda function, but lacks a description field, gitStream will request changes and post a comment that explains why. 

![Change Missing Lambda Info](change_missing_lambda_information.png)

Conditions (all must be true):
* The PR contains an update to a Lambda function.
* The affected files are missing a description field.

Automation Actions:
* Add a `lambda-missing-field` label to the PR.
* Request changes and post a comment that explains why.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation



