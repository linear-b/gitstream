#!/bin/bash

# Script to convert Simple Icons emoji syntax to local SVG references
# This is a workaround for Zensical not supporting Simple Icons yet

# Icon mapping: :simple-name: -> filename.svg
declare -A ICON_MAP=(
    ["simple-asana"]="asana"
    ["simple-azuredevops"]="azuredevops"
    ["simple-clubhouse"]="clubhouse"
    ["simple-codereview"]="codereview"
    ["simple-dependabot"]="dependabot"
    ["simple-githubactions"]="githubactions"
    ["simple-html5"]="html5"
    ["simple-javascript"]="javascript"
    ["simple-python"]="python"
    ["simple-renovatebot"]="renovatebot"
    ["simple-ruby"]="ruby"
    ["simple-slack"]="slack"
    ["simple-snyk"]="snyk"
    ["simple-sonarcloud"]="sonarcloud"
    ["simple-zapier"]="zapier"
)

# Function to convert Simple Icon syntax to local SVG
# Example: [:simple-sonarcloud: SonarCloud](/path)
# Becomes: [![](../assets/icons/simple-icons/sonarcloud.svg){ width="20" } SonarCloud](/path)

convert_file() {
    local file="$1"
    local backup="${file}.bak"

    echo "Converting: $file"

    # Create backup
    cp "$file" "$backup"

    # Convert each Simple Icon
    for icon_name in "${!ICON_MAP[@]}"; do
        local svg_file="${ICON_MAP[$icon_name]}"

        # Replace [:simple-name: Text](link) with [![](path/to/icon.svg){ width="20" } Text](link)
        sed -i.tmp "s|\[:${icon_name}: \([^]]*\)\](\([^)]*\))|[![](../assets/icons/simple-icons/${svg_file}.svg){ width=\"20\" } \1](\2)|g" "$file"
        rm -f "${file}.tmp"
    done

    echo "✓ Converted $file (backup saved as $backup)"
}

# Main script
if [ $# -eq 0 ]; then
    echo "Usage: $0 <markdown-file> [<markdown-file> ...]"
    echo ""
    echo "Example:"
    echo "  $0 docs/integrations/README.md"
    echo ""
    echo "This converts Simple Icons emoji syntax to local SVG references."
    exit 1
fi

for file in "$@"; do
    if [ -f "$file" ]; then
        convert_file "$file"
    else
        echo "⚠ File not found: $file"
    fi
done

echo ""
echo "Done! Test the changes and remove .bak files if satisfied."
