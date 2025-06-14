// MDX Components Configuration
// This file defines custom components available in MDX files
// It extends Nextra's default components with any custom overrides

import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

// Get Nextra's default documentation theme components
// These include pre-styled components for headings, code blocks, callouts, etc.
const docsComponents = getDocsMDXComponents()

// Export the MDX components configuration function
// This function is automatically called by Next.js when rendering MDX content
export function useMDXComponents(components) {
  return {
    ...docsComponents,
    ...components
  }
}

// USAGE EXAMPLES:
// To add custom components, extend this configuration:
//
// export function useMDXComponents(components) {
//   return {
//     ...docsComponents,
//
//     // Custom heading with enhanced styling
//     h2: ({ children }) => (
//       <h2 className="custom-heading-style">
//         {children}
//       </h2>
//     ),
//
//     // Custom callout component
//     Callout: ({ type = 'info', children }) => (
//       <div className={`callout callout-${type}`}>
//         {children}
//       </div>
//     ),
//
//     // Custom code block with copy button
//     pre: ({ children }) => (
//       <div className="code-block-wrapper">
//         <pre className="enhanced-code-block">
//           {children}
//         </pre>
//       </div>
//     ),
//
//     ...components
//   }
// }

// COMPONENT RESOLUTION ORDER:
// 1. Nextra's default components (docsComponents)
// 2. Custom components defined in this file
// 3. Components passed via the components parameter
//
// Later components in the spread order will override earlier ones with the same name

// NEXTRA INTEGRATION:
// This file works with Nextra's documentation theme to provide:
// - Consistent styling across all MDX content
// - Built-in components like Callout, Steps, Tabs
// - Automatic syntax highlighting for code blocks
// - Responsive design and dark mode support
//
// For more information on Nextra components:
// https://nextra.site/docs/guide/built-ins