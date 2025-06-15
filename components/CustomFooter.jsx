/**
 * Custom Footer Component
 *
 * Site footer with copyright, organization information, and legal links.
 * Uses referrer for backlink building to Puzzlers Labs.
 * Layout: Official Website/GitHub (left) | Copyright (center) | Legal links (right)
 *
 * Component Architecture:
 * - Server component for optimal performance and SEO
 * - CSS imported in layout for pre-rendered styling (no FOUC)
 * - Wraps Nextra Footer component for consistent theming
 * - Three-section layout using flexbox for responsive design
 *
 * SEO Considerations:
 * - External links use rel="noopener" for security
 * - Maintains referrer for backlink building to Puzzlers Labs
 * - All links point to appropriate Maraikka/Puzzlers Labs domains
 *
 * Accessibility Features:
 * - Proper focus states for keyboard navigation
 * - High contrast mode support
 * - Screen reader friendly link descriptions
 * - WCAG compliant color contrast ratios
 *
 * Performance Optimizations:
 * - CSS pre-loaded in layout prevents flash of unstyled content
 * - Server-side rendering for instant page loads
 * - Efficient CSS-only hover effects
 * - No JavaScript required for styling or interactions
 */

import { Footer } from "nextra-theme-docs";

export default function CustomFooter() {
  return (
    <Footer>
      <div className="custom-footer-container">
        {/* Main links section - Left */}
        <div className="footer-section">
          <a
            href="https://maraikka.com"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            Official Website
          </a>
          <span className="footer-separator">•</span>
          <a
            href="https://github.com/puzzlers-labs/maraikka"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            GitHub
          </a>
        </div>

        {/* Copyright section - Center */}
        <div className="footer-section">
          <p className="footer-copyright">
            &copy;{" "}
            <a
              href="https://puzzlers-labs.com"
              target="_blank"
              rel="noopener"
              className="footer-link"
            >
              Puzzlers Labs
            </a>
            . All rights reserved.
          </p>
        </div>

        {/* Legal links section - Right */}
        <div className="footer-section">
          <a
            href="https://maraikka.com/privacy-policy"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            Privacy Policy
          </a>
          <span className="footer-separator">•</span>
          <a
            href="https://maraikka.com/terms-and-conditions"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            Terms & Conditions
          </a>
          <span className="footer-separator">•</span>
          <a
            href="https://maraikka.com/support"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            Support
          </a>
        </div>
      </div>
    </Footer>
  );
}
