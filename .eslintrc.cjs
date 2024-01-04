module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["airbnb-base", "plugin:vue/vue3-essential"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["vue"],
    rules: {
        indent: "off",
        quotes: "off",
        "vue/multi-word-component-names": "off",
        "vue/html-indent": "off",
        "vuejs-accessibility/click-events-have-key-events": "off",
        "vue/first-attribute-linebreak": "off",
        "comma-dangle": "off",
        camelcase: "off",
        "import/extensions": ["error", { mjs: "always" }],
        "vue/max-attributes-per-line": "off",
        "no-use-before-define": "off",
        "vue/max-len": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "no-undef": "off",
        "max-len": "off",
        "linebreak-style": "off",
        "no-restricted-syntax": "off",
    },
};
