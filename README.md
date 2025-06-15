# Maraikka Documentation

This directory contains the complete documentation for Maraikka, built with Nextra - a modern
documentation framework based on Next.js.

**Maraikka** - _Protect What Matters._

## 🚀 **Quick Start**

### Prerequisites

- **Node.js** 22+
- **pnpm** (recommended) or npm

### Development Setup

```bash
# Clone the repository
git clone https://github.com/puzzlers-labs/maraikka-docs.git
cd maraikka-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to view the documentation site.

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 **Project Structure**

```
maraikka-docs/
├── .cursor/                    # Cursor AI configuration
├── .vscode/                    # VSCode workspace settings
├── .husky/                     # Git hooks configuration
├── app/                        # Next.js App Router
│   ├── [[...mdxPath]]/         # Dynamic MDX routing
│   └── layout.jsx              # Root layout with theme configuration
├── components/                 # React components
├── content/                    # Documentation content (MDX files)
│   ├── index.mdx               # Introduction page
│   ├── getting-started/        # Installation and setup guides
│   ├── features/               # Feature documentation
│   ├── user-guide/             # User guides and tutorials
│   └── development-guide/      # Developer documentation
├── public/                     # Static assets and images
├── eslint.config.js            # ESLint configuration
├── prettier.config.js          # Code formatting rules
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── CONTRIBUTING.md             # Contribution guidelines
├── SEO-OPTIMIZATION.md         # SEO strategy and implementation
└── README.md                   # This file
```

## 🛠️ **Technology Stack**

### Core Framework

- **Next.js** - React framework with App Router
- **Nextra** - Documentation framework
- **React** - UI library

### Development Tools

- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code quality and linting
- **Prettier** - Code formatter with ES module configuration
- **Husky** - Git hooks for automation
- **Lint-staged** - Pre-commit code quality
- **VSCode** - Recommended editor with optimized settings

### Content Management

- **MDX** - Markdown with React components
- **Pagefind** - Static search functionality
- **Frontmatter** - YAML metadata for SEO and page configuration
- **Static Generation** - Pre-rendered pages for optimal performance

## 📝 **Content Guidelines**

### File Organization

- Place content files in the `content/` directory
- Use descriptive, kebab-case filenames
- Organize related content in subdirectories with `meta.json` navigation files
- Include proper frontmatter metadata for SEO

### Writing Standards

- Use clear, concise language
- Include practical examples and code snippets
- Add screenshots or diagrams where helpful
- Cross-reference related documentation

### SEO Optimization

- Include comprehensive frontmatter metadata
- Use descriptive titles and descriptions
- Add relevant keywords
- Optimize images with proper alt text

## 🎨 **Customization**

### Theme Configuration

The site uses Nextra's documentation theme with custom configuration in `app/layout.jsx`:

```javascript
// Nextra theme configured directly in layout without separate theme.config.jsx
const navbar = (
  <Navbar
    logo={
      <div>
        <strong>Maraikka</strong> Docs
      </div>
    }
    projectLink="https://github.com/puzzlers-labs/maraikka"
  />
);

export default async function RootLayout({ children }) {
  return (
    <Layout
      navbar={navbar}
      footer={footer}
      pageMap={await getPageMap()}
      // ... other configuration
    >
      {children}
    </Layout>
  );
}
```

### Styling

- **Primary Colors**: Violet/Purple theme (`hue: 270`)
- **Typography**: System fonts with excellent readability
- **Dark Mode**: Automatic theme switching support
- **Responsive**: Mobile-first design approach

## 🔧 **Development Workflow**

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm postbuild    # Generate search index with Pagefind
pnpm start        # Start production server
pnpm lint         # Run ESLint code quality checks
pnpm clean        # Clean build artifacts
pnpm analyze      # Bundle analysis
pnpm prepare      # Set up Husky git hooks
```

### Code Quality

- **ESLint** - Code quality and consistency with Next.js configuration
- **Prettier** - Automatic code formatting on save
- **Husky** - Git hooks for automated quality checks
- **Lint-staged** - Pre-commit formatting and validation
- **Trailing Spaces** - Automatic whitespace cleanup

### Performance Optimization

- **Static Generation** - All pages pre-rendered at build time
- **Static Export** - Generates static HTML files for hosting anywhere
- **Bundle Splitting** - Optimized JavaScript loading
- **Caching** - Aggressive caching for static assets
- **Search Index** - Pagefind generates static search functionality
- **Clean Builds** - Automated artifact cleanup ensures consistent deployments

## 🚀 **Deployment**

### Automated Firebase Hosting

The documentation is automatically deployed to Firebase Hosting when a new release is published:

**Release Deployment Process:**

1. Create a new release on GitHub with a version tag (e.g., `v1.2.0`)
2. GitHub Actions automatically triggers the deployment workflow
3. Package version is updated to match the release tag
4. Clean build is performed with integrated search index
5. Site is deployed to Firebase Hosting

**Deployment Workflow Features:**

- **Automatic Version Management** - Package.json version updated to match release tag
- **Clean Build** - Removes all build artifacts before building
- **Integrated Search** - Pagefind search index generated during build
- **Firebase Hosting** - Deployed to production Firebase hosting environment

### Manual Build Process

For local testing or alternative deployment:

```bash
# Production build with search index
pnpm clean        # Clean previous build artifacts
pnpm build        # Builds static site to ./out/
pnpm postbuild    # Generates Pagefind search index

# Output directory: ./out/
# Deploy the contents of ./out/ to your hosting provider
```

### Release Management

To create a new release and trigger deployment:

```bash
# Create and push a new tag
git tag v1.2.0
git push origin v1.2.0

# Or create a release through GitHub UI
# Go to Releases → Create a new release → Set tag version
```

## 🤝 **Contributing**

We welcome contributions to improve the documentation! Please see
[CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:

- Setting up your development environment
- Content creation and editing standards
- SEO and metadata requirements
- Code style and formatting rules
- Submission and review process

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `pnpm dev`
5. Ensure quality with `pnpm lint`
6. Submit a pull request

## 📞 **Support**

### Documentation Issues

- **GitHub Issues** - Report bugs or request features
- **Discussions** - Ask questions and share ideas
- **Email** - hello@maraikka.com for direct support

## 📄 **License**

This documentation is licensed under a [Modified MIT License](LICENSE) that permits free
non-commercial use but requires explicit permission for commercial use. **Important:** This license
applies ONLY to this documentation project - the main Maraikka application and all other Maraikka
components operate under completely separate and independent licensing terms.

---

## 📋 **Project Maintenance**

### Living Documentation

This README file serves as the primary source of truth for project information and is designed to
evolve with the codebase. As the project grows and changes, this document should be kept current and
accurate.

### Update Responsibilities

- **Technology Stack Changes** - Update versions and dependencies
- **Structural Changes** - Reflect new directories or file organization
- **Process Changes** - Update development and contribution workflows
- **Contact Information** - Keep support channels current

### Version History

- **v1.0** - Initial documentation with Nextra 4.x
- **v1.1** - Added ESLint, Husky, Pagefind integration
- **Current** - Enhanced SEO, improved performance, streamlined development
