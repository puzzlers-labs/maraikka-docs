# SEO Optimization Guide

## Overview

This guide outlines the SEO optimization strategy for the Maraikka documentation site. Built with
Next.js 15.3.3 and Nextra 4.2.17, the site implements comprehensive metadata generation and search
optimization for improved visibility.

## Current SEO Architecture

### Metadata Generation System

The documentation uses a dual-component metadata system:

#### 1. Global Layout Metadata (`app/layout.jsx`)

Provides site-wide defaults:

- Base metadata (title, description, application name)
- Open Graph defaults with proper locale
- Twitter Card configuration
- Robots directives and theme metadata
- Brand information (authors, creator, publisher)

#### 2. Dynamic Page Metadata (`app/[[...mdxPath]]/page.jsx`)

Generates page-specific metadata:

- Frontmatter integration from MDX files
- Title templates with site branding
- Open Graph and Twitter Card optimization
- Canonical URLs for duplicate content prevention
- Structured data for enhanced search results

### Metadata Flow

```javascript
// Extract frontmatter and generate SEO metadata
const frontmatter = await getPageFrontmatter(params.mdxPath);

export async function generateMetadata({ params }) {
  return {
    title: frontmatter.title || "Default Title",
    description: frontmatter.description || defaultDescription,
    openGraph: {
      title: frontmatter.openGraph?.title || frontmatter.title,
      description: frontmatter.openGraph?.description || frontmatter.description,
      images: frontmatter.openGraph?.images || defaultOGImage,
    },
  };
}
```

## Content Strategy by Page Type

### Homepage (`content/index.mdx`)

**Primary Keywords**: "documentation platform", "knowledge management", "team collaboration"
**Focus**: Brand authority, product overview, clear navigation

### Getting Started Pages

**Primary Keywords**: "documentation setup", "getting started guide", "documentation tutorial"
**Focus**: Step-by-step tutorials, quick wins, conversion paths

### Feature Documentation (`content/features/`)

**Primary Keywords**: "documentation features", "content editing", "collaboration tools" **Focus**:
Detailed features, technical implementation, use cases

### User Guides (`content/user-guide/`)

**Primary Keywords**: "documentation workflow", "team collaboration", "content management"
**Focus**: Comprehensive workflows, best practices, real-world examples

### Development Guide (`content/development-guide/`)

**Primary Keywords**: "documentation development", "build from source", "API documentation"
**Focus**: Developer onboarding, technical setup, contribution guidelines

## Technical Implementation

### URL Structure

```
docs.maraikka.com/
├── getting-started/
├── features/
│   └── content-editing/
├── user-guide/
│   ├── collaboration/
│   └── bulk-operations/
└── development-guide/
```

### Search Implementation

**Pagefind Integration**:

- Build-time search index generation
- Client-side search (no server required)
- Automatic MDX content indexing
- Zero-configuration setup with Next.js static export

### Required Frontmatter Structure

```yaml
---
title: "Specific, descriptive page title (50-60 chars)"
description: "Compelling description (150-160 chars)"
keywords: ["primary-keyword", "secondary-keyword", "long-tail-phrase"]
author: "Puzzlers Labs"
section: "Documentation category"
canonical: "https://docs.maraikka.com/page-path"
lastModified: "YYYY-MM-DD"
openGraph:
  title: "Social media optimized title"
  description: "Social description (up to 300 chars)"
  type: "article"
  images:
    - url: "/images/page-specific-og.png"
      width: 1200
      height: 630
      alt: "Descriptive alt text"
twitter:
  card: "summary_large_image"
  title: "Twitter optimized title"
  description: "Twitter description (up to 200 chars)"
  images: ["/images/page-specific-twitter.png"]
---
```

## Content Guidelines

### Title Optimization

- **Length**: 50-60 characters
- **Format**: `Primary Keyword - Secondary Keyword | Maraikka`
- **Uniqueness**: Every page must have unique title
- **Branding**: Include "Maraikka" for brand recognition

### Description Optimization

- **Length**: 150-160 characters
- **Purpose**: Clear value proposition with action words
- **Keywords**: Include primary keywords naturally

### Keyword Strategy

**Primary Keywords**:

- documentation platform, knowledge management, team collaboration, content creation, documentation
  tools

**Long-tail Keywords**:

- how to create documentation, best documentation platform, team collaboration tools, content
  management system, documentation workflow

### Content Structure Best Practices

- **H1**: Single H1 per page (page title)
- **H2-H3**: Logical heading hierarchy
- **Internal linking**: Connect related documentation
- **External linking**: Link to authoritative sources only

## Social Media Assets

### Required Images

**Open Graph (1200x630px)**:

- `maraikka-og-default.png` - Default/Homepage
- `maraikka-getting-started-og.png` - Getting started
- `maraikka-features-og.png` - Features overview
- `maraikka-user-guide-og.png` - User guide
- `maraikka-development-guide-og.png` - Development guide

**Twitter Cards (1200x675px)**:

- `maraikka-twitter-default.png` - Default/Homepage
- `maraikka-getting-started-twitter.png` - Getting started
- `maraikka-features-twitter.png` - Features overview
- `maraikka-user-guide-twitter.png` - User guide
- `maraikka-development-guide-twitter.png` - Development guide

## SEO Optimization Requirements

### Metadata Standards

All documentation pages must include comprehensive frontmatter metadata following the structure
outlined above. This ensures consistent SEO optimization across the entire documentation site.

### Content Quality Standards

- Unique, descriptive titles optimized for search engines
- Compelling meta descriptions that encourage click-through
- Strategic keyword integration without keyword stuffing
- Proper heading hierarchy for content structure
- Internal linking to improve site navigation and SEO

### Technical SEO Standards

- Fast loading performance (Core Web Vitals compliance)
- Mobile-friendly responsive design
- Accessible content structure
- Search engine indexing compatibility
- Social media sharing optimization

## New Page SEO Checklist

When creating documentation pages:

- [ ] Comprehensive frontmatter metadata
- [ ] Unique, descriptive title (50-60 chars)
- [ ] Compelling meta description (150-160 chars)
- [ ] Relevant keywords naturally integrated
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Internal links to related pages
- [ ] Social media images created
- [ ] Mobile-friendly content structure
- [ ] Fast loading performance
- [ ] Accessible content design
- [ ] Pagefind indexing compatibility
