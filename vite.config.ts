import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function resolvePath(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    resolve: {
      alias: [
        // 替换@为src
        {
          find: /@\//,
          replacement: resolvePath('src') + '/',
        },
        //  替换#为types
        {
          find: /#\//,
          replacement: resolvePath('types') + '/',
        },
      ],
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000/api',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
          // only https
          // secure: false
        },
      },
    },
    plugins: [react()],
    css: {
      // 预处理器配置项
      preprocessorOptions: {
        less: {
          // 一些配置项
        },
      },
    },
  };
});
