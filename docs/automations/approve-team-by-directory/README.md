
# Approve Team by Directory
Approve PRs to a specified directory from a specific team. 

![Approve Team by Directory](approve_team_by_directory.png)

Conditions (all must be true):

* All changed files are inside the `docs` directory
* The PR author is on the `tech-writers` team.

Automation Actions:

* Approve the PR
* Post a comment that explains the approval.

!!! example "Approve Team by Directory"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/approve_team_by_directory.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/approve_team_by_directory.cm){ .md-button }
      </span>
    </div>