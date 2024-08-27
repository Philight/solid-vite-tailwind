export default {
  plugins: {
    "postcss-import": {
      /*
      root: path.resolve(__dirname, 'src'),
//      path: ['app/_assets', 'app/_css'],
      skipDuplicates: true,
      resolve: (id, basedir, importOptions) => {
        const [aliasName, filename] = id.split('/');
        return aliasMapping[aliasName](filename);
      }
*/
    },
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},

    /* Optimize CSS */
    cssnano: { preset: "advanced" },
    // cssnano: {},
  },
};
