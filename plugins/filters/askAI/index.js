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
**/

const lockFiles = [
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
  'pnpm-lock.yaml'
];

const excludeExpressionsList = [
  '.*\\.(ini|csv|xls|xlsx|xlr|doc|docx|txt|pps|ppt|pptx|dot|dotx|log|tar|rtf|dat|ipynb|po|profile|object|obj|dxf|twb|bcsymbolmap|tfstate|pdf|rbi|pem|crt|svg|png|jpeg|jpg|ttf)$',
  '.*(package-lock|packages\\.lock|package)\\.json$',
  '.*(yarn|gemfile|podfile|cargo|composer|pipfile|gopkg)\\.lock$',
  '.*gradle\\.lockfile$',
  '.*lock\\.sbt$',
  '.*dist/.*\\.js',
  '.*public/assets/.*\\.js',
  '.*ci\\.yml$'
];

const ignoreFilesRegexList = lockFiles
  .map(file => file.replace('.', '\\.'))
  .concat(excludeExpressionsList);
const excludePattern = new RegExp(ignoreFilesRegexList.join('|'));

const filterExcludeFiles = file => {
  return !excludePattern.test(file) || (file.diff?.split(' ').length ?? 0) < 800;
};

const buildArrayContext = context => {
  return context.filter(element => {
    if (typeof element !== 'object') {
      return true;
    }

    return context.filter(filterExcludeFiles);
  });
};

const buildSourceContext = context => {
  return context.diff.files.filter(filterExcludeFiles);
};

const buildContextForGPT = context => {
  if (Array.isArray(context)) {
    return buildArrayContext(context);
  }

  if (context?.diff?.files) {
    return buildSourceContext(context);
  }

  return context;
};

const askAI = async (context, role = '', prompt, token, callback) => {
  const cacheKey = `${__filename}${role}${prompt}`;
  
  if (process.env[cacheKey]) {
    return callback(null, process.env[cacheKey]);
  }

  const maxTokens = 4096;
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  const formattedContext = buildContextForGPT(context);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-2024-08-06',
      messages: [
        ...(role ? 
        [
          {
            role: 'system',
            content: `You are a ${role}. Answer only to the request, without any introductory or conclusion text.`
          }] 
          : []),
        {
          role: 'user',
          content: JSON.stringify(formattedContext)
        },
        { role: 'user', content: prompt }
      ],
      max_tokens: maxTokens
    })
  });

  const data = await response.json();

  const suggestion =
    data.choices?.[0]?.message?.content ??
    'context was too big for api, try with smaller context object';

  process.env[cacheKey] = suggestion;

  return callback(null, process.env[cacheKey]);
};

module.exports = {
  async: true,
  filter: askAI
};
