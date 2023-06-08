/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                exotwo: "var(--font-exotwo)",
                exo: "var(--font-exo)",
                nunitosans: "var(--font-nunitosans)",
            },
            colors: {
                "bg-white": "#F5F5F5",
                "bg-black": "#191919",
                "green-principal": "#25E525",
                "green-secundary": "#84E341",
                principal: "#282828",
                secundary: "#282828",
                terciary: "#282828",
                quaternary: "#282828",
                whiter: "#282828",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
