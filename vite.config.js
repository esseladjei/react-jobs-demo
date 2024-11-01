import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   /*change the default port */
   plugins: [react()],
   server: {
      port: '3000',
      proxy: {
         '/api': {
            target: 'http://json_server_api:4000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
         },
      },
   },
   test: { environment: 'jsdom' },
});
