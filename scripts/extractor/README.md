# README for the Rust CLI Automations Parser

## Overview

This Rust application is designed to parse automation-related information from markdown files (specifically `README.md` files) found within a specified directory structure. The main goal is to extract structured information from unstructured markdown content, organize it into a well-defined schema (`AutomationInfo` struct), and serialize this data into JSON format for further use.

## Features

- **Directory Traversal**: Recursively navigate through directories starting from a base path to locate `README.md` files.
- **Content Parsing**: Extract crucial information from `README.md` files, like description, link, name, and config specifics related to automations.
- **Parallel Processing**: Utilizes `rayon` to process multiple files in parallel, improving performance for large directories.
- **CLI Flexibility**: Offers command-line argument parsing for dynamic operation, notably for specifying path prefixes to filter processed files and enabling debug mode for verbose output.
- **Serialization**: Converts the extracted automation data into JSON, providing an easy-to-use format for other applications or services.

## Usage

To use this application, you will need Rust installed on your machine. After cloning the repository, navigate to the project directory and build the application using Cargo:

```shell
cargo build --release
```

Run the application from the gitStream project root:

```shell
cargo run --manifest-path scripts/extractor/Cargo.toml --release
```

### Available Options

- `--path-prefix <PATH_PREFIX>`: Only process files that are under directories matching this path prefix.
- `--debug`: Enable verbose output for debugging purposes.

## Example

Assuming a project directory `docs/automations` with several `README.md` files in nested directories, you can run:

```shell
cargo run --manifest-path scripts/extractor/Cargo.toml -- --path-prefix "docs/automations/integrations"
```

This will parse all `README.md` files under `docs/automations/integrations`, extracting and outputting their contained data as JSON.

## Output

The application outputs a JSON representation of all automation information extracted from the `README.md` files. Each object in the array corresponds to an `AutomationInfo` instance filled with data from each file:

```json
[
  {
    "always": true,
    "categories": ["Integration", "Security"],
    "description": "A detailed description of the automation...",
    "file": "path/to/README.md",
    "id": 0,
    "link": "https://example.com/auto1",
    "name": "My Automation",
    "quickstart": false,
    "visible": true
  },
  ...
]
```

### Debugging

Enable debug prints to assist in developing or diagnosing issues by using the `--debug` CLI argument.
