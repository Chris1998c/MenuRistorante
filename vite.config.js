// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MenuRistorante/' // Assicurati che questo corrisponda al nome della tua repository su GitHub
});
