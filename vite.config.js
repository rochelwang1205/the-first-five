import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/the-first-five/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // 🔇 對 node_modules 的 deprecation 警示安靜
        quietDeps: true,
        // 🔇 指定要靜音的 deprecation 類型（和終端訊息一致）
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
      }
    }
  },
})
