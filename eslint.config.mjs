import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    settings: {
      react: { version: '19' },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      'no-unused-vars': [
        RULES.ERROR,
        { args: 'all', argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      'object-curly-spacing': [RULES.ERROR, 'always'],
      'array-callback-return': [RULES.OFF, { checkForEach: true }],
      'no-return-assign': RULES.OFF,
      'no-undef': RULES.OFF,
      '@typescript-eslint/no-unused-vars': RULES.OFF,
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
