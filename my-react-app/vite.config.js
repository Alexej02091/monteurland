import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Projekte/monterland_frontend/',
  plugins: [react()],
})
