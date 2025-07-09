/**
 * Test file for extractTerraformChanges
 */

const extractTerraformChanges = require('./index.js');
const fs = require('fs');
const path = require('path');

// Load test data
const rwChangeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pr_with_rw_change.json'), 'utf8'));
const roChangeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pr_with_ro_change.json'), 'utf8'));
const roToRwChangeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pr_with_ro_to_rw_change.json'), 'utf8'));

// Test cases
const testCases = [
  {
    name: "PR with RW privilege change",
    input: rwChangeData,
    expected: "rw",
    description: "Should return 'rw' when a JIT object with rw privileges is modified (changed from rw to ro)"
  },
  {
    name: "PR with RO privilege change",
    input: roChangeData,
    expected: "ro",
    description: "Should return 'ro' when only JIT objects with ro privileges are modified (TTL changes)"
  },
  {
    name: "PR with RO to RW privilege change",
    input: roToRwChangeData,
    expected: "rw",
    description: "Should return 'rw' when a JIT object with rw privileges is modified (changed from rw to ro)"
  },
  {
    name: "Empty input",
    input: [],
    expected: null,
    description: "Should return null for empty input array"
  },
  {
    name: "Null input",
    input: null,
    expected: null,
    description: "Should return null for null input"
  },
  {
    name: "Invalid input",
    input: "not an array",
    expected: null,
    description: "Should return null for non-array input"
  },
  {
    name: "Change without diff",
    input: [{
      original_file: "test.hcl",
      new_file: "test.hcl",
      original_content: "some content",
      new_content: "some other content"
    }],
    expected: null,
    description: "Should return null when diff is missing"
  },
  {
    name: "Change without original content",
    input: [{
      original_file: "test.hcl",
      new_file: "test.hcl",
      diff: "@@ -1,1 +1,1 @@\n-old\n+new",
      new_content: "some content"
    }],
    expected: null,
    description: "Should return null when original_content is missing"
  },
  {
    name: "Changes outside JIT objects",
    input: [{
      original_file: "test.hcl",
      new_file: "test.hcl",
      diff: "@@ -1,3 +1,3 @@\n include \"root\" {\n-  path = find_in_parent_folders(\"root.hcl\")\n+  path = find_in_parent_folders(\"new_root.hcl\")\n }",
      original_content: `include "root" {
  path = find_in_parent_folders("root.hcl")
}

inputs = {
  jits = [
    {
      user = "test_user"
      access = [
        {
          tables = ["*"]
          privileges = "rw"
        }
      ]
    }
  ]
}`,
      new_content: `include "root" {
  path = find_in_parent_folders("new_root.hcl")
}

inputs = {
  jits = [
    {
      user = "test_user"
      access = [
        {
          tables = ["*"]
          privileges = "rw"
        }
      ]
    }
  ]
}`
    }],
    expected: null,
    description: "Should return null when changes are outside JIT objects"
  },
  {
    name: "Mixed privilege changes",
    input: [{
      original_file: "test.hcl",
      new_file: "test.hcl",
      diff: "@@ -10,7 +10,7 @@\n           privileges = \"rw\"\n         }\n       ]\n     },\n     {\n       user = \"user2\"\n-      default_ttl = 3600\n+      default_ttl = 7200\n       access = [\n         {\n           privileges = \"ro\"",
      original_content: `inputs = {
  jits = [
    {
      user = "user1"
      access = [
        {
          tables = ["*"]
          privileges = "rw"
        }
      ]
    },
    {
      user = "user2"
      default_ttl = 3600
      access = [
        {
          tables = ["logs"]
          privileges = "ro"
        }
      ]
    }
  ]
}`,
      new_content: `inputs = {
  jits = [
    {
      user = "user1"
      access = [
        {
          tables = ["*"]
          privileges = "rw"
        }
      ]
    },
    {
      user = "user2"
      default_ttl = 7200
      access = [
        {
          tables = ["logs"]
          privileges = "ro"
        }
      ]
    }
  ]
}`
    }],
    expected: "ro",
    description: "Should return 'ro' when only the JIT object with ro privileges is modified"
  }
];

// Run the tests
let passed = 0;
let failed = 0;

console.log('Running tests for extractTerraformChanges\n');

testCases.forEach(test => {
  try {
    const result = extractTerraformChanges(test.input);
    const success = result === test.expected;

    if (success) {
      console.log(`✅ PASS: ${test.name}`);
      console.log(`   ${test.description}`);
      passed++;
    } else {
      console.log(`❌ FAIL: ${test.name}`);
      console.log(`   ${test.description}`);
      console.log(`   Expected: ${test.expected}`);
      console.log(`   Actual:   ${result}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ERROR: ${test.name}`);
    console.log(`   ${test.description}`);
    console.log(`   Error: ${error.message}`);
    failed++;
  }
  console.log('');
});

console.log(`Test Summary: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('All tests passed successfully!');
}
