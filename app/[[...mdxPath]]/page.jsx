// Dynamic MDX Page Handler for Maraikka Documentation
//
// This component serves as the core routing handler for all documentation pages,
// providing seamless integration between Next.js App Router and Nextra's MDX processing.
// It handles dynamic route generation, metadata extraction, SEO optimization, and 404 handling.

import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import { notFound } from "next/navigation";

// Static Site Generation Configuration
// Generates static paths for all MDX files in the content directory at build time
// This enables pre-rendering of all documentation pages for optimal performance
export const generateStaticParams = generateStaticParamsFor("mdxPath");

// Enhanced Metadata Generation for Comprehensive SEO
//
// Extracts and transforms MDX frontmatter into Next.js metadata format
// Provides comprehensive SEO support including Open Graph, Twitter Cards,
// structured data, and fallback values for consistent metadata across all pages
export async function generateMetadata(props) {
  // Extract the dynamic route parameters from Next.js props
  const params = await props.params;

  try {
    // Import the MDX page and extract its frontmatter metadata
    // This includes title, description, keywords, Open Graph data, etc.
    const { metadata } = await importPage(params.mdxPath);

    // Base metadata with intelligent fallbacks
    const baseTitle = metadata?.title || "Maraikka Documentation";
    const baseDescription =
      metadata?.description ||
      "Documentation for Maraikka - Protect What Matters.";

    // Build comprehensive metadata object for Next.js
    return {
      // Core page metadata
      title: baseTitle,
      description: baseDescription,
      keywords: metadata?.keywords,
      authors: metadata?.author
        ? [{ name: metadata.author }]
        : [{ name: "Puzzlers Labs" }],

      // Canonical URL for SEO and duplicate content prevention
      alternates: {
        canonical: metadata?.canonical,
      },

      // Open Graph metadata for rich social media previews
      openGraph: {
        title: metadata?.openGraph?.title || baseTitle,
        description: metadata?.openGraph?.description || baseDescription,
        type: metadata?.openGraph?.type || "article",
        siteName: "Maraikka Documentation",
        locale: "en_US",
        url: metadata?.canonical,
        images: metadata?.openGraph?.images || [
          {
            url: "/images/maraikka-og-default.png",
            width: 1200,
            height: 630,
            alt: "Maraikka Documentation",
          },
        ],
      },

      // Twitter Card metadata for enhanced Twitter sharing
      twitter: {
        card: metadata?.twitter?.card || "summary_large_image",
        title: metadata?.twitter?.title || baseTitle,
        description: metadata?.twitter?.description || baseDescription,
        images: metadata?.twitter?.images || [
          "/images/maraikka-twitter-default.png",
        ],
        creator: "@puzzlers_labs",
      },

      // Documentation-specific metadata
      category: metadata?.section || "Documentation",

      // Structured data and additional metadata for search engines
      other: {
        "article:author": metadata?.author || "Puzzlers Labs",
        "article:section": metadata?.section,
        "article:modified_time": metadata?.lastModified,
        "article:published_time":
          metadata?.publishedDate || metadata?.lastModified,
        "docsearch:language": "en",
        "docsearch:version": "latest",
      },

      // Search engine indexing directives
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch {
    // Graceful 404 metadata handling for non-existent pages
    // Provides proper SEO directives for missing content
    return {
      title: "Page Not Found - Maraikka Documentation",
      description: "The page you are looking for could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

// MDX Wrapper Component Integration
// Retrieves the wrapper component from mdx-components.jsx to ensure
// consistent page layout, navigation, and styling across all documentation pages
const Wrapper = getMDXComponents().wrapper;

// Main Page Component - Core Documentation Renderer
//
// This component handles the rendering of MDX content within the documentation layout.
// It manages dynamic routing, content loading, and graceful error handling for
// all documentation pages in the Maraikka documentation site.
export default async function Page(props) {
  // Extract dynamic route parameters from Next.js App Router
  // params.mdxPath contains the route segments (e.g., ['user-guide', 'setup'])
  const params = await props.params;

  try {
    // Import the MDX page content and associated metadata
    // This includes:
    // - default: The MDX component to render
    // - toc: Table of contents for navigation
    // - metadata: Frontmatter data for SEO and page information
    const result = await importPage(params.mdxPath);
    const { default: MDXContent, toc, metadata } = result;

    // Render the MDX content within the documentation wrapper
    // The wrapper provides:
    // - Consistent page layout and navigation
    // - Table of contents integration
    // - Metadata-driven features
    // - Theme and styling consistency
    return (
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    );
  } catch {
    // Graceful 404 handling for non-existent MDX files
    // Triggers Next.js built-in 404 handling which renders our custom not-found.jsx page
    // This provides a beautiful, branded 404 experience instead of generic errors
    notFound();
  }
}

// Architecture Documentation

// DYNAMIC ROUTING SYSTEM:
//
// Route Pattern: /[[...mdxPath]]
// - Captures all routes like /installation, /user-guide/setup, /api/reference
// - Next.js passes route segments as params.mdxPath array
// - Supports nested documentation structures of any depth
//
// Examples:
// - /installation → params.mdxPath = ['installation']
// - /user-guide/setup → params.mdxPath = ['user-guide', 'setup']
// - /api/reference/auth → params.mdxPath = ['api', 'reference', 'auth']

// NEXTRA INTEGRATION:
//
// Static Generation:
// - generateStaticParamsFor('mdxPath') scans content/ directory
// - Finds all .mdx files and generates static routes at build time
// - Enables pre-rendering for optimal performance and SEO
//
// Content Loading:
// - importPage(mdxPath) dynamically loads MDX content
// - Extracts frontmatter metadata for SEO and page features
// - Generates table of contents from heading structure
// - Processes MDX components and custom elements

// SEO OPTIMIZATION STRATEGY:
//
// Metadata Extraction:
// - Frontmatter data transformed into Next.js metadata format
// - Supports comprehensive SEO fields (title, description, keywords)
// - Open Graph and Twitter Card integration for social sharing
// - Structured data for enhanced search engine understanding
//
// Fallback System:
// - Intelligent defaults ensure all pages have proper metadata
// - Brand-consistent fallback values for missing frontmatter
// - Graceful degradation for incomplete metadata

// STATIC SITE GENERATION:
//
// Build Process:
// - All documentation pages pre-rendered at build time
// - Fast loading with minimal JavaScript hydration
// - Excellent SEO performance and Core Web Vitals scores
// - Compatible with CDN deployment and edge caching
//
// Export Configuration:
// - Configured for static export (output: 'export')
// - Generates standalone HTML files for each route
// - No server-side rendering dependencies

// ERROR HANDLING & 404 SYSTEM:
//
// Graceful Degradation:
// - Missing MDX files trigger notFound() instead of crashes
// - Custom 404 page (app/not-found.jsx) provides branded experience
// - Helpful navigation and search suggestions for lost users
//
// Development vs Production:
// - Development: Shows detailed error information
// - Production: Clean 404 page with recovery options

// COMPONENT ARCHITECTURE:
//
// Wrapper Component:
// - Provides consistent layout across all documentation pages
// - Integrates table of contents, navigation, and metadata
// - Handles theme switching and responsive design
// - Manages search functionality and page structure
//
// MDX Content:
// - Actual documentation content rendered as React components
// - Supports custom components and interactive elements
// - Maintains markdown simplicity with React power
//
// Props Flow:
// - Route parameters passed through to MDX components
// - Enables dynamic content based on current route
// - Supports conditional rendering and route-specific features

// PERFORMANCE OPTIMIZATIONS:
//
// Static Generation:
// - All routes pre-rendered at build time
// - No runtime MDX compilation overhead
// - Optimal Time to First Byte (TTFB)
//
// Code Splitting:
// - Each page loads only necessary JavaScript
// - Shared components bundled efficiently
// - Progressive enhancement for interactivity
//
// Metadata Caching:
// - Frontmatter processed once during build
// - No runtime metadata parsing overhead
// - Consistent metadata across page loads
