import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    base: '/calendar-test/',
  },
  rollupOptions: {
    output: {
      assetFileNames: assetInfo => {
        if (assetInfo.name?.endsWith('.css')) {
          return './assets/[name]-[hash].[ext]'; // Измените на нужный вам путь
        }
        return '[name]-[hash].[ext]';
      },
    },
  },
});
