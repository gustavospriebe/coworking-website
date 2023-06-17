import almaz1 from "@/public/almaz1.webp";
import almaz2 from "@/public/almaz2.webp";
import almaz3 from "@/public/almaz3.webp";
import { Blog } from "types";

export const blogConfig: Blog = {
    Blog: [
        {
            title: "Coworking: Descubra os Principais Mitos e Verdades Sobre Espaço Compartilhado",
            description:
                "Devido a popularização do Coworking, muitas pessoas ficam em dúvida sobre o que realmente é mito ou verdade sobre o espaço compartilhado. Isso porque dentro",
            image: almaz1,
            tag: "Coworking",
            link: "https://almazco.com.br/coworking-descubra-os-principais-mitos-e-verdades-sobre-espaco-compartilhado/",
            date: "18 de maio de 2022",
        },
        {
            title: "Ambiente de trabalho x Produtividade: Qual é a Relação Entre Eles",
            description:
                "Muitas pessoas optam por trabalhar em casa como uma forma de promover a economia. No entanto, o que muitos não sabem é que essa escolha",
            image: almaz2,
            tag: "Produtividade",
            link: "https://almazco.com.br/ambiente-de-trabalho-x-produtividade-qual-e-a-relacao-entre-eles/",
            date: "29 de março de 2022",
        },
        {
            title: "Conheça 5 vantagens que só o Coworking pode te oferecer",
            description:
                "Abrir o seu próprio negócio pode ser algo muito desafiador, sendo que encontrar um local de trabalho adequado é, com certeza, uma das tarefas mais",
            image: almaz3,
            tag: "Produtividade",
            link: "https://almazco.com.br/conheca-5-vantagens-que-so-o-coworking-pode-te-oferecer/",
            date: "9 de março de 2022",
        },
    ],
};
