/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/scss/main.scss"],
    modules: [
        "@nuxtjs/eslint-module",
        "@pinia/nuxt",
        "@element-plus/nuxt",
        "@vueuse/nuxt",
        // 通過 import { useStorage } from '@vueuse/core' 來使用
        "@nuxtjs/tailwindcss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/elementPlus/theme.scss" as *;`,
                },
            },
        },
    },
    elementPlus: {
        importStyle: "scss",
    },
});
