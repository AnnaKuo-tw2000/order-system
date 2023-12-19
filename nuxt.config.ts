/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/scss/main.scss"],
    modules: ["@nuxtjs/eslint-module", "@pinia/nuxt"],
});
