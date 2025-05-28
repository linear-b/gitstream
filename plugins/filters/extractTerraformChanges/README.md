# extractTerraformChanges

A GitStream filter that analyzes Terraform HCL file changes to extract the highest privilege level from modified JIT (Just-In-Time) access configurations.

## Description

This filter examines git diffs of Terraform HCL files to identify which JIT objects have been modified, then extracts the privilege levels from those objects and returns the highest privilege found. The privilege hierarchy is: `rw` (read-write) > `ro` (read-only).

## Syntax

```yaml
{{ <changes> | extractTerraformChanges }}
```

## Parameters

| Name | Type | Description |
|------|------|-------------|
| `changes` | Array | Array of file change objects containing diff, original_content, and new_content |

## Return Value

- `"rw"` - If any modified JIT object contains read-write privileges
- `"ro"` - If modified JIT objects only contain read-only privileges  
- `null` - If no JIT objects were modified or no privileges found

## Examples

### Basic Usage

```yaml
automations:
  check_terraform_privilege_changes:
    if:
      - {{ files | extractTerraformChanges == "rw" }}
    run:
      - action: add-label@v1
        args:
          label: "high-privilege-change"
```

### Multiple Conditions

```yaml
automations:
  terraform_privilege_review:
    if:
      - {{ files | extractTerraformChanges != null }}
    run:
      - action: add-reviewers@v1
        args:
          reviewers: ["security-team"]
      - action: add-label@v1
        args:
          label: "terraform-jit-change"
```

## Input Format

The filter expects an array of file change objects with the following structure:

```json
[
  {
    "original_file": "path/to/file.hcl",
    "new_file": "path/to/file.hcl", 
    "diff": "@@ -50,7 +50,7 @@\n-          privileges = \"rw\"\n+          privileges = \"ro\"",
    "original_content": "include \"root\" {\n  path = find_in_parent_folders(\"root.hcl\")\n}\n\ninputs = {\n  jits = [\n    {\n      user = \"user_alpha\"\n      access = [\n        {\n          tables = [\"*\"]\n          schema = \"schema_one\"\n          privileges = \"rw\"\n        }\n      ]\n    }\n  ]\n}",
    "new_content": "..."
  }
]
```

## How It Works

1. **Parse Diffs**: Analyzes git diff output to identify changed line numbers
2. **Parse HCL Content**: Extracts JIT objects from the original HCL content with their line ranges
3. **Match Changes**: Determines which JIT objects have been modified based on changed lines
4. **Extract Privileges**: Collects privilege levels from all modified JIT objects
5. **Return Highest**: Returns the highest privilege level found (`rw` > `ro`)

## Use Cases

- **Security Reviews**: Automatically flag changes that modify high-privilege access
- **Approval Workflows**: Require additional approvals for read-write privilege changes
- **Audit Trails**: Track modifications to database access configurations
- **Risk Assessment**: Identify potentially risky infrastructure changes

## Notes

- Only analyzes changes within `jits` arrays in HCL files
- Supports nested JIT object structures with `access` arrays
- Ignores changes outside of JIT configurations
- Returns immediately upon finding `rw` privileges (optimization)
- Handles malformed or incomplete input gracefully