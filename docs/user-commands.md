---
title: gitStream Reference - User Commands
description: User commands enable manual triggering of gitStream actions through PR comments.
---
# User Commands

User commands allow you to trigger specific gitStream actions manually by adding comments to pull requests. These commands provide on-demand execution of automation actions without requiring changes to your `.cm` configuration files.

!!! note "GitHub Only & v2 Action Required"

    User commands are only supported on **GitHub** and require the `linear-b/gitstream-github-action@v2`. This feature is not available on GitLab or Bitbucket.

## Overview

gitStream supports comment-triggered actions that allow you to execute specific automations on-demand. Commands are only processed when **new comments are added**, not when existing comments are edited.

gitStream provides visual feedback through emoji reactions on command comments. :eyes: is added when a command is recognized and processing begins
and :thumbsup: is added when the command has been successfully executed.

## Available Commands

<div class="commands-details" markdown=1>
| Command | Platform | Description | Action |
|---------|----------|-------------|--------|
| `/gs review` | :fontawesome-brands-github: | Run an AI-powered code review on this PR | Executes `code-review@v1` once on the current PR |
| `/gs desc` | :fontawesome-brands-github: | Generate a description of the changes in this PR | Executes `describe-changes@v1` once on the current PR with `concat_mode: append` |
| `/gs etr` | :fontawesome-brands-github: | Add estimated time to review label | Adds a label with the estimated review time based on the PR changes |
| `/gs code_experts` | :fontawesome-brands-github: | Add a comment with codeExperts suggestion for current changes | Executes `explain_code_experts@v1` once on the current PR |
| `/gs help` | :fontawesome-brands-github: | Show help message with available commands | Displays a comment with the list of all available gitStream commands |
</div>
