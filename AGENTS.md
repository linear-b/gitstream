# Repository Guidelines

## Project Structure & Module Organization
- `docs/` — MkDocs source for the public documentation. Edit Markdown here.
- `mkdocs.yml` — site configuration (nav, theme, plugins).
- `plugins/filters/<FilterName>/` — gitStream filter plugins: `index.js`, `README.md`, optional `reference.md`, and example `.cm` files.
- `assets/` — shared images and downloadable assets used by the docs.
- `automations/` — pointers and examples that reference the docs library.
- `site/` — generated output from MkDocs. Do not edit by hand.
- `.venv/`, `.python-version`, `requirements.txt` — local Python environment for docs.

## Build, Test, and Development Commands
- Create env: `python -m venv .venv && . ./.venv/bin/activate`
- Install deps: `pip install -r requirements.txt`
- Run docs live: `mkdocs serve` (http://127.0.0.1:8000)
- Build docs: `mkdocs build --strict` (fails on broken links/config)
- Smoke‑test a filter: `node plugins/filters/<FilterName>/index.js` (many files include `console.assert` samples)

## Coding Style & Naming Conventions
- Markdown: concise headings, relative links, fenced code blocks; prefer images under `assets/`.
- JavaScript filters: CommonJS (`module.exports`), semicolons, 2‑space indent, small pure functions; keep file names `index.js` inside `plugins/filters/<FilterName>/`.
- CM examples: use snake_case for filenames (e.g., `compare_semver.cm`), two‑space indentation in YAML‑like blocks.
- Filenames/paths referenced in docs must match the repo layout exactly.

## Testing Guidelines
- Docs: run `mkdocs build --strict` before pushing; fix warnings and link errors.
- Filters: include minimal `console.assert(...)` cases at the bottom of `index.js`; run with Node installed.
- When adding new examples, validate they render in the docs and copy correctly under `docs/downloads/` if intended for download.

## Commit & Pull Request Guidelines
- Commit messages: imperative mood, clear scope, and short subject (e.g., `Fix hyphen in code_experts command (#788)`).
- PRs must include: purpose, screenshots for visual changes, and links to related issues/discussions.
- Keep changes focused; update or add examples/snippets when plugin behavior changes.
- Do not commit secrets; redact tokens in code and `.cm` examples (use placeholders like `${JIRA_TOKEN}`).
