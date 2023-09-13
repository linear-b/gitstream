<!--
How to publish a new gitStream integration page.

In a nutshell, the integration pages are published under /docs/integrations, and all associated examples are imported via associated files inside /docs/automations/automation-library/integrations.

Here is a detailed step-by-step:
1. Copy this file to /docs/integrations and name the file after the tool that this integration is for. E.g. dependabot.md, javadoc.md, etc.
2. Create a directory for this automation inside /docs/automations/automation-library/integrations that matches the name of the file from the previous step.
3. Create separate directories for each of the examples that will be displayed on the integration page, and use a hyphenated naming convention. E.g. "automation-name." 
4. Use the automation example template found in the same directory as this file to create the content for all of the automation examples that will be imported into this integration page.
5. Replace all of the terms in the list below.
6. Delete the comment from this file and push your changes!

Replace the following terms from this doc, all terms are case sensitive to make find and replace easier:
* IntegrationName - The human-readable name for the integration
* integration-name - The hyphenated name for the integration (lowercase). E.g. "integration-name"
* One/Two/Three/Four - The human-readable names for the individual automation examples.
* one/two/three/four - The hyphenated name for the individual automations (lowercase). E.g. "automation-name"
-->
---
title: Integrate gitStream with IntegrationName
description: Implement workflow automations for IntegrationName.
---
# Integrate gitStream with IntegrationName

<a name="one"></a>
## One
--8<-- "docs/automations/integrations/integration-name/one/README.md:example"

<a name="two"></a>
## Two
--8<-- "docs/automations/integrations/integration-name/two/README.md:example"

<a name="three"></a>
## Three
--8<-- "docs/automations/integrations/integration-name/three/README.md:example"

<a name="four"></a>
## Four
--8<-- "docs/automations/integrations/integration-name/four/README.md:example"


## Additional Resources

--8<-- "docs/snippets/general.md"

--8<-- "docs/snippets/automation-footer.md"