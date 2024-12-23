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
        additionalData: "", // 공통 SCSS 추가 없이 간단히 사용
      },
    },
  },
});
