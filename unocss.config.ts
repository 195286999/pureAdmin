import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetMini,
  presetUno,
  presetIcons
} from "unocss";

// https://github.com/unocss/unocss#readme
export default defineConfig({
  presets: [
    presetMini({ dark: "class" }),
    presetAttributify(),
    presetUno(),
    presetIcons({ cdn: "https://esm.sh/", prefix: "uno:" })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // 默认扫描 .jsx .tsx .vue .md .html .svelte .astro 具体实现：https://github.com/unocss/unocss/blob/03c8abe8f5020b3baaed3dfbfe8e2258dd041a7e/packages/vite/src/utils.ts#L4
  include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.svelte$/, /\.mdx?$/],
  // 默认不扫描 node_modules、dist、css以及其扩展 具体实现：https://github.com/unocss/unocss/blob/03c8abe8f5020b3baaed3dfbfe8e2258dd041a7e/packages/vite/src/utils.ts#L3
  exclude: [],
  safelist: [
    "uno:ep:setting",
    "uno:fluent:person-12-filled",
    "uno:fluent:people-swap-28-filled",
    "uno:ri:git-branch-line",
    "uno:ri:git-repository-line",
    "uno:ep:lollipop",
    "uno:ep:monitor"
  ],
  shortcuts: {
    "wh-full": "w-full h-full",
    "flex-ac": "flex justify-around items-center",
    "flex-bc": "flex justify-between items-center"
  }
});
