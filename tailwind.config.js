/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                exo: "var(--font-exo)",
                exotwo: "var(--font-exotwo)",
                nunitosans: "var(--font-nunitosans)",
            },
            colors: {
                "bg-white": "#F5F5F5",
                "bg-black": "#191919",
                "green-principal": "#25E525",
                "green-secundary": "#84E341",
                primary: "#282828",
                secundary: "#54595F",
                terciary: "#777777",
                quaternary: "#CFCFCF",
                whiter: "#FFFFFF",
            },
            height: {
                168: "42rem",
            },
            backgroundImage: {
                "hero-pattern": "url('/public/insta1.jpg')",
            },
        },
    },
    plugins: [
        require("flowbite/plugin"),
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
