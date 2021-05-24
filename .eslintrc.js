module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ["@typescript-eslint"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": 1,
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-unused-vars": 2,
    },
};
