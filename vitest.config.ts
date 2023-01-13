import { defineConfig } from 'vitest/config'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.jsx?$/],
    },
    setupFiles: ['./setup-test-env.ts'],
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
})
