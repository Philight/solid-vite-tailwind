export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},

    /* Optimize CSS */
    cssnano: { preset: "advanced" },
  },
};
