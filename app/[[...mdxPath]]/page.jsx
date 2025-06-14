// Dynamic MDX Page Handler
// Handles all dynamic routes for MDX content using Next.js App Router
// Integrates with Nextra to provide documentation functionality

import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

// Static Site Generation
// Generate static paths for all MDX files in the content directory
// This enables pre-rendering of all documentation pages at build time
export const generateStaticParams = generateStaticParamsFor('mdxPath')

// Enhanced Metadata Generation for SEO
// Generates comprehensive page metadata from MDX frontmatter for optimal SEO
// Supports Open Graph, Twitter Cards, structured data, and custom metadata
export async function generateMetadata(props) {
  // Extract the dynamic route parameters
  const params = await props.params

  // Import the MDX page and extract its metadata
  const { metadata } = await importPage(params.mdxPath)

  // Base metadata with fallbacks
  const baseTitle = metadata?.title || 'Maraikka Documentation'
  const baseDescription = metadata?.description || 'Documentation for Maraikka - Protect What Matters.'

  // Build comprehensive metadata object
  return {
    // Basic metadata
    title: baseTitle,
    description: baseDescription,
    keywords: metadata?.keywords,
    authors: metadata?.author ? [{ name: metadata.author }] : [{ name: 'Puzzlers Labs' }],

    // Canonical URL for SEO
    alternates: {
      canonical: metadata?.canonical
    },

    // Open Graph metadata for social media
    openGraph: {
      title: metadata?.openGraph?.title || baseTitle,
      description: metadata?.openGraph?.description || baseDescription,
      type: metadata?.openGraph?.type || 'article',
      siteName: 'Maraikka Documentation',
      locale: 'en_US',
      url: metadata?.canonical,
      images: metadata?.openGraph?.images || [
        {
          url: '/images/maraikka-og-default.png',
          width: 1200,
          height: 630,
          alt: 'Maraikka Documentation'
        }
      ]
    },

    // Twitter Card metadata
    twitter: {
      card: metadata?.twitter?.card || 'summary_large_image',
      title: metadata?.twitter?.title || baseTitle,
      description: metadata?.twitter?.description || baseDescription,
      images: metadata?.twitter?.images || ['/images/maraikka-twitter-default.png'],
      creator: '@puzzlers_labs'
    },

    // Additional metadata for documentation
    category: metadata?.section || 'Documentation',

    // Structured data for search engines
    other: {
      'article:author': metadata?.author || 'Puzzlers Labs',
      'article:section': metadata?.section,
      'article:modified_time': metadata?.lastModified,
      'article:published_time': metadata?.publishedDate || metadata?.lastModified,
      'docsearch:language': 'en',
      'docsearch:version': 'latest'
    },

    // Robots and indexing
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
    }
  }
}

// MDX Wrapper Component
// Gets the wrapper component from mdx-components.jsx for consistent page layout
const Wrapper = getMDXComponents().wrapper

// Main Page Component
// Renders MDX content within the documentation layout
// Handles dynamic routing for all documentation pages
export default async function Page(props) {
  // Extract dynamic route parameters from Next.js
  const params = await props.params

  // Import the MDX page content and associated data
  // This includes the MDX component, table of contents, and metadata
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result

  // Render the MDX content within the documentation wrapper
  // The wrapper provides consistent layout, navigation, and styling
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}

// Architecture Overview
//
// DYNAMIC ROUTING:
// - [[...mdxPath]] captures all routes like /installation, /user-guide/setup, etc.
// - Next.js passes the route segments as params.mdxPath array
//
// NEXTRA INTEGRATION:
// - generateStaticParamsFor() finds all MDX files and creates static routes
// - importPage() loads MDX content, TOC, and metadata for each route
//
// SEO OPTIMIZATION:
// - Frontmatter metadata is extracted and transformed into Next.js metadata
// - Supports Open Graph, Twitter Cards, and structured data
// - Fallback values ensure all pages have proper metadata
//
// STATIC GENERATION:
// - All documentation pages are pre-rendered at build time
// - Fast loading and excellent SEO performance
//
// COMPONENT STRUCTURE:
// - Wrapper provides consistent layout and navigation
// - MDXContent is the actual documentation content
// - TOC and metadata enable rich documentation features