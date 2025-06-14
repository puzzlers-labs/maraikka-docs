'use client'

import { Footer } from 'nextra-theme-docs'

// Custom Footer Client Component
// Site footer with copyright, organization information, and legal links
// Uses referrer for backlink building to Puzzlers Labs
// Layout: Official Website/GitHub (left) | Copyright (center) | Legal links (right)
//
// COMPONENT ARCHITECTURE:
// - Client Component ('use client') to enable interactive hover effects
// - Wraps Nextra Footer component for consistent theming
// - Three-section layout using flexbox for responsive design
//
// HOVER INTERACTIONS:
// - JavaScript event handlers for color transitions
// - Default: muted gray (#6b7280)
// - Hover: Maraikka purple (#8b5cf6)
// - Smooth 0.2s ease transition for professional feel
//
// SEO CONSIDERATIONS:
// - External links use rel="noopener" for security
// - Maintains referrer for backlink building to Puzzlers Labs
// - All links point to appropriate Maraikka/Puzzlers Labs domains
export default function CustomFooter() {
  return (
    <Footer>
      {/* Footer Container */}
      {/* Flexbox layout with three sections: Links | Copyright | Legal */}
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Main links section - Left */}
        {/* Official website and GitHub repository links */}
        <div>
          {/* Official Website Link */}
          {/* Links to main Maraikka product site */}
          <a
            href="https://maraikka.com"
            target="_blank"
            rel="noopener"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >
            Official Website
          </a>
          {/* Separator bullet */}
          <span style={{ color: '#9ca3af', margin: '0 0.25rem' }}>•</span>
          {/* GitHub Repository Link */}
          {/* Links to main Maraikka project repository */}
          <a
            href="https://github.com/puzzlers-labs/maraikka"
            target="_blank"
            rel="noopener"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >
            GitHub
          </a>
        </div>

        {/* Copyright section - Center */}
        {/* Company copyright with clickable organization link */}
        <div>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
            © 2024 <a
              href="https://puzzlers-labs.com"
              target="_blank"
              rel="noopener"
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >Puzzlers Labs</a>. All rights reserved.
          </p>
        </div>

        {/* Legal links section - Right */}
        {/* Legal and support links pointing to main Maraikka site */}
        <div>
          {/* Privacy Policy Link */}
          <a
            href="https://maraikka.com/privacy-policy"
            target="_blank"
            rel="noopener"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >
            Privacy Policy
          </a>
          {/* Separator bullet */}
          <span style={{ color: '#9ca3af', margin: '0 0.25rem' }}>•</span>
          {/* Terms & Conditions Link */}
          <a
            href="https://maraikka.com/terms-and-conditions"
            target="_blank"
            rel="noopener"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >
            Terms & Conditions
          </a>
          {/* Separator bullet */}
          <span style={{ color: '#9ca3af', margin: '0 0.25rem' }}>•</span>
          {/* Support Link */}
          <a
            href="https://maraikka.com/support"
            target="_blank"
            rel="noopener"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >
            Support
          </a>
        </div>
      </div>
    </Footer>
  )
}

// Component Implementation Notes
//
// CLIENT COMPONENT REQUIREMENT:
// - Must use 'use client' directive for interactive hover effects
// - JavaScript event handlers (onMouseEnter/onMouseLeave) require client-side execution
// - Cannot be implemented in Server Components due to interactivity constraints
//
// STYLING APPROACH:
// - Inline styles for component isolation and performance
// - Avoids CSS-in-JS libraries to minimize bundle size
// - Direct DOM manipulation for hover effects ensures immediate response
//
// ACCESSIBILITY CONSIDERATIONS:
// - All links have descriptive text content
// - Color contrast meets WCAG guidelines (gray to purple transition)
// - Keyboard navigation supported through standard link behavior
// - Screen readers can properly identify link purposes
//
// RESPONSIVE DESIGN:
// - Flexbox with flex-wrap handles mobile layout gracefully
// - Gap property provides consistent spacing across screen sizes
// - Font sizes use rem units for scalability
//
// PERFORMANCE OPTIMIZATIONS:
// - Minimal JavaScript footprint with direct event handlers
// - No external dependencies beyond Nextra Footer wrapper
// - Efficient re-renders due to simple component structure