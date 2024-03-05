---
title: Automation - Approve and Merge Dependabot Changes
description: Automatically approve and merge Dependabot PRs.
category: [efficiency, security]
quickstart: false
---
# Approve and Merge Dependabot Changes
<!-- --8<-- [start:example]-->
Auto-merge Dependabot PRs

=== "All Updates"
    !!! info "Configuration Description"

        Conditions (all must be true):

        * The PR author is Dependabot.
        * The branch name includes 'dependabot'

        Automation Actions:

        * Approve the PR
        * Apply an `approved-dependabot` label to the PR
        * Merge the PR if all status checks pass.


    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/dependabot/approve_dependabot.cm"
        ```
        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/dependabot/approve_dependabot.cm){ .md-button }
          </span>
        </div>

=== "By Release Type"

    !!! warning "Required gitStream Plugins"
        This example requires you to install the [`extractDependabotVersionBump`](/filter-function-plugins/#extractdependabotversionbump) and [`compareSemver`](/filter-function-plugins/#comparesemver) plugins.

        [Learn more about gitStream plugins](/plugins/).

    !!! info "Configuration Description"

        Conditions (all must be true):

        * The PR author is Dependabot.
        * The branch name includes 'dependabot'
        * The dependency change is a patch or minor update.

        Automation Actions:

        * Approve the PR
        * Apply an `approved-dependabot` label to the PR
        * Merge the PR if all status checks pass.

    !!! example "Configuration Example"
        ```yaml+jinja
        --8<-- "docs/downloads/automation-library/integrations/dependabot/approve_dependabot_minor.cm"
        ```
        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/dependabot/approve_dependabot_minor.cm){ .md-button }
          </span>
        </div>

<!-- --8<-- [end:example]-->
