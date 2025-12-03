const readMarkdownWithLinks = require('./index.js');

const fs = require('fs');
const path = require('path');

// Copy the internal functions for testing
function extractInternalLinks(content, basePath) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const internalLinks = [];
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const linkText = match[1];
    const linkPath = match[2];
    
    if (!linkPath.startsWith('http') && linkPath.endsWith('.md')) {
      const resolvedPath = path.resolve(basePath, linkPath);
      internalLinks.push({
        text: linkText,
        path: linkPath,
        resolvedPath: resolvedPath
      });
    }
  }

  return internalLinks;
}

function readMarkdown(filePath, options = {}) {
  return readMarkdownWithLinks(filePath, { ...options, structured: true });
}

// Simple assertion function
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// Test suite
function runTests() {
  console.log('🧪 Running GitStream Read Markdown Plugin Tests\n');

  // Setup test files
  setupTestFiles();

  // Test 1: Basic file reading
  testBasicFileReading();

  // Test 2: Link extraction
  testLinkExtraction();

  // Test 3: Link following
  testLinkFollowing();

  // Test 4: Circular reference detection
  testCircularReferenceDetection();

  // Test 5: Depth limit
  testDepthLimit();

  // Test 6: Non-existent file handling
  testNonExistentFile();

  // Test 7: Combined content format
  testCombinedContentFormat();

  console.log('\n🎉 All tests passed!');
}

function setupTestFiles() {
  console.log('📁 Setting up test files...');

  // Main file
  const mainContent = `# Main Document

This is the main document.

See also:
- [Related document](./related.md)
- [Another document](./another.md)
- [External link](https://example.com)

## Main Content
This is some main content.
`;

  // Related file
  const relatedContent = `# Related Document

This document is related to the main one.

Check out [Sub document](./sub/subdoc.md) for more details.

## Related Content
Some related information here.
`;

  // Another file
  const anotherContent = `# Another Document

This is another document.

## Another Content
More information in this document.
`;

  // Sub document
  const subContent = `# Sub Document

This is a sub document.

Back to [main](../main.md) document.

## Sub Content
Sub document information.
`;

  // Create test directory structure
  fs.mkdirSync('./test-files', { recursive: true });
  fs.mkdirSync('./test-files/sub', { recursive: true });

  fs.writeFileSync('./test-files/main.md', mainContent);
  fs.writeFileSync('./test-files/related.md', relatedContent);
  fs.writeFileSync('./test-files/another.md', anotherContent);
  fs.writeFileSync('./test-files/sub/subdoc.md', subContent);

  console.log('✅ Test files created\n');
}

function testBasicFileReading() {
  console.log('🔍 Test 1: Basic file reading');
  
  const result = readMarkdown('./test-files/main.md', { followLinks: false });
  
  assert(result.content !== null, 'Should read file content');
  assert(result.content.includes('# Main Document'), 'Should contain main document title');
  assert(result.error === null, 'Should have no errors');
  assert(result.linkedFiles.length === 0, 'Should not follow links when followLinks=false');
  console.log('');
}

function testLinkExtraction() {
  console.log('🔗 Test 2: Link extraction');
  
  const content = `# Test
  
See [Related](./related.md) and [Another](./another.md).
Also check [External](https://example.com) and [Non-markdown](./file.txt).
`;
  
  const links = extractInternalLinks(content, './test-files');
  
  assert(links.length === 2, 'Should extract exactly 2 internal markdown links');
  assert(links[0].text === 'Related', 'First link text should be "Related"');
  assert(links[0].path === './related.md', 'First link path should be "./related.md"');
  assert(links[1].text === 'Another', 'Second link text should be "Another"');
  assert(links[1].path === './another.md', 'Second link path should be "./another.md"');
  console.log('');
}

function testLinkFollowing() {
  console.log('🚶 Test 3: Link following');
  
  const result = readMarkdown('./test-files/main.md', { followLinks: true, maxDepth: 2 });
  
  assert(result.linkedFiles.length === 2, 'Should follow 2 internal links from main.md');
  
  const relatedFile = result.linkedFiles.find(f => f.linkText === 'Related document');
  const anotherFile = result.linkedFiles.find(f => f.linkText === 'Another document');
  
  assert(relatedFile !== undefined, 'Should find related document');
  assert(anotherFile !== undefined, 'Should find another document');
  assert(relatedFile.content.includes('# Related Document'), 'Related file should have correct content');
  assert(anotherFile.content.includes('# Another Document'), 'Another file should have correct content');
  
  // Check that related.md's links are also followed
  assert(relatedFile.linkedFiles.length === 1, 'Related document should have 1 linked file');
  assert(relatedFile.linkedFiles[0].linkText === 'Sub document', 'Should follow sub document link');
  console.log('');
}

function testCircularReferenceDetection() {
  console.log('🔄 Test 4: Circular reference detection');
  
  const result = readMarkdown('./test-files/main.md', { followLinks: true, maxDepth: 5 });
  
  // Navigate to the circular reference: main -> related -> sub -> main
  const relatedFile = result.linkedFiles.find(f => f.linkText === 'Related document');
  const subFile = relatedFile.linkedFiles[0];
  const circularRef = subFile.linkedFiles[0];
  
  assert(circularRef.error === 'Circular reference detected', 'Should detect circular reference');
  assert(circularRef.content === null, 'Circular reference should have null content');
  console.log('');
}

function testDepthLimit() {
  console.log('📏 Test 5: Depth limit');
  
  const result = readMarkdown('./test-files/main.md', { followLinks: true, maxDepth: 1 });
  
  assert(result.linkedFiles.length === 2, 'Should follow first level links');
  
  const relatedFile = result.linkedFiles.find(f => f.linkText === 'Related document');
  assert(relatedFile.linkedFiles.length === 0, 'Should not follow second level links due to depth limit');
  assert(relatedFile.depthLimitReached === true, 'Should indicate depth limit reached');
  console.log('');
}

function testNonExistentFile() {
  console.log('❌ Test 6: Non-existent file handling');
  
  const result = readMarkdown('./test-files/nonexistent.md');
  
  assert(result.content === null, 'Should have null content for non-existent file');
  assert(result.error === 'File not found or could not be read', 'Should have appropriate error message');
  assert(result.linkedFiles.length === 0, 'Should have no linked files');
  console.log('');
}

function testCombinedContentFormat() {
  console.log('📄 Test 7: Combined content format');
  
  const combined = readMarkdownWithLinks('./test-files/main.md', { maxDepth: 1 });
  
  assert(combined.includes('=== main.md ==='), 'Should include main file header');
  assert(combined.includes('=== related.md ==='), 'Should include related file header');
  assert(combined.includes('=== another.md ==='), 'Should include another file header');
  assert(combined.includes('# Main Document'), 'Should include main content');
  assert(combined.includes('# Related Document'), 'Should include related content');
  assert(combined.includes('# Another Document'), 'Should include another content');
  
  // Check indentation for nested files
  const lines = combined.split('\n');
  const relatedHeaderLine = lines.find(line => line.includes('=== related.md ==='));
  assert(relatedHeaderLine.startsWith('  '), 'Related file should be indented');
  console.log('');
}

// Run the tests
runTests();