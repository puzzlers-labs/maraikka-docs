// Prettier Configuration
// This file configures Prettier code formatting for consistent,
// professional documentation across all contributors.

export default {
  // Core Formatting Rules

  // Indentation: Use 2 spaces for all files
  // Provides consistent, readable indentation without being too wide
  tabWidth: 2,

  // Use spaces instead of tabs for cross-platform consistency
  // Ensures consistent display across different editors and systems
  useTabs: false,

  // Default line width for code files (JavaScript, CSS, etc.)
  // Balances readability with fitting on most screens
  printWidth: 80,

  // Unix line endings for cross-platform compatibility
  // Prevents Git issues with different operating systems
  endOfLine: "lf",

  // Don't automatically wrap prose text by default
  // Preserves intentional formatting in documentation
  proseWrap: "preserve",

  // File-Specific Overrides
  overrides: [
    {
      // Documentation files: Markdown and MDX
      files: ["*.md", "*.mdx"],
      options: {
        // Wider line width for better prose readability
        // 100 characters accommodates longer sentences while staying readable
        printWidth: 100,

        // Always wrap prose for consistent line breaks
        // Ensures clean diffs in version control and consistent formatting
        proseWrap: "always",
      },
    },
    {
      // Configuration files: JSON, package.json, etc.
      files: "*.json",
      options: {
        // Extra wide for long configuration strings and URLs
        // Prevents awkward breaking of configuration values
        printWidth: 120,

        // Consistent 2-space indentation for configuration files
        // Matches the project's overall indentation standard
        tabWidth: 2,
      },
    },
  ],
};

// Why This Configuration?
//
// MINIMAL APPROACH:
// - Only essential settings for documentation
// - No JavaScript/React specific settings (not needed)
// - Focuses on Markdown, MDX, and JSON formatting
//
// DOCUMENTATION-OPTIMIZED:
// - 100-char width for Markdown provides better readability
// - Always wrap prose ensures consistent Git diffs
// - Preserves intentional formatting where needed
//
// CROSS-PLATFORM COMPATIBLE:
// - Unix line endings work across all systems
// - Spaces instead of tabs prevent display issues
// - Consistent indentation across all file types
//
// CONTRIBUTOR-FRIENDLY:
// - Automatic formatting on save
// - Clear, consistent rules
// - No complex configuration to understand
