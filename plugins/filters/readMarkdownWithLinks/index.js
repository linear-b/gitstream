const fs = require('fs');
const path = require('path');

/**
 * Read file function - in GitStream environment this would be provided
 * For standalone testing, we use fs.readFileSync
 * @param {string} filePath - Path to file to read
 * @returns {string|null} File content or null if error
 */
function readFile(filePath) {
  try {
    // In GitStream, replace this with: return gitstream.readFile(filePath);
    return fs.readFileSync(filePath, 'utf8');
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

  // Resolve the absolute path
  const absolutePath = path.resolve(filePath);
  
  // Check if we've already visited this file (prevent cycles)
  if (visited.has(absolutePath)) {
    return {
      path: absolutePath,
      content: null,
      error: 'Circular reference detected',
      linkedFiles: []
    };
  }

  // Check depth limit
  if (currentDepth >= maxDepth) {
    return {
      path: absolutePath,
      content: readFile(absolutePath),
      error: null,
      linkedFiles: [],
      depthLimitReached: true
    };
  }

  // Mark this file as visited
  visited.add(absolutePath);

  // Read the main file content
  const content = readFile(absolutePath);
  if (!content) {
    return {
      path: absolutePath,
      content: null,
      error: 'File not found or could not be read',
      linkedFiles: []
    };
  }

  const result = {
    path: absolutePath,
    content: content,
    error: null,
    linkedFiles: []
  };

  // If we should follow links, extract and process them
  if (followLinks) {
    const basePath = path.dirname(absolutePath);
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
 * Uses GitStream's readFile under the hood but extends it to recursively follow markdown link references.
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