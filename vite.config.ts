import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import client from "honox/vite/client";
import postcss from "rollup-plugin-postcss";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  console.log("mode: %s", mode);
  return {
    server: {
      host: true,
    },
    plugins: [
      // postcss({
      //   extract: "style.css",
      // }),
      ...(mode === "client" ? [client()] : [honox(), pages()]),
    ],
  };
});
