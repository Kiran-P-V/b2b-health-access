import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      public: "/public",
      src: "/src",
      routes: "/src/routes",
      assets: "/src/assets",
      components: "/src/components",
      // themes: "/src/themes",
      // utils: "/src/utils",
      views: "/src/views",
      layouts: "/src/layouts",
    },
  },
});
