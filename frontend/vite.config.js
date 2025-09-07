import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// โปรเจกต์อยู่ใน frontend/ และ build ออกไปที่ ../static/dist
export default defineConfig({
  root: "./",
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": "http://127.0.0.1:8000", // proxy API ไปยัง Django
    },
  },
  build: {
    manifest: true,               // ให้ Vite สร้าง manifest.json
    outDir: "../static/dist",     // build ไฟล์ไปที่ static/dist
    emptyOutDir: true,
    rollupOptions: {
      input: "/src/main.jsx",     // entry point ของเรา
    },
  },
});
