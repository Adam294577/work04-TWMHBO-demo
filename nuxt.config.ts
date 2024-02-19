import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["stores,composables,plugins"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
      },
    ],
  ],
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "assets/icons")],
        symbolId: "[dir]/[name]",
        customDomId: "__svg__icons__dom__",
      }),
    ],
  },
  // global head meta
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      title: "TWM HBO GO demo-首頁",
      meta: [
        {
          name: "description",
          content: "這是使用 nuxt3開發 測試模擬 TWM HBO GO的網頁內容",
        },
        { property: "og:title", content: "TWM HBO GO demo-首頁" },
        {
          property: "og:description",
          content: "這是使用 nuxt3開發 測試模擬 TWM HBO GO的網頁內容",
        },
        {
          property: "og:url",
          content: "https://work04-twmhbo-demo.vercel.app/",
        },
        {
          property: "og:image",
          content: "https://hbogo.taiwanmobile.com/img/HBO/index/ogimage.jpg",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          property: "twitter:title",
          content: "TWM HBO GO demo-首頁",
        },
        {
          property: "twitter:description",
          content: "這是使用 nuxt3開發 測試模擬 TWM HBO GO的網頁內容",
        },
        {
          property: "twitter:image",
          content: "https://hbogo.taiwanmobile.com/img/HBO/index/ogimage.jpg",
        },
      ],
    },
  },
});
