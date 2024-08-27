import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

import SolidPlugin from 'vite-plugin-solid'

// =================================================================

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
