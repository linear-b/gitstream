# Dependabot Bump

Usage example, that also relies on `semver` plugin.

```yaml+jinja
# -*- mode: yaml -*-

manifest:
  version: 1.0

automations:
  bump_minor:
    if:
      - {{ bump == 'minor' }}
    run:
      - action: approve@v1
      - action: add-comment@v1
        args:
          comment: |
            Dependabot `minor` version bump are approved automatically by gitStream.
  
  bump_patch:
    if:
      - {{ bump == 'patch' }}
    run:
      - action: approve@v1
      - action: merge@v1
      - action: add-comment@v1
        args:
          comment: |
            Dependabot `patch` version bump are approved and merged automatically by gitStream.

bump: {{ pr.description | dependabot_bump | semver }}

```