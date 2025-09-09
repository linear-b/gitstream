---
title: Filter Function Plugin Library
description: Implement custom gitStream filter functions with JavaScript.
---
# Filter Function Plugin Library

JavaScript plugins that enable custom filter functions for gitStream. To learn how to use these examples, read our [guide on how to use gitStream plugins](/plugins).

--8<-- "plugins/filters/askAI/README.md"

--8<-- "plugins/filters/checklist/README.md"

--8<-- "plugins/filters/compareMultiSemver/README.md"

## compareSemver
!!! note "compareSemver → checkSemver"

    This plugin is now supported by a native filter function [`checkSemver`](/filter-functions/#checksemver). The native implementation provides better performance and doesn't require plugin installation.

## extractDependabotVersionBump
!!! note "extractDependabotVersionBump → checkDependabot"

    This plugin is now supported by a native filter function [`checkDependabot`](/filter-functions/#checkdependabot). The native implementation provides better performance and doesn't require plugin installation.

--8<-- "plugins/filters/extractRenovateVersionBump/README.md"

--8<-- "plugins/filters/extractSnykVersionBump/README.md"

--8<-- "plugins/filters/extractOrcaFindings/README.md"

--8<-- "plugins/filters/generateDescription/README.md"

--8<-- "plugins/filters/getCodeowners/README.md"

--8<-- "plugins/filters/hasJiraIssue/README.md"

--8<-- "plugins/filters/isFlaggedUser/README.md"

---
