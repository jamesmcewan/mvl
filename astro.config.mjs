import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  adapter: vercel(),
})
