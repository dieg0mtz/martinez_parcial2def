import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/martinez_parcial2def/', // 👈 importante
  plugins: [react()],
})
