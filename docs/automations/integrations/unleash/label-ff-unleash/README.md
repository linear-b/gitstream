---
title: Automation - Label PRs Based on Unleash Feature Flags
description: Automatically label code that contians specified feature flags.
category: [featureflag, unleash]
---
# Label Unleash Feature Flags

<!-- --8<-- [start:example]-->

Automatically label code that contians specified feature flags.

![Label PRs Based on Feature Flags](/automations/integrations/unleash/label-ff-unleash/label-ff-unleash.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR adds one or more feature flag keys.

    Automation Actions:

    * Label the PR for each feature flag key introduced in the PR.

<div class="automationExample" markdown="1">
!!! example "Label PRs Based on Feature Flags"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/unleash/label-ff-unleash/label_ff_unleash.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/unleash/label-ff-unleash/label_ff_unleash.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
