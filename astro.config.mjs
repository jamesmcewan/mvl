import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  output: 'server',
  adapter: vercel({ nodeVersion: '16.x' }),
  integrations: [react(), tailwind()],
})
