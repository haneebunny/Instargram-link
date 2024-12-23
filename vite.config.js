import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // 빌드 결과 디렉터리
    rollupOptions: {
      input: {
        index: "index.html", // index.html을 번들링 대상에 포함
        main: "./src/main.js", // main.js를 번들링에 포함
        loading: "./src/loading.js", // loading.js를 번들링에 포함
      },
      output: {
        entryFileNames: "assets/[name].js", // JS 파일 이름 설정
        assetFileNames: "assets/[name].[ext]", // 기타 파일 이름 설정 (CSS 등)
      },
    },
  },
});
