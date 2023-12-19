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
        // 為避免與 Nuxt 的衝突 toRefs useFetch useCookie useHead useTitle useStorage 已停用自動匯入
        // 可通過 import { useStorage } from '@vueuse/core' 來使用
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
