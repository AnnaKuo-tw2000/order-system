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
                primary: "#efe9e7",
                secondary: "#3D1101",
                Tertiary: "#efeae7",

                // 文字
                txPrimary: "#3d1101",
                txSecondary: "#bebebe",
                txTertiary: "#c0c4cc",
            },
            // backgroundImage: {
            //     "header-texture": "url('/img/header_desktop.png')",
            //     "footer-texture": "url('/img/footer-texture.png')",
            // },
        },
    },
};
