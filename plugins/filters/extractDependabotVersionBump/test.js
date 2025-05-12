/**
 * Test file for extractDependabotVersionBump
 */

const extractDependabotVersionBump = require('./index.js');

// Test cases
const testCases = [
  {
    name: "Updates format",
    input: "Bumps the npm_and_yarn group with 1 update in the / directory: [axios](https://github.com/axios/axios).\n\nUpdates `axios` from 0.2.2 to 0.30.0",
    expected: ["0.30.0", "0.2.2"]
  },
  {
    name: "Bumps format",
    input: "Bumps [serialize-javascript](https://github.com/yahoo/serialize-javascript) from 5.1.2 to 7.0.0.",
    expected: ["7.0.0", "5.1.2"]
  },
  {
    name: "Bumps format with escaped quotes and HTML",
    input: "Bumps [serialize-javascript](https://github.com/yahoo/serialize-javascript) from 6.0.1 to 6.0.2.<br />\\n<details><br />\\n<summary>Release notes</summary><br />\\n<p><em>Sourced from <a href=\\\"https://github.com/yahoo/serialize-javascript/releases\\\">serialize-javascript's releases</a>.</em></p><br />\\n<blockquote><br />\\n<h2>v6.0.2</h2><br />\\n<ul><br />\\n<li>fix: serialize URL string contents to prevent XSS (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/173\\\">#173</a>)  f27d65d</li><br />\\n<li>Bump <code>@​babel/traverse</code> from 7.10.1 to 7.23.7 (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/171\\\">#171</a>)  02499c0</li><br />\\n<li>docs: update readme with URL support (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/146\\\">#146</a>)  0d88527</li><br />\\n<li>chore: update node version and lock file  e2a3a91</li><br />\\n<li>fix typo (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/164\\\">#164</a>)  5a1fa64</li><br />\\n</ul><br />\\n<p><a href=\\\"https://github.com/yahoo/serialize-javascript/compare/v6.0.1...v6.0.2\\\">https://github.com/yahoo/serialize-javascript/compare/v6.0.1...v6.0.2</a></p><br />\\n</blockquote><br />\\n</details><br />\\n<details><br />\\n<summary>Commits</summary><br />\\n<ul><br />\\n<li><a href=\\\"https://github.com/yahoo/serialize-javascript/commit/b71ec23841d7cf30847d3071d9da38ee0b397fc8\\\"><code>b71ec23</code></a> 6.0.2</li><br />\\n<li><a href=\\\"https://github.com/yahoo/serialize-javascript/commit/f27d65d3de42affe2aac14607066c293891cec4e\\\"><code>f27d65d</code></a> fix: serialize URL string contents to prevent XSS (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/173\\\">#173</a>)</li><br />\\n<li><a href=\\\"https://github.com/yahoo/serialize-javascript/commit/02499c0adfb40f48e1ebdcbe6fffc83b162b95e9\\\"><code>02499c0</code></a> Bump <code>@​babel/traverse</code> from 7.10.1 to 7.23.7 (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/171\\\">#171</a>)</li><br />\\n<li><a href=\\\"https://github.com/yahoo/serialize-javascript/commit/0d885272f45069b1207189ae18a6f2726b4abaa9\\\"><code>0d88527</code></a> docs: update readme with URL support (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/146\\\">#146</a>)</li><br />\\n<li><a href=\\\"https://github.com/yahoo/serialize-javascript/commit/e2a3a9173e6770ee92e02d95d6a8e7958dfb419d\\\"><code>e2a3a91</code></a> chore: update node version and lock file</li><br />\\n<li><a href=\\\"https://github.com/yahoo/serialize-javascript/commit/5a1fa646d9cbbe0b4f13c07f01c249fb2493e20f\\\"><code>5a1fa64</code></a> fix typo (<a href=\\\"https://redirect.github.com/yahoo/serialize-javascript/issues/164\\\">#164</a>)</li><br />\\n<li>See full diff in <a href=\\\"https://github.com/yahoo/serialize-javascript/compare/v6.0.1...v6.0.2\\\">compare view</a></li><br />\\n</ul><br />\\n</details><br />\\n<br /><br />\\n<br />\\n<br />\\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serialize-javascript&package-manager=npm_and_yarn&previous-version=6.0.1&new-version=6.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)<br />\\n<br />\\nDependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.<br />\\n<br />\\n[//]: # (dependabot-automerge-start)<br />\\n[//]: # (dependabot-automerge-end)<br />\\n<br />\\n---<br />\\n<br />\\n<details><br />\\n<summary>Dependabot commands and options</summary><br />\\n<br /><br />\\n<br />\\nYou can trigger Dependabot actions by commenting on this PR:<br />\\n- `@dependabot rebase` will rebase this PR<br />\\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it<br />\\n- `@dependabot merge` will merge this PR after your CI passes on it<br />\\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it<br />\\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging<br />\\n- `@dependabot reopen` will reopen this PR if it is closed<br />\\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually<br />\\n- `@dependabot show <dependency name> ignore conditions` will show all of the ignore conditions of the specified dependency<br />\\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)<br />\\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)<br />\\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)<br />\\n<br />\\n<br />\\n</details>\"",
    expected: ["6.0.2", "6.0.1"]
  }
];

// Run the tests
let passed = 0;
let failed = 0;

console.log('Running tests for extractDependabotVersionBump\n');

testCases.forEach(test => {
  const result = extractDependabotVersionBump(test.input);
  const success = JSON.stringify(result) === JSON.stringify(test.expected);

  if (success) {
    console.log(`✅ PASS: ${test.name}`);
    passed++;
  } else {
    console.log(`❌ FAIL: ${test.name}`);
    console.log(`  Expected: ${JSON.stringify(test.expected)}`);
    console.log(`  Actual:   ${JSON.stringify(result)}`);
    failed++;
  }
});

console.log(`\nTest Summary: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('All tests passed successfully!');
}
