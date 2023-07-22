import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@/': new URL('./src/', import.meta.url).pathname,
    },
},
  server: {
    port: 8080
  }
});