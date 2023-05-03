# Close Wrong Team by Directory

Close PRs to a specified directory if the PR author is not on an approved team.

![Close Wrong Team by Directory](close_wrong_team_by_directory.png)

Conditions (all must be true):

* The PR changes one or more files inside `/src/views`. Customize this value for your project.
* The PR author is not a member of the `ui` team. Customize this value for your organization.

Automation Actions:

* Close the PR.
* Post a comment that explains why the PR was closed.

!!! example "Close Wrong Team by Directory"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/close_wrong_team_by_directory.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/close_wrong_team_by_directory.cm){ .md-button }
      </span>
    </div>