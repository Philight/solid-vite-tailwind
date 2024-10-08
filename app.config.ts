import { defineConfig } from "@solidjs/start/config";
import AutoImport from "unplugin-auto-import/vite";

import Markdown from "vite-plugin-markdown-solid";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import { VitePWA } from "vite-plugin-pwa";
import SolidPlugin from "vite-plugin-solid";

// import nodeAdapter from 'solid-start-node'
// import staticAdapter from 'solid-start-static'
// import netlifyAdapter from 'solid-start-netlify'
// import vercelAdapter from 'solid-start-vercel'
// import awsAdapter from 'solid-start-aws'

// =================================================================

/**
 * https://github.com/solidjs/solid-start/issues/1374#issuecomment-2162667748
 *
 * TEMP FIX:
 */
const VinxiAutoImport = (options) => {
  const autoimport = AutoImport(options);

  return {
    ...autoimport,
    transform(src, id) {
      if (id.startsWith("/")) {
        id = new URL(`file://${id}`).pathname;
      }

      return autoimport.transform(src, id);
    },
  };
};

// const adapterMap = {
//   node: nodeAdapter(),
//   static: staticAdapter(),
//   netlify: netlifyAdapter(),
//   vercel: vercelAdapter(),
//   aws: awsAdapter(),
// }

const isTauri = process.env.TAURI === "true";

// =================================================================

export default defineConfig({
  ssr: {},
  server: {
    port: 4000,
  },

  /// VITE OPTIONS START
  vite({ router }) {
    // server-side routing options
    if (router === "server") {
      // client-side routing options
    } else if (router === "client") {
      // server functions options
    } else if (router === "server-function") {
    }

    // default for all routes
    return {
      plugins: [
        // https://github.com/antfu/unplugin-auto-import
        // AutoImport({
        //   imports: ['solid-js'],
        //   dts: './src/auto-imports.d.ts',
        // }),
        VinxiAutoImport({
          imports: [
            "solid-js",
            {
              "@solid-primitives/destructure": ["destructure"],
            },
          ],
          dts: "./src/auto-imports.d.ts",
        }),

        // https://github.com/xbmlzg/vite-plugin-solid-markdown
        Markdown({
          wrapperClasses: "prose prose-sm m-auto text-left",
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "vitesse-dark",
              },
            ],
          ],
          remarkPlugins: [remarkGfm],
        }),

        // https://github.com/solidjs/solid-start
        SolidPlugin({
          extensions: [".mdx", ".md"],
          // @ts-expect-error - missing types
          // adapter: adapterMap[process.env.ADAPTER || "static"],
          ssr: !isTauri,
        }),

        // https://github.com/antfu/vite-plugin-pwa
        isTauri
          ? undefined
          : VitePWA({
              registerType: "autoUpdate",
              includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
              manifest: {
                name: "Vitesse",
                short_name: "Vitesse",
                theme_color: "#ffffff",
                icons: [
                  {
                    src: "/pwa-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                  },
                  {
                    src: "/pwa-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                  },
                  {
                    src: "/pwa-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any maskable",
                  },
                ],
              },
            }),
      ],
      server: {},
      ssr: {},

      // to make use of `TAURI_DEBUG` and other env variables
      // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
      envPrefix: ["VITE_", "TAURI_"],
      build: {
        // Tauri supports es2021
        target: ["es2021", "chrome100", "safari13"],
        // don't minify for debug builds
        minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_DEBUG,
      },

      optimizeDeps: {},

      // https://github.com/vitest-dev/vitest
      test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["node_modules/@testing-library/jest-dom/extend-expect"],
      },
    };
  },
  /// VITE OPTIONS END
});
