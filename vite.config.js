import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pizzeria-mamma-mia/', // repo de github pages
  plugins: [react()],
});

