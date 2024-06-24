---
title: Automation - Approve and Merge Renovate Changes
description: Automatically approve and merge Renovate PRs.
category: [efficiency, renovate, security]
quickstart: false
---
# Approve and Merge Renovate Changes
<!-- --8<-- [start:example]-->
Auto-merge Renovate PRs

=== "By Release Type"

    !!! warning "Required gitStream Plugins"
        This example requires you to install the [`extractRenovateVersionBump`](/filter-function-plugins/#extractrenovateversionbump), [`compareMultiSemver`](/filter-function-plugins/#comparemultisemver) and [`compareSemver`](/filter-function-plugins/#comparesemver) plugins.

        [Learn more about gitStream plugins](/plugins/).

    !!! info "Configuration Description"

        Conditions (all must be true):

        * The PR author is Renovate.
        * The branch name includes 'renovate'
        * The dependency change is a patch or minor update.

        Automation Actions:

        * Approve the PR
        * Apply an `approved-renovate` label to the PR
        * Merge the PR if all status checks pass.

    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/renovate/approve_renovate_minor.cm"
        ```
        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/renovate/approve_renovate_minor.cm){ .md-button }
          </span>
        </div>

=== "All Updates"
    !!! info "Configuration Description"

        Conditions (all must be true):

        * The PR author is Renovate.
        * The branch name includes 'renovate'

        Automation Actions:

        * Approve the PR
        * Apply an `approved-renovate` label to the PR
        * Merge the PR if all status checks pass.


    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/renovate/approve_renovate.cm"
        ```
        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/renovate/approve_renovate.cm){ .md-button }
          </span>
        </div>

<!-- --8<-- [end:example]-->
