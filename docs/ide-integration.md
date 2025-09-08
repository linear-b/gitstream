# IDE Integration for gitStream .cm Files

This guide explains how to configure your IDE to provide validation and autocomplete support for gitStream `.cm` configuration files.

## YAML Schema

gitStream provides a JSON Schema file that enables IDE validation and autocomplete for `.cm` files. The schema validates:

- Required sections (`manifest`, `automations`)
- Context variables (`branch`, `files`, `pr`, `repo`, `source`, etc.)
- Filter functions (`match`, `filter`, `some`, `every`, etc.)  
- Automation actions (`add-comment`, `add-label`, `approve`, etc.)
- Jinja2 template expressions

## VS Code Setup

### Method 1: YAML Extension Settings

1. Install the **YAML** extension by Red Hat
2. Open VS Code settings (Ctrl/Cmd + ,)
3. Search for "yaml.schemas"
4. Add the gitStream schema mapping:

```json
{
  "yaml.schemas": {
    "https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json": ["*.cm", ".cm/*.cm"]
  }
}
```

### Method 2: In-file Schema Declaration

Add this comment to the top of your `.cm` files:

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json

manifest:
  version: 1.0
# ... rest of your configuration
```

## JetBrains IDEs (IntelliJ, PyCharm, etc.)

1. Go to **File → Settings** (Windows/Linux) or **IntelliJ IDEA → Preferences** (macOS)
2. Navigate to **Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings**
3. Click the **+** button to add a new mapping
4. Set the following:
   - **Name**: gitStream
   - **Schema file or URL**: `https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json`
   - **Schema version**: JSON Schema version 7
   - **File path pattern**: `*.cm`

## Neovim

For Neovim users with `nvim-lspconfig` and `yaml-language-server`:

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

## Sublime Text

1. Install the **LSP** and **LSP-yaml** packages via Package Control
2. Add to your LSP settings:

```json
{
  "clients": {
    "yaml-language-server": {
      "settings": {
        "yaml.schemas": {
          "https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json": ["*.cm"]
        }
      }
    }
  }
}
```

## Features Enabled

Once configured, your IDE will provide:

### Validation
- ✅ Required sections validation
- ✅ Action argument validation  
- ✅ Context variable checking
- ✅ Jinja2 expression syntax validation

### Autocomplete
- 🔧 Available actions (`add-comment@v1`, `add-label@v1`, etc.)
- 🔧 Action arguments (`comment`, `label`, `color`, etc.)
- 🔧 Context variables (`files`, `branch`, `pr`, etc.)
- 🔧 Filter functions (`match`, `some`, `every`, etc.)

### Error Detection
- ❌ Missing required properties
- ❌ Invalid action names
- ❌ Incorrect argument types
- ❌ Malformed Jinja2 expressions

## Schema Location

The schema is available at:
- **GitHub URL**: `https://raw.githubusercontent.com/linear-b/gitstream/main/gitstream-schema.json`
- **Local file**: `gitstream-schema.json` in the repository root

## Troubleshooting

### Schema Not Loading
- Ensure your IDE has internet access to fetch the remote schema
- Try using the local schema file if the remote URL is blocked
- Check that the YAML language server is properly installed

### No Autocomplete
- Verify the file extension is `.cm`
- Check that your schema mapping includes the correct file patterns
- Restart your IDE after configuration changes

### False Validation Errors
- The schema focuses on structure validation
- Some advanced Jinja2 expressions may show warnings but are valid
- Custom filter functions from plugins may not be recognized

## Contributing

If you find missing validation rules or have suggestions for improving IDE support, please:

1. Open an issue at [gitStream repository](https://github.com/linear-b/gitstream/issues)
2. Include your IDE configuration and the specific validation issue
3. Provide example `.cm` files that demonstrate the problem