/* eslint no-undef: "error" */
/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            md: "768px",
        },
        extend: {
            colors: {
                // 樣式
                primary: "#f4b508",
                secondary: "#ffebd4",

                // 文字
                txPrimary: "#4a4a4a",
                txSecondary: "#bebebe",
                txTertiary: "#c0c4cc",
            },
        },
    },
};
