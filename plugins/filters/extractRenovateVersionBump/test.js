/**
 * Test file for extractRenovateVersionBump
 */

const extractRenovateVersionBump = require('./index.js');

// Test cases based on actual Renovate format
const testCases = [
  {
    name: "Single version bump",
    input: "Updates axios [`0.2.2` -> `0.30.0`]",
    expected: [["0.30.0", "0.2.2"]]
  },
  {
    name: "Multiple version bumps",
    input: "Updates axios [`0.2.2` -> `0.30.0`] and lodash [`4.17.20` -> `4.17.21`]",
    expected: [["0.30.0", "0.2.2"], ["4.17.21", "4.17.20"]]
  },
  {
    name: "Version with trailing dot",
    input: "Updates serialize-javascript [`6.0.1` -> `6.0.2.`]",
    expected: [["6.0.2", "6.0.1"]]
  },
  {
    name: "Version with alpha characters",
    input: "Updates package [`1.0.0α` -> `1.1.0β`]",
    expected: [["1.1.0β", "1.0.0α"]]
  },
  {
    name: "No version information",
    input: "This is a regular PR description without version bumps",
    expected: []
  },
  {
    name: "Empty description",
    input: "",
    expected: []
  },
  {
    name: "Quoted empty description",
    input: '""',
    expected: []
  },
  {
    name: "Escaped quotes in description",
    input: "Updates package [\\`1.0.0\\` -> \\`2.0.0\\`]",
    expected: [["2.0.0", "1.0.0"]]
  }
];

// Run the tests
let passed = 0;
let failed = 0;

console.log('Running tests for extractRenovateVersionBump\n');

testCases.forEach(test => {
  const result = extractRenovateVersionBump(test.input);
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

console.log('\nTesting multiple function calls for regex state management...');
const testInput = "Updates [`test`](https://example.com) from `1.0.0` to `2.0.0`";
const firstCall = extractRenovateVersionBump(testInput);
const secondCall = extractRenovateVersionBump(testInput);
const thirdCall = extractRenovateVersionBump(testInput);

const stateTestSuccess = JSON.stringify(firstCall) === JSON.stringify(secondCall) && 
                        JSON.stringify(secondCall) === JSON.stringify(thirdCall);

if (stateTestSuccess) {
  console.log('✅ PASS: Multiple calls produce consistent results');
  passed++;
} else {
  console.log('❌ FAIL: Multiple calls produce inconsistent results');
  console.log(`  First call:  ${JSON.stringify(firstCall)}`);
  console.log(`  Second call: ${JSON.stringify(secondCall)}`);
  console.log(`  Third call:  ${JSON.stringify(thirdCall)}`);
  failed++;
}

console.log(`\nTest Summary: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('All tests passed successfully!');
}
