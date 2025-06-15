# Contributing

Thank you for your interest in contributing! This guide will help you understand our contribution
process and standards.

## 🚀 **Quick Setup**

### Prerequisites

- **Node.js** 22+
- **pnpm** (recommended package manager)
- **Git** for version control

### Development Environment

```bash
# Clone the repository
git clone https://github.com/puzzlers-labs/maraikka-docs.git
cd maraikka-docs

# Install dependencies
pnpm install

# Set up git hooks (automatic after install)
pnpm prepare

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see your changes in real-time.

## 🛠️ **Development Tools**

### Essential VSCode Extensions

When you open this project, you'll be prompted to install 3 essential extensions:

1. **Markdown Preview Enhanced** - Advanced markdown editing and preview
2. **Prettier** - Consistent code formatting
3. **Trailing Spaces** - Clean whitespace management

These extensions are automatically configured for optimal documentation workflow.

### Code Quality Tools

The project includes automated quality assurance:

- **ESLint** - Code quality and consistency checks
- **Prettier** - Automatic code formatting
- **Husky** - Git hooks for automated quality checks
- **Lint-staged** - Pre-commit code formatting and linting
- **Pagefind** - Static search index generation

### Automated Quality Checks

When you commit code, the following happens automatically:

1. **ESLint** checks code quality
2. **Prettier** formats your code
3. **Lint-staged** ensures only quality code is committed

## 📝 **Content Guidelines**

### Writing Style

- **Clear and concise** - Use simple, understandable language
- **User-focused** - Write from the user's perspective
- **Action-oriented** - Use active voice and clear instructions
- **Consistent terminology** - Use the same terms throughout

### File Organization

- Place content files in the `content/` directory
- Use descriptive, kebab-case filenames (`getting-started.mdx`)
- Organize related content in subdirectories with `meta.json` navigation files
- Include proper frontmatter metadata for SEO

### MDX Format

All documentation uses MDX (Markdown + React components):

```mdx
---
title: "Page Title"
description: "Page description for SEO"
---

# Page Title

Your content here...
```

## 📊 **SEO Requirements**

**📋 CRITICAL: All content MUST follow SEO guidelines. See
[SEO-OPTIMIZATION.md](./SEO-OPTIMIZATION.md) for complete strategy and implementation details.**

### **Mandatory Frontmatter**

Every MDX file MUST include this frontmatter block:

```yaml
---
title: "Page Title - Maraikka Documentation"
description: "150-160 character description with keywords"
keywords: "keyword1, keyword2, keyword3"
author: "Puzzlers Labs"
---
```

### **Quick SEO Checklist**

Before submitting any content:

- [ ] **Title**: 50-60 characters, includes primary keyword
- [ ] **Description**: 150-160 characters, compelling with keywords
- [ ] **Keywords**: 5-10 relevant, researched terms
- [ ] **Headings**: Proper H1 > H2 > H3 hierarchy
- [ ] **Images**: Descriptive alt text, optimized file sizes
- [ ] **Links**: Internal links to related content
- [ ] **Mobile**: Content displays properly on mobile

### **SEO Resources**

- **[SEO-OPTIMIZATION.md](./SEO-OPTIMIZATION.md)** - Complete guidelines and examples
- **[Technical SEO Implementation](./SEO-OPTIMIZATION.md#technical-seo-implementation)** - Advanced
  optimization
- **[Content SEO Guidelines](./SEO-OPTIMIZATION.md#content-seo-guidelines)** - Writing best
  practices

### Navigation Configuration

When adding new sections, update the relevant `meta.json` file:

```json
{
  "index": "Overview",
  "getting-started": "Getting Started",
  "installation": "Installation Guide",
  "user-guide": "User Guide",
  "features": "Features",
  "troubleshooting": "Troubleshooting",
  "security": "Security"
}
```

## 🎨 **Style Guidelines**

### Markdown Conventions

- Use `#` for page titles (H1)
- Use `##` for major sections (H2)
- Use `###` for subsections (H3)
- Use **bold** for emphasis
- Use `code` for inline code
- Use code blocks with language specification

### Code Examples

Always include language specification for syntax highlighting:

```javascript
// Good
const example = "with language specified";
```

### Images and Media

#### Image Organization

Store all images in the `public/images/` directory following the same structure as the content
directory. Each content page should have its own image directory:

```
public/images/
├── getting-started/    # Images for getting-started content
├── installation/       # Images for installation guides
├── user-guide/         # Images for user guide content
│   └── encryption/     # Images for encryption user guide sub-page
├── features/           # Images for features documentation
├── security/           # Images for security documentation
├── troubleshooting/    # Images for troubleshooting guides
└── advanced/           # Images for advanced topics
```

