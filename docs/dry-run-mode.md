---
title: How to Test gitStream Automations
description: Use gitStream dry-run mode to test your automations before implementing them.
---

# How to Test Your Automation

Testing your gitStream automations ensures they work as expected before applying them to your live pull requests. gitStream provides two easy ways to safely test your automations:

### 1. Dry Run Mode

Dry Run mode is automatically enabled whenever you open a PR that modifies any of your `.cm` automation files. In Dry Run mode:

- gitStream evaluates automations based on code changes made to non-automation files (your repository's codebase).
- Automations are evaluated without being executed.
- Results are added as comments on your pull request, showing exactly what actions would have occurred.
- Each new commit triggers an updated comment describing the changes.

![dry-run mode](/screenshots/dry-run-mode.png)

!!! note
	While in Dry Run mode, no automation changes actually take effect. To apply your automations, merge your PR after validation.

If you encounter issues while testing, refer to our [Troubleshooting page](troubleshooting.md) for guidance.

### 2. Using the Playground

You can also test automations interactively using the [gitStream Playground](gitStream-playground.md). The Playground offers an intuitive environment to preview how automations behave, allowing you to instantly adjust and perfect your rules.

Select the method most convenient for your workflow, or use both methods together for comprehensive testing. Once satisfied with the results, merge your `.cm` changes into the main branch to enable the new automations.
