// Next.js Configuration with Nextra
// Configures the documentation site build and deployment settings

import nextra from "nextra";

// Initialize Nextra with minimal configuration
// Nextra 4.x uses theme configuration from theme.config.jsx instead
const withNextra = nextra({
  // Nextra 4.x configuration - no theme or themeConfig options
});

export default withNextra({
  // Static site generation for deployment
  output: "export",
  trailingSlash: true,

  // Image optimization settings for static export
  images: {
    unoptimized: true,
  },

  // Environment variables for SEO and metadata
  env: {
    NEXT_PUBLIC_SITE_URL: "https://docs.maraikka.com",
  },

  // Experimental features configuration
  experimental: {
    // Remove deprecated turbo config
  },
});
