import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        '/api/video': {
            target: 'https://voidboost.net',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/video/, '')
        }
    }
}
})


