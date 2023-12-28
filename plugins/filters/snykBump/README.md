# snykBump

This plugin helps to automate the handling of PRs that were created by snyk.

Example usages:

```yaml+jinja
manifest:
  version: 1.0

automations:
  bump_minor:
    if:
      - {{ bump == 'minor' }}
      - {{ branch.name | includes(term="snyk-update") }}
      - {{ branch.author | includes(term="snyk-bot") }}
    run:
      - action: approve@v1
      - action: add-comment@v1
        args:
          comment: |
            Snyk-bot `minor` version bumps are approved automatically.
  bump_patch:
    if:
      - {{ bump == 'patch' }}
      - {{ branch.name | includes(term="snyk-update") }}
      - {{ branch.author | includes(term="snyk-bot") }}
    run:
      - action: approve@v1
      - action: merge@v1
      - action: add-comment@v1
        args:
          comment: |
            Snyk-bot `patch` version bumps are approved and merged automatically.

bump: {{ pr.description | snykBump | semver }}
```