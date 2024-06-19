import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MenuRistorante/', // Assicurati che il percorso sia corretto
  plugins: [react()],
});
