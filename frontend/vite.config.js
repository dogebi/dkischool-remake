// Vite 개발 서버와 GitHub Pages의 기본 경로를 지정합니다.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/dkischool-remake/' : '/',
});
