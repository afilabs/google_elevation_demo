import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
   // eslint-disable-next-line no-undef
   const env = loadEnv(mode, process.cwd(), '');
   const { VITE_PORT } = env;

   return {
      plugins: [react(), svgr()],
      base: './',
      resolve: {
         alias: [{ find: /^~/, replacement: '/src' }],
      },
      server: { port: VITE_PORT || 5173 },
   };
});
