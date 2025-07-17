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
| `/gs review` | :fontawesome-brands-github: | Runs a one-time code review on the current PR | Executes `code-review@v1` once on the current PR |
| `/gs desc` | :fontawesome-brands-github: | Generates or updates the PR description with AI-powered change summary | Executes `describe-changes@v1` once on the current PR with `concat_mode: append` |
| `/gs help` | :fontawesome-brands-github: | Displays available commands and their descriptions | Adds a new PR comment with the list of available commands |
</div>
