import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["flex-center", "flex items-center justify-center"],
    ["hstack", "flex items-center"],
    ["text-c", "text-gray-600 dark:text-gray-300"],
    ["text-light-c", "text-gray-500 dark:text-gray-400"],
    ["text-lighter-c", "text-gray-400 dark:text-gray-500"],
    ["text-dark-c", "text-black dark:text-white"],
    ["bg-c", "bg-white dark:bg-slate-700"],
    ["bg-dark-c", "bg-gray-100 dark:bg-slate-600"],
    ["bg-darker-c", "bg-gray-200 dark:bg-slate-500"],
    ["border-c", "border-gray-300 dark:border-gray-500"],
    ["border-dark-c", "border-gray-500 dark:border-gray-400"],
    ["border-darker-c", "border-black dark:border-gray-200"],
    ["border-light-c", "border-gray-200 dark:border-slate-500"],
    ["hide-on-mobile", "hidden md:block"],
    ["shadow-c", "shadow dark:shadow-gray-600"],
    ["dropdown-li", "hstack px-3 h-8 truncate cursor-pointer hover:bg-dark-c"],
    [
      "round-btn",
      "w-7 h-7 md:(w-8 h-8) flex-center rounded-full hover:bg-darker-c"
    ]
  ],
  theme: {
    breakpoints: {
      sm: "641px",
      md: "769px",
      lg: "1025px"
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        ui: "Lato:400,700",
        logo: "Orbitron:700"
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
