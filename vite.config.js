// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pizzeria-mamma-mia-main/', // reemplaza con tu repo de GitHub Pages
})
