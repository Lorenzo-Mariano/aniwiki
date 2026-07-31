import { type Config } from "prettier";

const config: Config = {
    tabWidth: 4,
    singleQuote: false,
    proseWrap: "always",
    importOrder: [
        "^react$",
        "^next",
        "<THIRD_PARTY_MODULES>",
        "^@/styles/(.*)$",
        "^@/app/(.*)$",
        "^@/(components|_components|ui|_ui)/(.*)$",
        "^@/(hooks|_hooks)/(.*)$",
        "^@/(lib|utils|_lib|_utils|services)/(.*)$",
        "^@/(types|_types)/(.*)$",
        "^@/(.*)$",
        "^[./]",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export default config;
