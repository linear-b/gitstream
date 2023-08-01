---
title: Automation - Automation Name
description: 
---
# Automation Name
<!-- 
How to publish a new automation:
1. Create a new directory under the automations directory that matches the name of the new automation
2. Copy this file to the new directory and change the file name to README.md. 
3. Place the related CM file and example image in the same directory and give the files the same name as the automation.
4. Change all instances of the term list below to match the example.
5. Add a short description and image (update the image link too), and fill in the list of conditions and automation actions.
6. Fill in the meta description at the top.
7. If relevant, add the automation to the related file in /docs/snippets and update the related automations section below to import the correct lines of that snippet.
8. Delete this comment and publish the automation!

Replace the following terms, all terms are case sensitive to make find and replace easier:
* automation-name - The Hyphenated name of the automation for URLs.
* Automation Name - The human-readable name for the automation.
* automation_name - The name of the automation with words separated by underscores. This is for the associated CM file. 
* RELATED - The name of the associated snippet file that contains related automations.
!-->
Short description

<div class="automationImage" markdown="1">
![Automation Name](/automations/automation-library/standard/automation-name/automation-name.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * Condition 1

    Automation Actions:

    * Action 1

</div>
<div class="automationExample" markdown="1">
!!! example "Automation Name"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/automation_name.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/automation_name.cm){ .md-button }
      </span>
    </div>
</div>

## Additional Resources

--8<-- "docs/snippets/general.md"

**Related Automations**:

--8<-- "docs/snippets/RELATED.md::1"
--8<-- "docs/snippets/RELATED.md:3:"

--8<-- "docs/snippets/automation-footer.md"