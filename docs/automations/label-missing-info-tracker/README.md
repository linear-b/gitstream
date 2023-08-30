# Label Missing Info Tracker

Label PRs that lack a reference to a project tracker issue (Jira, Azure Boards, Shortcut and Asana) in the PR title or description.

<div class="automationImage" markdown="1">
![Label Missing Info Tracker](/automations/label-missing-info-tracker/label-missing-info-tracker.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR lacks a project tracker ticket number in the title, or a link to a project tracker resource in the PR description.

    Automation Actions:

    * Apply Label : `⚠️ Missing Project Tracker`
    * Post a comment informing the author to provide reference to associated project tracker resource.

</div>
<div class="automationExample" markdown="1">
!!! example "Label Missing Info Tracker"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/label_missing_info_tracker.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/label_missing_info_tracker.cm){ .md-button }
      </span>
    </div>
</div>