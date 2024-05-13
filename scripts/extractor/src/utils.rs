use anyhow::Result;
use base64::{engine::general_purpose::STANDARD_NO_PAD as base64, Engine as _};
use chrono::DateTime;
use regex::{Captures, Regex};
use std::io;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::str;
use walkdir::WalkDir;

const ENC_BEGIN_MAR: &str = r"_JINJI_ENC_BEGIN_MARK_";
const ENC_END_MARK: &str = r"_JINJI_ENC_END_MARK_";

#[macro_export]
macro_rules! debug_print {
    ($debug:expr, $($arg:tt)*) => {
        if $debug {
            println!($($arg)*);
        }
    };
}

pub fn encode_jinja_expressions<'a>(source: &'a str) -> String {
    let source = Regex::new(r"\{%.*?%\}").unwrap().replace_all(source, "");
    let result = Regex::new(r"(\{\{.*?\}\})")
        .unwrap()
        .replace_all(&source, |caps: &Captures| {
            let encoded = base64.encode(&caps[1]);
            format!("{ENC_BEGIN_MAR}{encoded}{ENC_END_MARK}")
        });

    result.to_string()
}

// Extract an element from the text using a regular expression
pub fn extract_file_path(text: &str, re: &str) -> Option<PathBuf> {
    Regex::new(re)
        .unwrap()
        .captures(text)
        .and_then(|groups| groups.get(1))
        .map(|matched| matched.as_str().to_string())
        .map(|s| PathBuf::from(s))
}

pub fn get_indentation(text: &str) -> usize {
    text.chars().take_while(|c| c.is_whitespace()).count()
}

pub fn linkify(file_path: &Path) -> String {
    let url_path = file_path
        .strip_prefix(Path::new("docs"))
        .unwrap_or(file_path);
    format!("https://docs.gitstream.cm/{}", url_path.display()).clean_url()
}

trait CleanUrl {
    fn clean_url(&self) -> String;
}

impl CleanUrl for String {
    fn clean_url(&self) -> String {
        clean_url(self)
    }
}

fn clean_url(url: &str) -> String {
    url.splitn(2, "://")
        .map(|s| {
            s.split("/")
                .filter(|p| !p.is_empty())
                .collect::<Vec<&str>>()
                .join("/")
        })
        .collect::<Vec<String>>()
        .join("://")
}

pub fn get_initial_commit_date(file_path: &Path) -> Result<String> {
    let output = Command::new("git")
        .arg("log")
        .arg("--follow") // Use --follow to track file renames
        .arg("--format=%aD")
        .arg("--")
        .arg(file_path)
        .output()?;

    if output.status.success() {
        let stdout = str::from_utf8(&output.stdout)?;
        let dates: Vec<&str> = stdout.lines().collect();
        if let Some(initial_date) = dates.last() {
            let initial_date = DateTime::parse_from_rfc2822(initial_date)?;
            Ok(initial_date.to_rfc3339())
        } else {
            Err(anyhow::Error::msg("No commit dates found"))
        }
    } else {
        Err(anyhow::anyhow!(
            String::from_utf8(output.stderr).unwrap_or_default()
        ))
    }
}

/// Finds SVG files in the specified directory and returns a vector of their full paths.
pub fn find_svg_files_in_directory(directory: &Path) -> io::Result<Vec<PathBuf>> {
    let mut svg_files: Vec<PathBuf> = Vec::new();

    // Traverse the directory
    for entry in WalkDir::new(directory) {
        let entry = entry?;
        let path = entry.path();
        if path.extension().and_then(std::ffi::OsStr::to_str) == Some("svg") {
            // If the file is an SVG, add its full path to the vector
            svg_files.push(path.to_path_buf());
        }
    }

    Ok(svg_files)
}
