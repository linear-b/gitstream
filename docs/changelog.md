# /:\\ gitStream Changelog
All notable changes to this project will be documented in this file.

### 2024.5.06

- **Reorganized trigger configuration**: Moved the top-level `on` keyword under a new `triggers` keyword to consolidate all trigger settings.
- **Enhanced repository and branch triggering**:
    - Moved `config.include_repository` and `config.ignore_repository` to `triggers.include.repository` and `triggers.exclude.repository`, aligning repository-specific triggers with the new consolidated trigger configuration.
    - Introduced `triggers.include.branch` and `triggers.exclude.branch` to specify branch-specific conditions for triggering automations. 
### 2024.4.16
- Added a cache option for the docker image

### 2024.3.28
- Supporting regular expressions in `config.ignore_repositories`
### 2024.3.14
- Added the following explicit triggers:
	- `pr_ready_for_review`
	- `pr_closed`
	- `pr_reopened`

### 2024.3.7
- Triggering on comment edits
- Added support for `request-changes` action in GitLab
### 2023.11.22
- gitStream Playground official release
