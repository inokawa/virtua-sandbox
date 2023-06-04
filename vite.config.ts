import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import pkg from "./package.json";

export default defineConfig({
  base: `https://${pkg.author}.github.io/${pkg.name}/`,
  plugins: [
    react(),
    legacy({
      targets: ["Edge >= 18"],
    }),
  ],
});
