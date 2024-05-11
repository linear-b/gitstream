use crate::{debug_print, utils, AutomationInfo, Cli, ENC_BEGIN_MARK, ENC_END_MARK};
use anyhow::Result;
use pulldown_cmark::{Event, Options, Parser, Tag, TagEnd};
use regex::Regex;
use serde_yaml::Value;
use std::path::Path;
use std::str;
use std::{fs, path::PathBuf};

#[derive(Debug)]
enum ParserState {
    Parsing,
    ParseMetadata,
    ParseConfig,
    ParseExample,
}

pub(crate) fn load_and_parse_markdown(file_path: &Path, cli: &Cli) -> Vec<AutomationInfo> {
    // Read the content of the markdown file or default to an empty string if it fails
    let input = fs::read_to_string(file_path).unwrap_or_default();

    let mut output = vec![];

    // Check if the file content indicates that the file has been moved. If so,
    // return an empty result.
    if input.contains("This file has moved") {
        return output;
    }

    let mut options = Options::empty();
    options.insert(Options::ENABLE_YAML_STYLE_METADATA_BLOCKS);
    let parser = Parser::new_ext(&input, options);

    let svg = utils::find_svg_files_in_directory(file_path.parent().unwrap())
        .ok()
        .and_then(|files| files.first().map(|path| path.to_path_buf()));

    let mut info = AutomationInfo {
        always: false,
        automation_in_cm: None,
        category: vec![],
        cm: None,
        config: None,
        date: utils::get_initial_commit_date(file_path).ok(),
        description: None,
        file: file_path.to_path_buf(),
        id: 0,
        image: None,
        link: utils::linkify(file_path.parent().unwrap()),
        logo: svg,
        name: None,
        quickstart: false,
        visible: true,
    };

    let mut state = ParserState::Parsing;
    // This variable tracks if we are in a document with multiple sections.
    // It starts as None and gets updated to Some(1) when the first section divider is found.
    let mut sections = None;
    let mut indentation = 0;

    for event in parser {
        debug_print!(cli.debug, "{event:?}");
        match event {
            Event::Start(Tag::MetadataBlock { .. }) => {
                state = ParserState::ParseMetadata;
            }
            Event::Start(Tag::Link { dest_url, .. }) => {
                if dest_url.contains(".cm") {
                    let cm_path = PathBuf::from(dest_url.as_ref());
                    info.cm = Some(utils::linkify(&cm_path));
                    let automation = parse_cm_file(&cm_path).unwrap();
                    info.automation_in_cm = Some(automation);
                }
            }
            Event::Start(_) => {}
            Event::Html(text) => {
                if text.contains(".png") {
                    let image_path = utils::extract_file_path(&text, r"\((.*?)\)")
                        // Merge extarced PNG relative path with the README path
                        .map(|s| file_path.parent().unwrap().join(s))
                        .unwrap_or_default();
                    // Get the HTTP link for the image
                    info.image = Some(utils::linkify(&image_path));
                } else if text.contains(".cm") {
                    if let Some(cm_path) = utils::extract_file_path(&text, r"\((.*?)\)") {
                        info.cm = Some(utils::linkify(&cm_path));
                        let automation = parse_cm_file(&cm_path).unwrap();
                        info.automation_in_cm = Some(automation);
                    }
                }
            }
            Event::Text(text) => {
                match state {
                    ParserState::ParseMetadata => {
                        // Deserialize YAML from the metadata block and check for "visible" flag
                        let parsed_yaml: Value = serde_yaml::from_str(&text).unwrap_or_default();
                        // If the "visible" flag is explicitly set to false, return early with empty output
                        if !parsed_yaml.get("visible").map(|v| v.as_bool()).flatten().unwrap_or(true) {
                            return output;
                        }
                        info.name = parsed_yaml["title"].as_str().map(str::to_string);
                        info.description = parsed_yaml["description"].as_str().map(str::to_string);
                        info.category = parsed_yaml["category"]
                            .as_sequence()
                            .map(|values| {
                                values
                                    .iter()
                                    .filter_map(|v| v.as_str())
                                    .map(String::from)
                                    .collect()
                            })
                            .unwrap_or_default();
                        if info.category.iter().any(|c| c == "quickstart") {
                            info.quickstart = true;
                        }
                    }
                    ParserState::ParseConfig => {
                        // Accumulate configuration text as it's parsed
                        if indentation == utils::get_indentation(&text) {
                            info.config = Some(info.config.take().unwrap_or_default() + &text)
                        } else if text.contains("!!! example") {
                            // If "!!! example" is found in the text, we immediately transition to
                            // the ParseExample state to handle example configurations
                            state = ParserState::ParseExample;
                        } else if !text.trim().is_empty() {
                            state = ParserState::Parsing;
                        }
                    }
                    ParserState::ParseExample => {
                        if text.contains(".cm") {
                            if let Some(cm_path) = utils::extract_file_path(&text, r"\((.*?)\)") {
                                info.cm = Some(utils::linkify(&cm_path));
                                let automation = parse_cm_file(&cm_path).unwrap();
                                info.automation_in_cm = Some(automation);
                            }
                        }
                    }
                    ParserState::Parsing => {
                        indentation = utils::get_indentation(&text);
                        if text.starts_with("=== ") {
                            // When a section divider "=== " is found, we check if multi_sections is None.
                            // If it is, this is the first section divider, and we set it to Some(1).
                            // If it's not None, we increment the counter, indicating another section has started,
                            // and push a clone of the current AutomationInfo to output, effectively splitting the document.
                            if sections.is_none() {
                                sections = Some(1);
                                debug_print!(cli.debug, "Section: {sections:?}");
                            } else {
                                sections = Some(sections.take().unwrap_or_default() + 1);
                                debug_print!(cli.debug, "Section: {sections:?}");
                                output.push(info.clone());
                            }
                        } else if text.contains("Conditions (all must be true)") {
                            state = ParserState::ParseConfig;
                            info.config = Some(String::new());
                        } else if text.contains("!!! example") {
                            state = ParserState::ParseExample;
                        }
                    }
                }
            }
            Event::End(TagEnd::MetadataBlock(..)) => {
                state = ParserState::Parsing;
            }
            Event::End(TagEnd::Paragraph) => {
                state = ParserState::Parsing;
            }
            Event::End(..) => {
                state = ParserState::Parsing;
            }
            _ => (),
        }
        debug_print!(cli.debug, "S: {state:?}");
    }

    output.push(info);

    output
}

