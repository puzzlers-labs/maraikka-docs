// ESLint v9 Flat Configuration
// Modern ESLint configuration using the new flat config format
// Provides comprehensive linting for Next.js, React, and JavaScript files

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

// Setup for ES modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize compatibility layer for legacy configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  // Apply to all JavaScript, TypeScript, JSX, and TSX files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
  },

  // Extend recommended configurations
  ...compat.extends("eslint:recommended", "next/core-web-vitals"),

  // Global configuration
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        // Next.js globals
        React: "readonly",
      },
    },

    // Custom rules for code quality and consistency
    rules: {
      // Console warnings for debugging cleanup
      "no-console": "warn", // Warn on console statements

      // Enforce const for variables that are never reassigned
      "prefer-const": "error", // Prefer const over let

      // Error on unused variables to keep code clean
      "no-unused-vars": "error", // Error on unused variables

      // Disable prop-types since we're using TypeScript/modern React
      "react/prop-types": "off", // Disable prop-types (using TypeScript)

      // Enforce Next.js Image component instead of img element
      "@next/next/no-img-element": "error", // Enforce Next.js Image component
    },
  },

  // Ignore patterns for files that shouldn't be linted
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      ".husky/**",
      "_pagefind/**",
    ],
  },
];