**Directory Structure Rules:**

- Mirror the `content/` directory structure exactly
- If content is in `content/user-guide/encryption.mdx`, images go in
  `public/images/user-guide/encryption/`
- Use kebab-case for directory names matching content structure
- Keep all related images for a content page in its dedicated directory

#### Image Guidelines

**File Requirements:**

- **Format**: PNG for quality and transparency support
- **Naming**: Use descriptive, kebab-case filenames (`feature-overview.png`)
- **Optimization**: Optimize for web delivery to improve loading performance
- **Alt Text**: Always include descriptive alt text for accessibility

**Brand Colors for Images:** Use Maraikka's brand color palette when creating graphics:

- **Primary Purple**: `#8B5CF6` (violet)
- **Success Green**: `#10B981`
- **Warning Orange**: `#F97316`
- **Error Red**: `#EF4444`
- **Info Blue**: `#67BFFF`
- **Neutral Gray**: `#F3F4F6` with `#374151` text

#### Usage in Documentation

Reference images using relative paths from the public directory, following the content structure:

```markdown
<!-- For getting-started page -->

![Descriptive Alt Text](/images/getting-started/image-name.png)

<!-- For user-guide sub-page -->

![Descriptive Alt Text](/images/user-guide/batch-processing/workflow-diagram.png)

<!-- For features page -->

![Descriptive Alt Text](/images/features/encryption-process.png)
```

**Path Examples:**

- Content at `content/installation/index.mdx` → Images at `/images/installation/`
- Content at `content/user-guide/batch-processing.mdx` → Images at
  `/images/user-guide/batch-processing/`
- Content at `content/api/index.mdx` → Images at `/images/api/`

## 🔍 **Quality Checklist**

Before submitting your contribution, ensure:

- [ ] Content is accurate and up-to-date
- [ ] All links work correctly
- [ ] Images are optimized and have alt text
- [ ] Code examples are tested and functional
- [ ] Spelling and grammar are correct
- [ ] Frontmatter metadata is complete and follows guidelines
- [ ] Content follows style guidelines
- [ ] ESLint passes (`pnpm lint`)
- [ ] Local build succeeds (`pnpm build`)
- [ ] Search functionality works with new content

## 🚀 **Submission Process**

### Creating a Pull Request

1. **Fork** the repository to your GitHub account
2. **Create a branch** for your changes (`git checkout -b feature/improve-docs`)
3. **Make your changes** following the guidelines above
4. **Test locally** to ensure everything works (`pnpm dev`)
5. **Run quality checks** with `pnpm lint`
6. **Commit** with a clear, descriptive message (hooks will run automatically)
7. **Push** to your fork and create a pull request

### Pull Request Guidelines

- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Reference issues** if applicable
- **Include screenshots** for UI-related changes
- **Test instructions** if needed

## 📞 **Getting Help**

### Documentation Questions

- **GitHub Discussions** - Ask questions and get community help
- **GitHub Issues** - Report bugs or request improvements
- **Email** - hello@maraikka.com - Direct contact with the Maraikka team

### Development Environment Issues

If you encounter problems with the development setup:

1. Ensure you're using Node.js 22+
2. Try clearing node_modules and reinstalling: `rm -rf node_modules pnpm-lock.yaml && pnpm install`
3. Check that git hooks are installed: `pnpm prepare`
4. Verify ESLint and Prettier are working: `pnpm lint`
5. **Prettier ES module error**: If you get "module is not defined in ES module scope", ensure
   `prettier.config.js` uses `export default` syntax (not `module.exports`)

### Community Guidelines

- Be respectful and constructive
- Help others learn and contribute
- Share knowledge and best practices
- Follow the code of conduct

## 🎯 **Contribution Ideas**

### High-Impact Contributions

- **Fix typos and grammar** - Small but valuable improvements
- **Add missing examples** - Help users understand features better
- **Improve explanations** - Make complex topics clearer
- **Add screenshots** - Visual aids for better understanding
- **Update outdated content** - Keep documentation current
- **Complete SEO metadata** - Add frontmatter to pages missing it

### Advanced Contributions

- **Create new guides** - Cover advanced topics or workflows
- **Improve search functionality** - Enhance Pagefind configuration
- **Add interactive elements** - Enhance user experience
- **Optimize performance** - Improve site speed and accessibility
- **Enhance navigation** - Improve content organization and discoverability

### Technical Contributions

- **Improve build process** - Optimize development and deployment
- **Add automation** - Enhance CI/CD and quality checks
- **Update dependencies** - Keep the project current and secure
- **Enhance SEO** - Improve search engine optimization

---

Thank you for contributing to make Maraikka's documentation better for everyone! 🚀
