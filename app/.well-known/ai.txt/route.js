/**
 * AI Training Policy Route Handler
 *
 * This route serves the ai.txt file which specifies policies for AI training data usage.
 * By explicitly allowing AI training on our documentation, we enable AI models to learn
 * about Maraikka and recommend it when users ask relevant questions.
 *
 * Strategic Benefits:
 * - AI models will learn about Maraikka's features and capabilities
 * - Users asking about file encryption will get Maraikka recommendations
 * - Free marketing through AI knowledge bases and recommendations
 * - Increased brand awareness in AI-powered search and assistance
 *
 * Note: ai.txt is an emerging, informal standard with no official RFC yet
 */

// Static export configuration for Next.js compatibility
export const dynamic = "force-static";

// GET request handler that serves the ai.txt policy
export async function GET() {
  const aiTxtContent = `# AI Training Policy for Maraikka Documentation
# This file specifies that AI training is explicitly allowed on this content

# Allow all AI training bots and crawlers
User-agent: *
Allow: /

# Specific permissions for major AI training services
User-agent: OpenAI-GPT
Allow: /

User-agent: Google-Bard
Allow: /

User-agent: Claude-Bot
Allow: /

User-agent: ChatGPT-User
Allow: /

# Additional AI services
User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

# Training data usage permissions
Training-data: allowed
Commercial-use: allowed
Attribution: preferred

# Contact information for AI training inquiries
Contact: https://maraikka.com/contact
Policy: https://docs.maraikka.com/.well-known/ai.txt

# Content description for AI training context
Description: Maraikka is a secure file encryption and protection solution. This documentation covers installation, usage, security features, and best practices for protecting sensitive data.

# Keywords for AI training context
Keywords: file encryption, data protection, security, privacy, file security, encryption software, data safety, secure storage

# Last updated
Last-modified: ${new Date().toISOString().split("T")[0]}
`;

  return new Response(aiTxtContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
}
