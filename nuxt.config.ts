/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    ssr: false,
    css: [
        "~/assets/scss/main.scss",
        "@fortawesome/fontawesome-svg-core/styles.css",
    ],
    modules: [
        "@nuxtjs/eslint-module",
        "@pinia/nuxt",
        "@element-plus/nuxt",
        // "@vueuse/nuxt",
        "@nuxtjs/tailwindcss",
        "nuxt-vuefire",
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
    vuefire: {
        config: {
            apiKey: "AIzaSyBYOLjcRMLwpHrRNLP9xoCZNU_nzFftIDs",
            authDomain: "shopping-mall-e152a.firebaseapp.com",
            databaseURL:
                "https://shopping-mall-e152a-default-rtdb.firebaseio.com",
            projectId: "shopping-mall-e152a",
            storageBucket: "shopping-mall-e152a.appspot.com",
            messagingSenderId: "527007619675",
            appId: "1:527007619675:web:12f356f6a9022b8c497d7e",
        },
        auth: {
            enabled: true,
        },
    },
});
