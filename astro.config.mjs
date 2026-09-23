import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server', // <-- SANGAT PENTING: Harus 'server' agar SSR dan URL dinamis aktif
  adapter: cloudflare(),
  integrations: [tailwind()],
});