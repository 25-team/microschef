import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://llm.api.cloud.yandex.net/foundationModels/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
