import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sonii-shivansh.github.io/CodeContext-Website',
  base: '/CodeContext-Website',
  output: 'static',
  build: {
    format: 'directory'
  }
});
