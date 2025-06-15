/**
 * Chrome DevTools Integration Route Handler
 *
 * This route handles requests from Chrome DevTools for enhanced debugging capabilities.
 * When Chrome DevTools is open during development, it automatically attempts to fetch
 * this endpoint to enable additional debugging features and integrations.
 *
 * @see https://developer.chrome.com/docs/devtools/
 *
 * Purpose:
 * - Prevents 404 errors in development when Chrome DevTools is open
 * - Maintains compatibility with Next.js static export configuration
 * - Provides a valid JSON response for Chrome DevTools requests
 *
 * Technical Details:
 * - Returns empty JSON object as Chrome DevTools handles missing/empty configs gracefully
 * - Uses standard HTTP 200 response with proper JSON content type
 * - Configured for static export compatibility with force-static dynamic mode
 *
 * Problem Solved:
 * - Eliminates 404 errors for /.well-known/appspecific/com.chrome.devtools.json requests
 * - Prevents console noise when Chrome DevTools is open during development
 * - Maintains clean development experience without affecting production builds
 *
 * Production Impact:
 * - Route is included in static build but has minimal footprint (146 B)
 * - Returns empty JSON object when accessed, causing no functionality issues
 * - Chrome DevTools gracefully handles empty configuration responses
 *
 * Static Export Compatibility:
 * - Uses force-static dynamic mode to ensure route is pre-rendered
 * - Compatible with Next.js output: 'export' configuration
 * - No server-side rendering dependencies
 */

// Static export configuration
// Required for compatibility with Next.js static export mode
export const dynamic = "force-static";

// GET request handler for Chrome DevTools integration
// Returns minimal JSON response to satisfy Chrome DevTools requirements
export async function GET() {
  // Return minimal empty JSON configuration
  // Chrome DevTools will handle this gracefully and continue normal operation
  return new Response("{}", {
    headers: { "Content-Type": "application/json" },
  });
}
