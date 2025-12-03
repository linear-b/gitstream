const fs = require('fs');
const path = require('path');

/**
 * Safely read file with path traversal protection
 * @param {string} filePath - Path to file to read
 * @returns {string|null} File content or null if error/invalid path
 */
function readFile(filePath) {
  // Whitelist: only allow relative paths within current directory
  const normalizedPath = path.normalize(filePath);
  
  if (path.isAbsolute(normalizedPath) || normalizedPath.includes('..')) {
    console.log(`Invalid path: ${filePath}`);
    return null;
  }
  
  try {
    return fs.readFileSync(normalizedPath, 'utf8');
  } catch (error) {
    console.log(`Error reading file ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * Extract internal markdown links from content
 * Matches patterns like [text](./file.md) or [text](../file.md) or [text](file.md)
 * @param {string} content - The markdown content to scan for links
 * @param {string} basePath - Base directory path for resolving relative links
 * @returns {Array} Array of link objects with text, path, and resolvedPath
 */
function extractInternalLinks(content, basePath) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const internalLinks = [];
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const linkText = match[1];
    const linkPath = match[2];
    
    // Check if it's an internal link (not http/https and ends with .md)
    if (!linkPath.startsWith('http') && linkPath.endsWith('.md')) {
      const resolvedPath = path.join(basePath, linkPath);
      internalLinks.push({
        text: linkText,
        path: linkPath,
        resolvedPath: resolvedPath
      });
    }
  }

  return internalLinks;
}

/**
 * Read markdown file and follow internal links
 * @param {string} filePath - Path to the markdown file
 * @param {Object} options - Configuration options
 * @param {boolean} options.followLinks - Whether to follow internal links (default: true)
 * @param {number} options.maxDepth - Maximum depth to follow links (default: 3)
 * @param {Set} options.visited - Internal set to track visited files (prevent cycles)
 * @param {number} options.currentDepth - Current depth (internal)
 * @returns {Object} Object containing content and linked files
 */
function readMarkdown(filePath, options = {}) {
  const {
    followLinks = true,
    maxDepth = 3,
    visited = new Set(),
    currentDepth = 0
  } = options;

  const normalizedPath = path.normalize(filePath);
  
  // Check if we've already visited this file (prevent cycles)
  if (visited.has(normalizedPath)) {
    return {
      path: normalizedPath,
      content: null,
      error: 'Circular reference detected',
      linkedFiles: []
    };
  }

  // Check depth limit
  if (currentDepth >= maxDepth) {
    return {
      path: normalizedPath,
      content: readFile(normalizedPath),
      error: null,
      linkedFiles: [],
      depthLimitReached: true
    };
  }

  // Mark this file as visited
  visited.add(normalizedPath);

  // Read the main file content
  const content = readFile(normalizedPath);
  if (content === null) {
    return {
      path: normalizedPath,
      content: null,
      error: 'File not found or could not be read',
      linkedFiles: []
    };
  }

  const result = {
    path: normalizedPath,
    content: content,
    error: null,
    linkedFiles: []
  };

  // If we should follow links, extract and process them
  if (followLinks) {
    const basePath = path.dirname(normalizedPath);
    const internalLinks = extractInternalLinks(content, basePath);

    for (const link of internalLinks) {
      const linkedFileResult = readMarkdown(link.resolvedPath, {
        followLinks,
        maxDepth,
        visited: new Set(visited), // Create a new set for each branch
        currentDepth: currentDepth + 1
      });

      result.linkedFiles.push({
        linkText: link.text,
        originalPath: link.path,
        ...linkedFileResult
      });
    }
  }

  return result;
}

/**
 * @module readMarkdownWithLinks
 * @description Reads a markdown file and follows internal links to create a comprehensive document view. 
 * Prevents circular references and supports configurable depth limits.
 * @param {string} filePath - Path to the markdown file to read
 * @param {Object} [options={}] - Configuration options for link following
 * @param {boolean} [options.followLinks=true] - Whether to follow internal links
 * @param {number} [options.maxDepth=3] - Maximum depth to follow links  
 * @param {boolean} [options.structured=false] - Return structured data instead of combined text
 * @returns {string} Combined content of the file and all linked files with headers
 * @example {{ "docs/README.md" | readMarkdownWithLinks }}
 * @example {{ "docs/README.md" | readMarkdownWithLinks(maxDepth=2) }}
 * @license MIT
 */
function readMarkdownWithLinks(filePath, options = {}) {
  const {
    followLinks = true,
    maxDepth = 3,
    structured = false
  } = options;

  const result = readMarkdown(filePath, {
    followLinks,
    maxDepth,
    visited: new Set(),
    currentDepth: 0
  });
  
  // Return structured data if requested
  if (structured) {
    return result;
  }
  
  // Otherwise return combined content
  function combineContent(fileResult, depth = 0) {
    const indent = '  '.repeat(depth);
    let combined = '';
    
    if (fileResult.content) {
      combined += `${indent}=== ${path.basename(fileResult.path)} ===\n`;
      combined += fileResult.content + '\n\n';
    }
    
    if (fileResult.linkedFiles) {
      for (const linkedFile of fileResult.linkedFiles) {
        combined += combineContent(linkedFile, depth + 1);
      }
    }
    
    return combined;
  }
  
  return combineContent(result);
}

module.exports = readMarkdownWithLinks;




// ============================================================================
// TESTS (for local development only)
// ============================================================================
if (require.main === module) {
  const fs = require('fs');
  
  function assert(condition, message) {
    if (!condition) { console.error(`❌ ${message}`); process.exit(1); }
    console.log(`✅ ${message}`);
  }

  // Setup
  fs.mkdirSync('./test-files/sub', { recursive: true });
  fs.writeFileSync('./test-files/main.md', '# Main\n[Related](./related.md)\n[Another](./another.md)\n[External](https://example.com)');
  fs.writeFileSync('./test-files/related.md', '# Related\n[Sub](./sub/subdoc.md)');
  fs.writeFileSync('./test-files/another.md', '# Another');
  fs.writeFileSync('./test-files/sub/subdoc.md', '# Sub\n[Main](../main.md)');

  console.log('🧪 Running tests\n');

  // Test 1: Basic reading
  let r = readMarkdown('./test-files/main.md', { followLinks: false });
  assert(r.content?.includes('# Main'), 'Basic file reading');

  // Test 2: Link following
  r = readMarkdown('./test-files/main.md', { maxDepth: 2 });
  console.log(r.linkedFiles[0])
  assert(r.linkedFiles.length === 2, 'Follows 2 links');  
  assert(r.linkedFiles[0].linkedFiles.length === 1, 'Nested link following');

  // Test 3: Circular reference
  r = readMarkdown('./test-files/main.md', { maxDepth: 5 });
  const circularRef = r.linkedFiles[0].linkedFiles[0].linkedFiles[0];
  assert(circularRef?.error === 'Circular reference detected', 'Circular reference detection');

  // Test 4: Depth limit
  r = readMarkdown('./test-files/main.md', { maxDepth: 1 });
  assert(r.linkedFiles[0].linkedFiles.length === 0, 'Depth limit respected');

  // Test 5: Non-existent file
  r = readMarkdown('./test-files/missing.md');
  assert(r.error === 'File not found or could not be read', 'Non-existent file handling');

  // Test 6: Combined output
  const combined = readMarkdownWithLinks('./test-files/main.md', { maxDepth: 1 });
  assert(combined.includes('=== main.md ==='), 'Combined format includes headers');
  assert(combined.includes('  === related.md ==='), 'Nested files indented');

  // Test 7: Path traversal blocked
  r = readMarkdown('../../../etc/passwd');
  assert(r.content === null, 'Path traversal blocked');
  assert(r.error === 'File not found or could not be read', 'Path traversal returns error');

  // Test 8: Absolute path blocked
  const content1 = readFile('/etc/passwd');
  assert(content1 === null, 'Absolute Unix path blocked');

  const content2 = readFile('C:\\Windows\\System32\\config');
  assert(content2 === null, 'Absolute Windows path blocked');

  // Test 9: Empty file handling
  fs.writeFileSync('./test-files/empty.md', '');
  r = readMarkdown('./test-files/empty.md');
  assert(r.content === '', 'Empty file handled');
  assert(r.linkedFiles.length === 0, 'Empty file has no links');

  // Test 10: Self-referencing link
  fs.writeFileSync('./test-files/self.md', '# Self\n[Self](./self.md)');
  r = readMarkdown('./test-files/self.md', { maxDepth: 3 });
  assert(r.linkedFiles[0].error === 'Circular reference detected', 'Self-reference detected');

  console.log('\n🎉 All tests passed!');
  fs.rmSync('./test-files', { recursive: true });
}