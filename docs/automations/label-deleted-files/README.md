# Label Deleted Files

Label PRs that delete files.

![Label Deleted Files](label_deleted_files.png)

Conditions (all must be true):

* The PR deletes one or more files.

Automation Actions:

* Apply a `deleted-files` label to the PR.

!!! example "Label Deleted Files"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/label_deleted_files.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/label_deleted_files.cm){ .md-button }
      </span>
    </div>