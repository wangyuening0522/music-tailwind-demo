import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
 import { fileURLToPath, URL } from 'url';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
       '@':fileURLToPath(new URL('./src',import.meta.url)),
     //第二种方法报错: '@': path.resolve(__dirname, 'src'), // 将@路径指向src目录   }
     //'@':path.resolve(new URL(import.meta.url).pathname,'..','src')
  }}
})
