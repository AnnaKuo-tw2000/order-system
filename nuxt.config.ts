/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    app: {
        baseURL: process.env.NODE_ENV === "production" ? "/order-system/" : "/",
        buildAssetsDir: "/static/",
    },
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
            apiKey: "AIzaSyC-ZCnNSuIHeOQ6NGwzm5kxYdmSDPRL1Eg",
            authDomain: "order-system-9e3d6.firebaseapp.com",
            databaseURL:
                "https://order-system-9e3d6-default-rtdb.asia-southeast1.firebasedatabase.app/",
            projectId: "order-system-9e3d6",
            storageBucket: "gs://order-system-9e3d6.appspot.com",
            messagingSenderId: "1049564664888",
            appId: "1:1049564664888:web:fa4fabaa853ee644c942cd",
        },
        auth: {
            enabled: true,
        },
    },
});
