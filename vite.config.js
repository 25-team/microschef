import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      template: 'treemap',
      open: true,
    }),
  ],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    minify: 'terser',
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
