import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astroPlugin from "eslint-plugin-astro";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    ignores: [
      "dist/**",
      ".astro/**",
      ".husky/**",
      ".vscode/**",
      "public/**",
      ".yarn/**",
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended (sets up TS parser for .ts/.tsx files)
  ...tsPlugin.configs["flat/recommended"],

  // Environment globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
      },
    },
  },

  // TypeScript custom rules
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  // Astro files (overrides TS parser for .astro, sets recommended rules)
  ...astroPlugin.configs["flat/recommended"],

  // Suppress React rules in Astro files (not applicable)
  {
    files: ["**/*.astro"],
    rules: {
      "react/jsx-key": "off",
      "react/react-in-jsx-scope": "off",
    },
  },

  // React TSX/JSX files
  {
    files: ["**/*.tsx", "**/*.jsx"],
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: { version: "19" },
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat["jsx-runtime"].rules,
      "react/prop-types": "off",
      "react/display-name": "off",
    },
  },
];
