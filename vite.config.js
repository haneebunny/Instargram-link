import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // 빌드 결과물 디렉터리
    rollupOptions: {
      input: "index.html", // 진입점 파일
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`, // 공통 SCSS 설정
      },
    },
  },
});
