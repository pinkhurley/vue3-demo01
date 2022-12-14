import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 打包路径
  base: './' ,
  build: {
    chunkSizeWarningLimit: 1600,
  }
})
