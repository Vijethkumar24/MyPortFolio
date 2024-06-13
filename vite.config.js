import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: "/My_PortFolio/",
    outDir: "build", // This specifies the output directory
  },
});
