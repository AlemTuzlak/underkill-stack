import { reactRouter } from "@react-router/dev/vite";
import tailwind from "@tailwindcss/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), tailwind(), vanillaExtractPlugin()],
});
