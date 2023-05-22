# Approve and Merge Dependabot Changes

Approve PRs from Dependabot

Conditions (all must be true):

* The PR author is Dependabot.
* The branch name includes 'dependabot'

Automation Actions:

* Approve the PR
* Apply an `approved-dependabot` label to the PR
* Merge the PR if all status checks pass.


!!! example "Approve Dependabot"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/dependabot/approve_dependabot.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/dependabot/approve_dependabot.cm){ .md-button }
      </span>
    </div>



