/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  //  parser: 'typescript',
  trailingComma: "all",
  arrowParens: "avoid",
  printWidth: 160,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: true,
  useTabs: false,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  proseWrap: "preserve",
  quoteProps: "as-needed",
  plugins: ["prettier-plugin-tailwindcss"],
};
