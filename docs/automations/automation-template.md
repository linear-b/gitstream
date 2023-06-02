# Automation Name
<!-- 
How to publish a new automation:
1. Create a new directory under the automations directory that matches the name of the new automation
2. Copy this file to the new directory and change the file name to README.md. 
3. Place the related CM file and example image in the same directory and give the files the same name as the automation.
4. Change all instances of "Automation Name" to match the name of your automation
5. Add a short description and image, and fill in the list of conditions and automation actions.
6. Delete this comment and publish the automation!
!-->
Short description

<div class="automationImage" style="align:right" markdown="1">
![Automation Name](automation_name.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * Condition 1

    Automation Actions:

    * Action 1

</div>

!!! example "Automation Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/automation_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/automation_name.cm){ .md-button }
      </span>
    </div>



