# Blog Content

This directory contains all blog posts for the techfren website. The blog system dynamically loads markdown files based on a simple list in the frontend code.

## Adding a New Blog Post

1. Create a new `.md` file in this directory
2. Add the required frontmatter at the top of the file
3. Write your content in markdown

**That's it!** The blog system will automatically discover your new post - no need to manually update any code files.

## Required Frontmatter

Each markdown file must include the following frontmatter at the top:

```yaml
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your post"
---
```

### Optional Frontmatter

```yaml
tags: ["tag1", "tag2", "tag3"]  # Optional: for categorization
```

## Example: Adding a New Blog Post

1. **Create the markdown file**: `public/blog-content/my-awesome-post.md`
```markdown
---
title: "My Awesome Blog Post"
date: "2025-01-20"
description: "This is an example blog post about awesome things."
---

# My Awesome Blog Post

Your content goes here...

## Section 1

More content...
```

2. **No manual configuration needed** - the system automatically finds your post:

The blog system will automatically discover your new post during the next build. The generated blog index will include all markdown files in this directory.

## File Naming

- Use kebab-case for filenames (e.g., `my-awesome-post.md`)
- The filename (without `.md`) becomes the URL slug
- Avoid spaces and special characters in filenames

## How It Works

The blog system automatically discovers markdown files in this directory and extracts metadata from the frontmatter. During the build process, a script scans this directory and generates a blog index file (`/public/blogIndex.json`) that the frontend uses to load posts dynamically. No manual configuration or index file maintenance is needed - just add your markdown file!

## Notes

- Posts are automatically sorted by date (newest first)
- The slug is generated from the filename
- All markdown features are supported including code blocks, tables, and links
- Images should be placed in the `public` directory and referenced with absolute paths
