# Review Jit Ignore and Accept
Notify your Security team when someone ignores a Jit vulnerability report and accepts the risk.


Conditions (all must be true):

* Someone [ignores and accepts](https://docs.jit.io/docs/ongoing-monitoring-of-pull-requests#the-developer-addresses-the-finding) a Jit finding

Automation Actions:

* Request review from the organization’s security team.
* Post a comment explaining why this action was taken.


!!! example "Review Jit Ignore and Accept"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/jit/review_jit_ignore_accept.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/jit/review_jit_ignore_accept.cm){ .md-button }
      </span>
    </div>