fn parse_cm_file(path: &Path) -> Result<String> {
    // Combine the given path with the "docs" directory, adjusting for potential leading slashes
    let path = Path::new("docs").join(path.strip_prefix("/").unwrap_or(path));
    // Read the content of the specified file
    let Ok(file_content) = fs::read_to_string(&path) else {
        return Err(anyhow::Error::msg(format!(
            "Can't read file at path {}", path.display()
        )));
    };
    // Encode Jinja expressions within the file content to base64
    let file_content_encoded = utils::encode_jinja_expressions(&file_content);
    // Deserialize the YAML content, now with encoded Jinja expressions
    let result: serde_yaml::Result<Value> = serde_yaml::from_str(&file_content_encoded);
    let Ok(content) = result else {
        return Err(anyhow::Error::msg(format!(
            "cannot parse YAML\nFile: {}\nError: {}\n\n{file_content_encoded}",
            path.display(),
            result.err().unwrap(),
        )));
    };
    let Some(automations) = content.get("automations").map(Value::as_mapping) else {
        return Err(anyhow::Error::msg(format!(
            "No automations found in {}",
            path.display()
        )));
    };
    let Some(key) = automations.map(|mapping| mapping.keys().next()).flatten() else {
        return Err(anyhow::Error::msg(format!(
            "No automations found in {}",
            path.display()
        )));
    };

    let key = Regex::new(&format!(r"([_-]?{ENC_BEGIN_MARK}.*?{ENC_END_MARK})"))
        .unwrap()
        .replace_all(key.as_str().unwrap(), "");
    Ok(key.to_string())
}
