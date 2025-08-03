import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    // NOTE: 라이브러리 모드로 빌드하겠다는 설정
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'], // ESM 모듈로 출력
      fileName: () => 'index.js',
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'], // 번들에서 제외
    },
  },
});
