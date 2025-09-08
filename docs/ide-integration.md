# IDE Integration for gitStream .cm Files

This guide explains how to set up IDE support for gitStream `.cm` files using the JSON Schema for validation, autocomplete, and error detection.

## Features

With proper IDE integration, you'll get:

- **🔍 Real-time validation**: Catch syntax and structure errors as you type
- **💡 Smart autocomplete**: Context-aware suggestions for actions, variables, and filter functions
- **📚 Inline documentation**: Hover help for gitStream features
- **⚡ Faster development**: Reduced trial-and-error when writing automation rules

## Quick Start

The easiest way to enable schema validation is to add this comment at the top of your `.cm` files:

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json
```

## IDE-Specific Setup

### Visual Studio Code

#### Method 1: Per-File Declaration (Recommended)
Add the schema comment at the top of each `.cm` file:
```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json
```

#### Method 2: Global Configuration
1. Open VS Code settings (Ctrl+,)
2. Search for "yaml schemas"
3. Edit settings.json and add:
```json
{
  "yaml.schemas": {
    "https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json": [
      "**/*.cm"
    ]
  }
}
```

#### Required Extensions
- [YAML by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

### JetBrains IDEs (IntelliJ IDEA, PyCharm, WebStorm, etc.)

#### Method 1: Per-File Declaration (Recommended)
Add the schema comment at the top of each `.cm` file:
```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json
```

#### Method 2: Global Configuration
1. Go to **File** → **Settings** → **Languages & Frameworks** → **Schemas and DTDs** → **JSON Schema Mappings**
2. Click the **+** button to add a new mapping
3. Set:
   - **Schema file or URL**: `https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json`
   - **Schema version**: JSON Schema version 7
   - **File path pattern**: `*.cm`

#### Required Plugins
- YAML plugin (usually bundled)

### Neovim

For Neovim users with LSP support:

#### Using yaml-language-server
1. Install [yaml-language-server](https://github.com/redhat-developer/yaml-language-server)
2. Configure in your `init.lua`:
```lua
require('lspconfig').yamlls.setup {
  settings = {
    yaml = {
      schemas = {
        ["https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json"] = "*.cm"
      }
    }
  }
}
```

#### Per-File Declaration
Alternatively, add the schema comment at the top of each `.cm` file:
```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json
```

### Sublime Text

#### Using LSP Package
1. Install [LSP](https://packagecontrol.io/packages/LSP) package
2. Install [LSP-yaml](https://packagecontrol.io/packages/LSP-yaml)
3. Configure in LSP settings:
```json
{
  "clients": {
    "yamlls": {
      "settings": {
        "yaml": {
          "schemas": {
            "https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json": ["*.cm"]
          }
        }
      }
    }
  }
}
```

### Other Editors

For editors supporting the Language Server Protocol (LSP), configure the `yaml-language-server` with the schema mapping shown in the Neovim example above.

## Schema Features

The gitStream schema provides validation for:

### Core Structure
- **manifest**: Version and configuration metadata
- **automations**: Automation rules with `if` conditions and `run` actions  
- **config**: Admin settings, ignore patterns, and feature flags
- **Custom expressions**: User-defined variables and expressions

### Context Variables
- **branch**: Branch information (name, base)
- **pr**: Pull request data (title, description, author, draft status, etc.)
- **files**: Array of changed files
- **repo**: Repository information (name, owner)
- **source**: Source code and diff information
- **env**: Environment variables

### Automation Actions
- `approve@v1` - Approve the PR
- `request-changes@v1` - Request changes
- `add-comment@v1` - Add a comment
- `add-label@v1` / `remove-label@v1` - Manage labels
- `add-reviewers@v1` / `remove-reviewers@v1` - Manage reviewers
- `set-required-approvals@v1` - Set approval requirements
- `merge@v1` - Merge the PR
- `close@v1` - Close the PR
- `update-title@v1` / `update-description@v1` - Update PR metadata
- `explain-code-experts@v1` - Show code experts
- `code-review@v1` - AI code review
- `describe-changes@v1` - AI description generation
- `dispatch-workflow@v1` / `skip-workflow@v1` - Workflow control

### Filter Functions
- `match`, `some`, `every` - Pattern matching and boolean operations
- `filter`, `map`, `reject` - Array transformations
- `includes`, `excludes` - Content checking
- `estimatedReviewTime` - Review time estimation
- `isFormattingChange`, `allDocs`, `allTests`, `allImages` - File type detection
- `readFile`, `dump` - File operations
- String operations: `length`, `upper`, `lower`, `trim`, `split`, `join`, `replace`
- Array operations: `first`, `last`, `unique`, `sort`, `reverse`

## Troubleshooting

### Schema Not Loading
- Verify internet connection (schema is fetched from GitHub)
- Check if your IDE supports JSON Schema for YAML files
- Try the per-file declaration method if global configuration isn't working

### Validation Errors
- Ensure your `.cm` file has valid YAML syntax
- Check that `manifest` and `automations` sections are present
- Verify action names match the supported list (e.g., `approve@v1` not `approve`)

### Autocomplete Not Working
- Confirm the YAML language server is running
- Try restarting your IDE after configuration changes
- Check IDE logs for any schema loading errors

## Contributing

If you find issues with the schema or want to contribute improvements:

1. Report issues at [gitstream/issues](https://github.com/linear-b/gitstream/issues)
2. The schema file is located at `gitstream-schema.json` in the repository root
3. When adding new actions or context variables, update the schema accordingly

## Example Usage

Here's a complete example of a `.cm` file with schema validation enabled:

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json

manifest:
  version: 1.0

automations:
  approve_safe_changes:
    if:
      - {{ is.formatting or is.docs or is.tests }}
    run:
      - action: approve@v1
      - action: add-comment@v1
        args:
          comment: "Auto-approved safe changes ✅"

  label_by_size:
    if:
      - true
    run:
      - action: add-label@v1
        args:
          label: "{{ 'large' if (pr.size > 500) else 'small' }}"
          color: "{{ 'red' if (pr.size > 500) else 'green' }}"

is:
  formatting: {{ source.diff.files | isFormattingChange }}
  docs: {{ files | allDocs }}
  tests: {{ files | allTests }}
```

With this setup, your IDE will provide intelligent assistance as you write gitStream automation rules!