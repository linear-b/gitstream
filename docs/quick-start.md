---
title: Write Your First gitStream Automation
description: Get started with gitStream in two minutes.
---
# Write Your First gitStream Automation
This article provides Continuous Merge (CM) examples to help you start customizing gitStream automations to meet the needs of your team.
## Approve Simple Changes
Changes to documentation, testing, and code formatting are often safe enough that there is little to no risk in letting an individual contributor merge those changes without needing to distract other people on their team to meet organization-wide requirements for multiple reviews on PRs. A good first Continuous Merge (CM) automation to implement is one that labels and approves changes to resources that could be considered safe changes.

This example uses the filter functions [`allDocs`](/filter-functions/#alldocs), [`allTests`](/filter-functions/#alltests), [`isFormattingChange`](/filter-functions/#isformattingchange) and [`match`](/filter-functions/#match) to detect changes that should be safe to merge with minimal review. It then uses the [`add-label`](/automation-actions/#add-label) automation action to apply a safe-changes label and the [`approve`](/automation-actions/#approve) automation action to provide an approval review.

!!! example "Label and Approve Simple Changes"
    ```yaml+jinja
    # -*- mode: yaml -*-
    manifest:
      version: 1.0
      
    automations:
      safe_changes:
        if:
          - {{ is.docs or is.tests or is.asset or is.formatting }}
        run: 
          - action: add-label@v1
            args:
              label: 'safe-changes'
          - action: approve@v1
    is:
      docs: {{ files | allDocs }}
      tests: {{ files | allTests }}
      asset: {{ files | match(regex=r/\.(png|svg|gif|css)$/) | every }}
      formatting: {{ source.diff.files | isFormattingChange }}
    ```

!!! tip "Test Your Automation in Dry Run Mode"
    gitStream includes a dry-run mode that lets you test your automations on your desired repo without pushing significant code, documentation, or other changes to the repo. 
    
    Learn more in our guide: [How to Test Your Automations](/dry-run-mode/).

## Find Reviewers for Common Changes

Selecting the right reviewer for your PR is crucial to ensure that your changes are thoroughly reviewed and that any issues are identified and addressed before they are merged into the main codebase. 

This example uses the [`codeExperts`](/filter-functions/#codeexperts) filter function to identify the most qualified contributors based on their activity in the repo. It then assigns those individuals as reviewers on the PR with the [`add-reviewers`](/automation-actions/#add-reviewers) automation action and posts a comment that lists the code experts via the [`explain-code-experts`](/automation-actions/#explain-code-experts) automation action.

!!! example "Identify and Assign Code Experts for Reviews"
    This example uses the codeExperts filter function to identify the people who have the most expertise in the relevant code, assigns them as reviewers, and provides a comment that explains how those people were selected.
    
    ```yaml+jinja hl_lines="8"
    # -*- mode: yaml -*-
    manifest:
      version: 1.0

    automations:
      assign_code_experts:
        # Triggered when someone applies a suggest-reviewer label to a PR.
        if: 
          - {{ pr.labels | match(term='suggest-reviewer') | some }}
        run:
          - action: add-reviewers@v1
            args:
              reviewers: {{ repo | codeExperts(gt=10) }}
          - action: explain-code-experts@v1 
            args:
              gt: 10 
    ```

## Enforce Review Policies for Critical Changes
Complex and sensitive PRs often require more nuanced and complex review processes that bring in outside teams of experts to review code changes. gitStream makes it easy to set up custom review policies to keep teams aligned across your organization. This example contains two automations that implement custom review policies for specific parts of a codebase. 

First, the `security_review` automation uses the [`require-reviewers`](/automation-actions/#require-reviewers) automation action to add the security team from the git organization as reviewers on PRs that affect the `auth` directory of the repo. This action accepts a `reviewers:` argument that contains a list of teams or individual users; you will need to change this value to match your organization and users.

Second, the `double_review` automation forces any changes to the `agent` directory to require a review from two people using the [`set-required-approvals`](/automation-actions/#set-required-approvals) automation action.

!!! example "Enforce Review Policies"
    ```yaml+jinja
    # -*- mode: yaml -*-
    manifest:
      version: 1.0
    automations:
      security_review:
        if:
          - {{ files | match(regex=r/auth\//) | some }}
        run:
          - action: require-reviewers@v1
            args:
              reviewers: [my_organization/security]
          - action: add-reviewers@v1
            args:
              reviewers: [my_organization/security]
      double_review:
        if:
          - {{ files | match(regex=r/agent\//) | some }}
        run:
          - action: set-required-approvals@v1
            args:
              approvals: 2
    ```

## Next Step
!!! tip "Take a Look at the Quickstart Examples"
    You're ready to browse our [CM example library](/examples) to build more automations for your repo. We have examples that help provide context to PRs with labels, assign reviewers based on custom criteria, manage security requirements, and more.
