# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the gitStream repository - a workflow automation tool for git repositories that allows users to create automated code review workflows using YAML and Jinja2 templates. gitStream processes Continuous Merge (CM) files (`.cm` extension) that define automations for pull/merge requests across GitHub, GitLab, and Bitbucket.

## Development Commands

### Documentation Server

#### MkDocs (Current/Production)
The documentation is built using MkDocs Material theme.

```bash
# Set up Python virtual environment (Python <= 3.10 required)
python -m venv .venv
. ./.venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run documentation server locally
mkdocs serve  # Runs at http://127.0.0.1:8000/

# Build documentation
mkdocs build
```

#### Zensical (Testing)
Zensical is being evaluated as a potential replacement for MkDocs. It uses the same `mkdocs.yml` configuration file.

**Requirements:** Python 3.11+ (uses `uv` for dependency management)

```bash
# Sync/install Zensical dependencies (first time or after updates)
uv sync

# Run Zensical documentation server locally
uv run zensical serve  # Runs at http://127.0.0.1:8000/

# Build documentation with Zensical
uv run zensical build
```

**Notes:**
- Zensical uses its own uv-managed virtual environment (`.venv`) with Python 3.11+
- Both MkDocs and Zensical use port 8000 by default, so run only one at a time
- See `ZENSICAL_TESTING.md` for detailed comparison guide

## Code Architecture

### Project Structure
- **docs/** - Documentation source files (Markdown)
  - `automations/` - Automation examples and library
  - `downloads/` - Downloadable CM files and templates
  - `integrations/` - Third-party integration documentation
  - `screenshots/` - Documentation images
- **plugins/filters/** - JavaScript filter function plugins that extend gitStream capabilities
  - Each plugin has its own directory with `index.js`, `README.md`, and optional test files
  - Plugins enable custom data processing and external API integrations
- **site/** - Generated documentation site (do not edit directly)
- **automations/** - Example automation configurations
- **tutorials/** - Tutorial projects demonstrating gitStream usage

### Core Concepts

1. **CM Files (.cm)**: YAML + Jinja2 configuration files that define automation rules
   - Located in `.cm/` directory at repository root
   - Can also be defined at organization level in a special `cm` repository
   - Each file must contain `manifest:` and `automations:` sections

2. **Automation Components**:
   - **Context Variables**: Pre-defined objects like `files`, `branch`, `repo` providing PR metadata
   - **Filter Functions**: Functions applied to variables using pipe operator `|`
   - **Automation Actions**: Actions like `add-comment`, `set-required-approvals`, `add-label`
   - **Custom Expressions**: Reusable Jinja2 expressions defined in CM files

3. **Plugin System**: JavaScript plugins in `plugins/filters/` that create new filter functions
   - Each plugin exports a filter function that can be used in CM files
   - Plugins can connect to external APIs or perform complex data processing

### Key Files
- `mkdocs.yml` - Documentation site configuration
- `requirements.txt` - Python dependencies for documentation
- `.cm/*.cm` - Repository-level automation rules
- `docs/downloads/gitstream.cm` - Default automation template

## Important Notes

- When editing CM files, preserve YAML indentation as it's significant
- Organization-level rules can be overridden by repository-level rules with the same identifier
- The identifier is composed of filename + automation name (e.g., `gitstream/safe_changes`)
- gitStream triggers on PR creation and updates by default, with configurable explicit triggers
- Draft PRs are ignored by default (configurable via explicit triggers on GitHub)