#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_CONTENT_DIR = path.join(__dirname, '../public/blog-content');
const OUTPUT_FILE = path.join(__dirname, '../public/blogIndex.json');

/**
 * Generates a blog index by scanning the blog-content directory
 * for markdown files and extracting their metadata
 */
function generateBlogIndex() {
  try {
    console.log('🔍 Scanning blog content directory...');
    
    // Read all files in the blog content directory
    const files = fs.readdirSync(BLOG_CONTENT_DIR);
    
    // Filter for .md files, exclude README.md and any directories
    const markdownFiles = files.filter(file => {
      const filePath = path.join(BLOG_CONTENT_DIR, file);
      return file.endsWith('.md') && 
             file !== 'README.md' && 
             fs.statSync(filePath).isFile();
    });
    
    console.log(`📝 Found ${markdownFiles.length} blog posts:`, markdownFiles);
    
    // Generate slugs from filenames (remove .md extension)
    const blogSlugs = markdownFiles.map(file => file.replace(/\.md$/, ''));
    
    // Create the blog index object
    const blogIndex = {
      generated: new Date().toISOString(),
      posts: blogSlugs,
      total: blogSlugs.length
    };
    
    // Write the index file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogIndex, null, 2));
    
    console.log(`✅ Generated blog index with ${blogSlugs.length} posts`);
    console.log(`📄 Index saved to: ${OUTPUT_FILE}`);
    console.log('🎯 Blog posts:', blogSlugs.join(', '));
    
  } catch (error) {
    console.error('❌ Error generating blog index:', error);
    process.exit(1);
  }
}

// Run the script if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateBlogIndex();
}

export default generateBlogIndex;