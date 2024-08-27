import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

// import Markdown from 'vite-plugin-solid-markdown'
import Markdown from 'vite-plugin-markdown-solid'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

import { VitePWA } from 'vite-plugin-pwa'
import SolidPlugin from 'vite-plugin-solid'
// import Solid from 'solid-start/vite'

// import nodeAdapter from 'solid-start-node'
// import staticAdapter from 'solid-start-static'
// import netlifyAdapter from 'solid-start-netlify'
// import vercelAdapter from 'solid-start-vercel'
// import awsAdapter from 'solid-start-aws'

import Unocss from 'unocss/vite'

// const adapterMap = {
//   node: nodeAdapter(),
//   static: staticAdapter(),
//   netlify: netlifyAdapter(),
//   vercel: vercelAdapter(),
//   aws: awsAdapter(),
// }

const isTauri = process.env.TAURI === 'true'

export default defineConfig({
  plugins: [SolidPlugin()],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect'],
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
})
