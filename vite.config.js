import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PRE/',
  server: {
    host: '0.0.0.0', // Allows access from the network
    port: 5173, // Ensure this is the correct port
  },
  plugins: [react()],
});
