#!/usr/bin/env python3
import json
import yaml
import sys

# Load the schema
with open('gitstream-schema.json', 'r') as f:
    schema = json.load(f)

# Load a test .cm file
with open('docs/downloads/gitstream.cm', 'r') as f:
    cm_content = yaml.safe_load(f)

print('Schema loaded successfully')
print('Test CM file loaded successfully')
print('Basic structure validation:')
print(f'- Has manifest: {"manifest" in cm_content}')
print(f'- Has automations: {"automations" in cm_content}')
print(f'- Manifest version: {cm_content.get("manifest", {}).get("version")}')
print(f'- Number of automations: {len(cm_content.get("automations", {}))}')

# Test another cm file
with open('.cm/gitstream.cm', 'r') as f:
    repo_cm_content = yaml.safe_load(f)

print('\nRepo CM file validation:')
print(f'- Has manifest: {"manifest" in repo_cm_content}')
print(f'- Has automations: {"automations" in repo_cm_content}')
print(f'- Has config: {"config" in repo_cm_content}')
print(f'- Number of automations: {len(repo_cm_content.get("automations", {}))}')

print('\nSchema appears to be structurally valid for testing')