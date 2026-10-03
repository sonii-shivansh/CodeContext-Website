import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sonii-shivansh.github.io/Vericore-Website',
  base: '/Vericore-Website',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory'
  }
});
