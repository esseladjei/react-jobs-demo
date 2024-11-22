import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   /*change the default port */
   plugins: [react()],
   server: {
      port: 3000,
   },
   test: { environment: 'jsdom' },
});
