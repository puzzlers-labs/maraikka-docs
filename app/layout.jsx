// Root Layout Configuration
// This file configures the overall layout, theme, and global components
// Uses Nextra theme with custom branding and configuration

import { Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import CustomFooter from '../components/CustomFooter'
import 'nextra-theme-docs/style.css'

// Site Metadata Configuration
// Defines default metadata for SEO, Open Graph, and browser display
// Page-specific metadata in MDX frontmatter will override these defaults
export const metadata = {
  // Metadata base URL for resolving relative URLs in Open Graph and Twitter images
  metadataBase: new URL('https://docs.maraikka.com'),

  // Title configuration with template for page-specific titles
  title: {
    // Default title for pages without explicit titles
    default: 'Maraikka Documentation',
    // Template for pages with titles: "Page Title | Maraikka"
    template: '%s | Maraikka'
  },
  // Default site description (overridden by page-specific descriptions)
  description: 'Documentation for Maraikka - Protect What Matters.',

  // Default Open Graph metadata (enhanced by page-specific metadata)
  openGraph: {
    title: 'Maraikka Documentation',
    description: 'Documentation for Maraikka - Protect What Matters.',
    type: 'website',
    siteName: 'Maraikka Documentation',
    locale: 'en_US'
  },

  // Default Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Maraikka Documentation',
    description: 'Documentation for Maraikka - Protect What Matters.'
  },

  // Site-wide metadata that applies to all pages
  applicationName: 'Maraikka Documentation',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',

  // Default robots configuration (can be overridden per page)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  // Additional metadata for search engines and browsers
  keywords: ['maraikka', 'documentation', 'security', 'privacy', 'protect what matters', 'encryption'],
  authors: [{ name: 'Puzzlers Labs' }],
  creator: 'Puzzlers Labs',
  publisher: 'Puzzlers Labs'
}

// Navigation Bar Component
// Configures the top navigation with logo and project link
const navbar = (
  <Navbar
    // Custom logo with Maraikka branding and violet color theme
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <strong>Maraikka</strong>
        <span style={{
          fontSize: '0.875rem',
          color: 'var(--nx-colors-gray-600)',
          fontWeight: 'normal'
        }}>
          Docs
        </span>
      </div>
    }
    // Link to the main Maraikka repository
    projectLink="https://github.com/puzzlers-labs/maraikka"
  />
)

// Footer Component
// Custom footer with hover effects implemented as a Client Component
const footer = <CustomFooter />

// Root Layout Component
// Wraps all pages with consistent layout, theme, and functionality
// Configures Nextra theme with custom settings for documentation
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Suppress hydration warnings for theme switching
      suppressHydrationWarning
    >
      <Head
        // Theme colors for browser UI and PWA
        backgroundColor={{
          dark: 'rgb(15, 23, 42)',    // Dark slate background
          light: 'rgb(250,250,250)'   // Light off-white background
        }}
        // Violet color theme matching Maraikka branding
        color={{
          hue: { dark: 270, light: 270 },        // Violet hue
          saturation: { dark: 100, light: 100 }  // Full saturation
        }}
      />
      <body>
        <Layout
          // Top-level components
          navbar={navbar}
          footer={footer}

          // Site structure and navigation
          // Dynamic page map for automatic navigation generation
          pageMap={await getPageMap()}

          // GitHub integration for content editing
          docsRepositoryBase="https://github.com/puzzlers-labs/maraikka-docs/tree/main"
          editLink="Edit this page on GitHub"

          // Sidebar configuration
          sidebar={{
            defaultMenuCollapseLevel: 2,
            toggleButton: true
          }}

          // Search functionality
          search={
            <Search
              placeholder="Search documentation..."
              emptyResult="No results found."
              errorText="Failed to load search index."
              loading="Loading..."
            />
          }

          // Theme switcher configuration
          themeSwitch={{
            dark: 'Dark',
            light: 'Light',
            system: 'System'
          }}

          // Table of contents configuration
          toc={{
            backToTop: true,
            title: 'On This Page'
          }}

          // Feedback functionality
          feedback={{
            content: 'Report an issue',
            labels: 'feedback'
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

// Layout Architecture
//
// NEXTRA INTEGRATION:
// - Uses nextra-theme-docs for documentation-optimized layout
// - Automatic navigation generation from file structure
// - Built-in search functionality and table of contents
//
// THEME CONFIGURATION:
// - Violet color scheme matching Maraikka brand (hue: 270)
// - Dark/light theme support with custom background colors
// - Responsive design for mobile and desktop
//
// SEO OPTIMIZATION:
// - Default metadata provides fallbacks for all pages
// - Page-specific metadata in MDX frontmatter overrides defaults
// - Template-based title system for consistent branding
// - Open Graph and Twitter Card support
//
// FEATURES:
// - Dismissible banner for announcements
// - GitHub integration for community contributions
// - Collapsible sidebar navigation
// - Full-text search across all documentation
// - Automatic table of contents generation
//
// BRANDING:
// - Custom logo with lock icon and violet color
// - Puzzlers Labs copyright and MIT license
// - Consistent styling across all pages