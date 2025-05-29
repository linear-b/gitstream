/**
 * @module askAI
 * @description A gitStream plugin to interact with AI models. Currently works with `ChatGPR-4o-mini`.
 * @param {Object} context - The context that will be attached to the prompt .
 * @param {string} role - Role instructions for the conversation.
 * @param {string} prompt - The prompt string.
 * @param {Object} token - The token to the AI model.
 * @returns {Object} Returns the response from the AI model.
 * @example {{ branch | generateDescription(pr, repo, source) }}
 * @license MIT
 * */

const MAX_TOKENS = 4096;
const OPEN_AI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const LOCK_FILES = [
  'package-lock.json',
  'yarn.lock',
  'npm-shrinkwrap.json',
  'Pipfile.lock',
  'poetry.lock',
  'conda-lock.yml',
  'Gemfile.lock',
  'composer.lock',
  'packages.lock.json',
  'project.assets.json',
  'pom.xml',
  'Cargo.lock',
  'mix.lock',
  'pubspec.lock',
  'go.sum',
  'stack.yaml.lock',
  'vcpkg.json',
  'conan.lock',
  'ivy.xml',
  'project.clj',
  'Podfile.lock',
  'Cartfile.resolved',
  'flake.lock',
  'pnpm-lock.yaml',
  'uv.lock'
];
const EXCLUDE_EXPRESSIONS_LIST = [
  '.*\\.(ini|csv|xls|xlsx|xlr|doc|docx|txt|pps|ppt|pptx|dot|dotx|log|tar|rtf|dat|ipynb|po|profile|object|obj|dxf|twb|bcsymbolmap|tfstate|pdf|rbi|pem|crt|svg|png|jpeg|jpg|ttf)$',
  '.*(package-lock|packages\\.lock|package)\\.json$',
  '.*(yarn|gemfile|podfile|cargo|composer|pipfile|gopkg)\\.lock$',
  '.*gradle\\.lockfile$',
  '.*lock\\.sbt$',
  '.*dist/.*\\.js',
  '.*public/assets/.*\\.js',
  '.*ci\\.yml$'
];
const IGNORE_FILES_REGEX_LIST = [
  ...LOCK_FILES.map(f => f.replace('.', '\\.')),
  ...EXCLUDE_EXPRESSIONS_LIST
];
const EXCLUDE_PATTERN = new RegExp(IGNORE_FILES_REGEX_LIST.join('|'));

/**
 * @description Check if a file should be excluded from the context like "package-lock.json"
 * @param {*} fileObject
 * @returns returns true if the file should be excluded
 */
const shouldExcludeFile = fileObject => {
  const shouldExludeByName = EXCLUDE_PATTERN.test(fileObject.original_file);
  const shouldExludeBySize = (fileObject.diff?.split(' ').length ?? 0) > 1000;

  return shouldExludeByName || shouldExludeBySize;
};

/**
 * @description Check if a file should be included in the context
 * @param {*} fileObject
 * @returns returns true if the file should be included
 */
const shouldIncludeFile = fileObject => {
  return !shouldExcludeFile(fileObject);
};

const buildContextForGPT = context => {
  if (Array.isArray(context)) {
    return context.filter(element =>
      typeof element !== 'object' ? true : context.filter(shouldIncludeFile)
    );
  }

  if (context?.diff?.files) {
    const files = context.diff.files.filter(shouldIncludeFile);
    return files;
  }

  return context;
};

const askAI = async (context, role, prompt, token, callback) => {
  const formattedContext = buildContextForGPT(context);

  if (!formattedContext?.length) {
    const message = `There are no context files to analyze.\nAll ${context?.diff?.files?.length} files were excluded by pattern or size.`;
    console.log(message);
    return callback(null, message);
  }

  const response = await fetch(OPEN_AI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-2024-08-06',
      messages: [
        {
          role: 'system',
          content: `You are a ${role}. Answer only to the request, without any introductory or conclusion text.`
        },
        {
          role: 'user',
          content: JSON.stringify(formattedContext)
        },
        { role: 'user', content: prompt }
      ],
      max_tokens: MAX_TOKENS
    })
  });

  const data = await response.json();

  if (data?.error?.message) {
    console.error(data.error.message);
    return callback(null, data.error.message);
  }

  const suggestion =
    data.choices?.[0]?.message?.content ??
    'context was too big for api, try with smaller context object';

  return callback(null, suggestion);
};

module.exports = {
  async: true,
  filter: askAI
};
