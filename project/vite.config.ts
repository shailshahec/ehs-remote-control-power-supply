import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ehs-remote-control-power-supply/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
