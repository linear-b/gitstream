# Check for Jira ticket in PR title

It is common practice to require linking the Jira ticket with the PR, to allow reviewers to get more context on the change. gitStream can help enforce that practice automatically, saving reviewers time and improving overall quality for the team.

The automation checks for a ticket either in the PR title or PR description.

The condition basically uses the following regular expression: 

```
{{ pr.title | includes(regex=r/^\[?\w{3,4}-\d{1,6}\]?(\s|-|_).{20,}$/) }}
```

The `pr.title` holds the PR title, which is piped as the input for the next filter function `includes`. The `includes` function use a regex to check for Jira ticket reference.

The regular expression `r/^\[?\w{3,4}-\d{1,6}\]?(\s|-|_).{20,}$/` is a pattern that can be used to match text strings that contain Jira issue keys, which have a specific format of three or four uppercase letters followed by a hyphen and one to six digits. It also allows the Jira key to be enclosed in optional square brackets at the beginning of the string.