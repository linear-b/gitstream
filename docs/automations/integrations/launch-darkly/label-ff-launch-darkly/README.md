---
title: Automation - Label PRs Based on LaunchDarkly Feature Flags
description: Automatically label code that contians specified feature flags.
category: [featureflag, launchdarkly]
---
# Label LaunchDarkly Feature Flags

<!-- --8<-- [start:example]-->

Automatically label code that contians specified feature flags.

![Label PRs Based on Feature Flags](/automations/integrations/launch-darkly/label-ff-launch-darkly/label-ff-launch-darkly.png)

!!! info "Configuration Description"

    Conditions (all must be true):

    * The PR adds one or more feature flag keys.

    Automation Actions:

    * Label the PR for each feature flag key introduced in the PR.

<div class="automationExample" markdown="1">
!!! example "Label PRs Based on Feature Flags"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/launch-darkly/label-ff-launch-darkly/label_ff_launch_darkly.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/launch-darkly/label-ff-launch-darkly/label_ff_launch_darkly.cm){ .md-button }
      </span>
    </div>
<!-- --8<-- [end:example]-->
