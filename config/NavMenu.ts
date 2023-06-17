import { NavMenu } from "types";

export const navConfig: NavMenu = {
    NavMenu: [
        {
            title: "Planos",
            // # serve pra linkar a uma id da mesma página e faz com que o scroll vá até ela
            href: "/",
        },
        {
            title: "Produtos",
            href: "/",
        },
        {
            title: "Blog",
            href: "/",
        },
        {
            title: "Contato",
            href: "#contato",
        },
    ],
};

