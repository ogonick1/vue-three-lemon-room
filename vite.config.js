import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  base: '/vue-tree-lemon-room/',   // 🔹 назва твого репозиторію!
  plugins: [vue(), ghPages()],
})
