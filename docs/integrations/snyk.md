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
* Snyk - The human-readable name for the integration
* snyk - The hyphenated name for the integration (lowercase). E.g. "snyk"
* Auto-Approve Snyk Dependency Updates/Two/Three/Four - The human-readable names for the individual automation examples.
* approve-snyk/two/three/four - The hyphenated name for the individual automations (lowercase). E.g. "automation-name"
-->
---
title: Integrate gitStream with Snyk
description: Implement workflow automations for Snyk.
---
# Integrate gitStream with Snyk

<a name="approve-snyk"></a>
## Auto-Merge Snyk Dependency Updates
--8<-- "docs/automations/integrations/snyk/approve-snyk/README.md:example"