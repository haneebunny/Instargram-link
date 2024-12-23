import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // 빌드 결과물 디렉터리
    rollupOptions: {
      input: "index.html", // 진입점 파일
    },
  },
  server: {
    open: true, // 개발 서버 실행 시 자동으로 브라우저 열기
  },
});
