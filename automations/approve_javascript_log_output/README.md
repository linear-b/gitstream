# Approve JavaScript Log Output Changes

Approve changes to JavaScript files that only affect lines of code that invoke the console.log() method.

![JavaScript Log Output](approve_javascript_log_output.png)

Conditions (all must be true):
* All files must end in .js or .ts
* The changes only affect lines of code that invoke console.log()

Automation Actions:
* Applies a `log-output-only` label
* Approves the PR
* Posts a comment explaining that the change only affects logging output.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation