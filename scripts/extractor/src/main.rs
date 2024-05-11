use clap::Parser as ClapParser;
use rayon::prelude::*;
use serde::Serialize;
use serde_json;
use std::io;
use std::path::{Path, PathBuf};
use std::str;
use walkdir::WalkDir;

mod parser;
mod utils;

const ENC_BEGIN_MARK: &str = r"_JINJI_ENC_BEGIN_MARK_";
const ENC_END_MARK: &str = r"_JINJI_ENC_END_MARK_";

// Define your CLI arguments structure
#[derive(ClapParser, Debug)]
#[clap(author, version, about, long_about = None)]
struct Cli {
    /// Path prefix to filter the files that will be processed
    #[clap(short, long)]
    path_prefix: Option<String>,
    /// Enable debug mode for more verbose output
    #[clap(long, action = clap::ArgAction::SetTrue)]
    debug: bool,
}

#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Serialize)]
struct AutomationInfo {
    always: bool,
    automation_in_cm: Option<String>,
    categories: Vec<String>,
    cm: Option<String>,
    config: Option<String>,
    date: Option<String>, // Assuming date as String for simplicity
    // the automation desc, taken from the README file desc header
    description: Option<String>,
    // the README file path
    file: PathBuf,
    image: Option<String>,
    id: usize,
    link: String,
    logo: Option<PathBuf>,
    // the title, taken from the README file desc header
    name: Option<String>,
    // link to the SVG file extracted from the README directory
    quickstart: bool,
    visible: bool,
}

fn main() -> io::Result<()> {
    let cli = Cli::parse();
    debug_print!(
        cli.debug,
        "Current working directory: {:?}",
        std::env::current_dir()?
    );
    let base_path = Path::new("docs/automations");

    // Initialize WalkDir to recursively walk through the base_path directory
    let automations = WalkDir::new(base_path)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|entry| entry.file_name() == "README.md")
        .filter(|entry| !entry.path().to_str().unwrap().contains("utilities/cm-header"))
        .filter(|entry| {
            cli.path_prefix.as_ref().map_or(true, |prefix| {
                entry.path().to_str().map_or(false, |s| s.contains(prefix))
            })
        })
        .collect::<Vec<_>>() // Collect to Vec before parallel processing
        .par_iter() // Use Rayon's parallel iterator
        .map(|entry| {
            let entry_path = entry.path();
            // Load and parse the markdown content of README.md files
            parser::load_and_parse_markdown(entry_path, &cli)
        })
        .flatten()
        .collect::<Vec<AutomationInfo>>()
        .into_iter()
        // Assign sequance id to each automation element
        .enumerate()
        .map(|(index, mut info)| {
            info.id = index;
            info
        })
        .collect::<Vec<AutomationInfo>>();

    // Serialize the automations Vec to JSON or handle as needed
    println!("{}", serde_json::to_string_pretty(&automations).unwrap());

    Ok(())
}
