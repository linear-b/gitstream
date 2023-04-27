# Approve Python Log Output Changes

Approve changes to Python files that only affect lines of code that invoke a specified logging object.

![Python Log Output](approve_python_log_output.png)


Conditions (all must be true):
* All files must end in .py
* The changes only affect lines of code that invoke a `logger` object. This should be customized to your environment.

Automation Actions:
* Applies a `log-output-only` label
* Approves the PR
* Posts a comment explaining that the change only affects logging output.

Visit the [gitStream docs](https://docs.gitstream.cm/) for more info about how to use this automation

