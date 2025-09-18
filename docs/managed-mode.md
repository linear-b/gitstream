# Managed Mode

!!! tip "Setup Configuration"
    Managed Mode setup is configured entirely from the LinearB platform. You do not need to setup gitStream yourself, add any GitHub Actions, or create CM rule files - all of this is handled automatically by the LinearB platform. For detailed setup instructions, see [Managing AI Services in LinearB](https://linearb.helpdocs.io/article/hvm9neua4e-managing-ai-services-in-linear-b#ai_tools_automations).

Managed Mode is an operation mode for LinearB AI automations where automations run on the LinearB runner as a managed service. This mode is required for accessing AI Insights and provides centralized control of AI automations through LinearB's infrastructure.

## Available Managed Automations

### AI Code Review

Use LinearB's AI with the `code-review` action to automatically review the introduced changes to the code. This automation triggers on non-draft PRs that were not created by bots and can be customized with specific review guidelines.

```yaml
automations:
  linearb_ai_review:
    if:
      - {{ not (pr.draft or is.bot_author) }}
    run:
      - action: code-review@v1
        args:
          guidelines: {{ loadReviewGuidelines() | dump }}
```

### AI PR Description

Use the `describe-changes` automation action to automatically generate and append a concise, AI-generated description to a pull request. This helps provide clear context for reviewers about the changes introduced.

```yaml
automations:
  linearb_ai_description:
    if:
      - {{ not (pr.draft or is.bot_author) }}
    run:
      - action: describe-changes@v1
        args:
          concat_mode: append
          guidelines: {{ loadDescriptionGuidelines() | dump }}
```

### Smart Labeling (Claude Code Detection)

Automatically apply labels to PRs that are assisted by Claude Code to track time savings, PR risk, and productivity lift from AI tools. This automation can detect Claude Code usage through multiple methods including co-authorship, user prompts, known users, or specific tags.

```yaml
automations:
  tag_claude_in_pr:
    if:
      - {{ is.claude_author or is.claude_co_author }}
    run:
      - action: add-label@v1
        args:
          label: 🤖 Claude Code

  tag_copilot_in_pr:
    if:
      - {{ is.copilot_author or is.copilot_co_author }}
    run:
      - action: add-label@v1
        args:
          label: 🤖 GitHub Copilot

  tag_cursor_in_pr:
    if:
      - {{ is.cursor_author or is.cursor_co_author }}
    run:
      - action: add-label@v1
        args:
          label: 🤖 Cursor AI

  tag_linearb_ai_in_pr:
    if:
      - {{ is.linearb_author or is.linearb_co_author }}
    run:
      - action: add-label@v1
        args:
          label: 🤖 LinearB AI

is:
  bot_author: {{ pr.author | match(list=[\"github-actions\", \"_bot_\", \"[bot]\", \"dependabot\"]) | some }}
  claude_author: {{ pr.author | lower | includes(regex=r/claude/) }}
  claude_co_author: {{ branch.commits.messages | match(regex=r/[Cc]o-[Aa]uthored-[Bb]y:.*[Cc]laude/) | some }}
  copilot_author: {{ pr.author | lower | includes(regex=r/copilot/) }}
  copilot_co_author: {{ branch.commits.messages | match(regex=r/[Cc]o-[Aa]uthored-[Bb]y:.*([Cc]opilot|[Gg]ithub.*[Cc]opilot)/) | some }}
  cursor_author: {{ pr.author | lower | includes(regex=r/cursor/) }}
  cursor_co_author: {{ branch.commits.messages | match(regex=r/[Cc]o-[Aa]uthored-[Bb]y:.*[Cc]ursor/) | some }}
  linearb_author: {{ pr.author | lower | includes(regex=r/^linearb/) and not (pr.author | lower | includes(regex=r/^linearbci$/)) }}
  linearb_co_author: {{ branch.commits.messages | match(regex=r/[Cc]o-[Aa]uthored-[Bb]y:.*(gitstream-cm|linearb).*\\[bot\\]/) | some }}
```

### Estimated Time to Review

Label all PRs with an estimated number of minutes it would take someone to review. gitStream automatically updates this label whenever a PR changes, providing valuable insight for reviewers and team planning.

```yaml
automations:
  estimated_time_to_review:
    if:
      - true
    run:
      - action: add-label@v1
        args:
          label: "{{ calc.etr }} min review"
          color: {{ colors.red if (calc.etr >= 20) else ( colors.yellow if (calc.etr >= 5) else colors.green ) }}

calc:
  etr: {{ branch | estimatedReviewTime }}

colors:
  red: 'b60205'
  yellow: 'fbca04'
  green: '0e8a16'
```

### Dependabot Auto-merge

Auto-merge Dependabot PRs for patch and minor version updates. This automation helps maintain dependencies while ensuring only safe, non-breaking changes are automatically approved and merged.

```yaml
manifest:
  version: 1.0

automations:
  merge_dependabot_minor:
    on:
      - pr_created
      - commit
    if:
      - {{ dependabot_bump == 'minor' }}
      - {{ branch.name | includes(term='dependabot') }}
      - {{ branch.author | includes(term='dependabot') }}
    run:
      - action: approve@v1
      - action: add-comment@v1
        args:
          comment: Dependabot `minor` version bumps are approved automatically.

  merge_dependabot_patch:
    on:
      - pr_created
      - commit
    if:
      - {{ dependabot_bump == 'patch' }}
      - {{ branch.name | includes(term='dependabot') }}
      - {{ branch.author | includes(term='dependabot') }}
    run:
      - action: approve@v1
      - action: add-comment@v1
        args:
          comment: Dependabot `patch` version bumps are approved automatically.

dependabot_bump: {{ pr.description | checkDependabot | checkSemver }}
```
