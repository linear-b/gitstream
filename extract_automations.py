import os
from pathlib import Path
import re
import json
import sys
from git import Repo
import csv

popularity = {}

def load_popularity(popularity_csv):
    try:
        # Open the CSV file
        with open(popularity_csv, mode='r') as file:
            # Create a CSV reader
            reader = csv.reader(file)
            print("Popularity CSV file found")
            # Skip the header row if your CSV has one
            next(reader)
            # Read each row in the CSV
            for row in reader:
                key = row[0]  # Assume the key is in the first column
                value = row[2]  # Assume the value is in the second column
                popularity[key] = value
    except (FileNotFoundError):
        print("Error: could not find", popularity_csv)

def extract_info(file_path) -> list[dict]:
    file_directory = extract_directory(file_path)

    readme_tabs = 1
    info_tabs = []

    info = {
        # when `if:true` it's marked as alwasy
        'always': False,
        # the automation name as defined in the cm file
        'automation_in_cm': "",
        # list of categories, taken from the README file desc header
        'category': [],
        # link to the cm file extracted from the README file body
        'cm': "",
        # the config desc extracted from the README file body
        'configuration_description': "",
        # the file creation date based on the Git commit
        'date': find_initial_commit_of_file('.', file_path),
        # the automation desc, taken from the README file desc header
        'description': "",
        # the README file path
        'file': str(file_path),
        # link to the PNG file extracted from the README file body
        'image': "",
        # reconstruct the HTTPS link to the page
        'link': linkify(file_directory),
        # link to the SVG file extracted from the README directory
        'logo': None,
        # the title, taken from the README file desc header
        'name': "",
        # is quickstart, taken from the README file desc header
        'quickstart': False,
    }

    logo = search_file(file_directory, ".svg")
    if logo:
        info['logo'] = linkify(logo)

    configuration_description_block = False
    # How many sections in the README file
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            for line in file:
                if 'This file has moved' in line:
                    return []
                elif line.startswith('visible:'):
                    visible = line[len('visible:'):].strip()
                    if visible.lower() in ['false', '0', 'no']:
                        return []
                elif line.startswith('title:'):
                    title = line[len('title:'):].strip()
                    info['name'] = title.removeprefix('gitStream').lstrip().removeprefix('Automation - ')
                elif line.startswith('description:'):
                    info['description'] = line[len('description:'):].strip()
                elif line.startswith('category:'):
                    info['category'] += line[len('category:'):].strip().strip('][').split(', ')
                elif line.startswith('quickstart:'):
                    quickstart = line[len('quickstart:'):].strip()
                    is_quickstart = quickstart.lower() in ['true', '1', 'yes']
                    info['quickstart'] = is_quickstart
                elif line.startswith('=== '):
                    if readme_tabs > 1:
                        info_tabs.append(info.copy())
                        info['always'] = False
                        info['automation_in_cm'] = ""
                        info['cm'] = ""
                        info['configuration_description'] = ""
                    readme_tabs += 1
                elif '.png' in line:
                    match = re.search(r'!\[.*?\]\((.*?)\)', line)
                    if match:
                        # Get the directory path and append the image filename
                        dir_path = file_path.parent
                        # Create a full path to the image by combining the directory path
                        # with the relative image path extracted from the markdown
                        image_path = dir_path / match.group(1)
                        info['image'] = linkify(str(image_path))
                # elif '<div class="automationDescription"' in line:
                elif 'Conditions (all must be true)' in line:
                    configuration_description_block = True
                elif configuration_description_block and '</div>' in line:
                    configuration_description_block = False
                elif configuration_description_block and '!!!' in line:
                    configuration_description_block = False
                elif configuration_description_block:
                    info['configuration_description'] += line
                elif '.cm' in line:
                    match = re.search(r'(docs/downloads\/.*?\.cm)', line)
                    if match:
                        # Get the directory path and append the image filename
                        cm_path = match.group(1)
                        cm_link = cm_path.removeprefix('docs/')
                        info['cm'] = linkify(cm_link)
                        # check the CM code for the conditions
                        with open(cm_path, 'r', encoding='utf-8') as cm_file:
                            conditions = []
                            conditions_block = False
                            automation_block = False
                            for cm_line in cm_file:
                                if 'if:' in cm_line:
                                    conditions_block = True
                                elif 'run:' in cm_line:
                                    conditions_block = False
                                    break
                                elif 'automations:' in cm_line:
                                    automation_block = True
                                elif conditions_block:
                                    is_always = '- true' in cm_line
                                    conditions.append(is_always)
                                elif automation_block:
                                    if cm_line.strip().startswith('#'):
                                       continue
                                    if cm_line.strip().startswith('{%'):
                                        continue
                                    if cm_line.strip() == '':
                                        continue
                                    automation_block = False
                                    automation = cm_line.strip().rstrip(':')
                                    automation = automation.split('_{{')[0]
                                    info['automation_in_cm'] = automation
                                    value = popularity.get(automation)
                                    info['popularity'] = int(value) if value else None
                             # when all condtions are True, its always on
                            info['always'] = all(conditions)
                        # remove this anyway

    except Exception as e:
        eprint(f"Error reading file {file_path}: {e}")
        return []

    info_tabs.append(info)
    return info_tabs

def search_file(path, pattern):
    for file in os.listdir(path):
        if pattern in file:
            return os.path.join(path, file)

def linkify(file_path):
    # Create a Path object from the file_path
    path = Path(file_path)
    # Remove the 'docs' prefix if it exists
    url_path = str(path).removeprefix('/').removeprefix('docs').removeprefix('/')
    return f"https://docs.gitstream.cm/{url_path}"

def extract_directory(file_path):
    # Create a Path object from the file_path
    path = Path(file_path)
    # Get the parent directory of the README.md file
    parent_dir = path.parent
    # Convert the directory to a string
    return str(parent_dir)

def eprint(*args, **kwargs):
    print(*args, file=sys.stderr, **kwargs)

def find_initial_commit_of_file(repo_path, file_path):
    repo = Repo(repo_path)
    commits = list(repo.iter_commits(paths=file_path))
    if commits:
        first_commit = commits[-1]
        return first_commit.committed_datetime.isoformat()
    else:
        return None

def main():
    load_popularity(Path("../gitstream-analysis/automation_usage.csv"))
    base_path = Path('docs/automations')

    automations = []
    count = 0
    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file == 'README.md':
                file_path = Path(root) / file
                file_info = extract_info(file_path)
                for info in file_info:
                    info['id'] = count
                    count += 1
                    automations.append(info)

    # Convert the automations list to a JSON string
    automations_json = json.dumps(automations, indent=4)

    # Print the JSON-formatted string
    print(automations_json)

if __name__ == "__main__":
    main()
