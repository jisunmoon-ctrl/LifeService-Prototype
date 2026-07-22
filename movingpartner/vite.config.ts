import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env.APP_PROFILE': JSON.stringify(
      process.env.APP_PROFILE ?? 'prod',
    ),
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV ?? 'development',
    ),
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        'process.env.APP_PROFILE': JSON.stringify(
          process.env.APP_PROFILE ?? 'prod',
        ),
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV ?? 'development',
        ),
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'movingpartner-prototype.html'),
    },
  },
});
