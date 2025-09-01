import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/pizzeria-mamma-mia/', // repo de github pages
  plugins: [react()],
});

