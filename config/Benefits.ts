import { Benefits } from "types";
import comodidade from "@/public/benefits/comodidade.svg";
import credibilidade from "@/public/benefits/credibilidade.svg";
import flexibilidade from "@/public/benefits/flexibilidade.svg";
import networking from "@/public/benefits/networking.svg";
import praticidade from "@/public/benefits/praticidade.svg";

export const benefitsConfig: Benefits = {
    Benefits: [
        {
            title: "Credibilidade/Destaque",
            description:
                "Localização privilegiada no centro de Tubarão, Santa Catarina. Arquitetura criativa e inovadora, sua empresa no primeiro edifício modular da América Latina.",
            image: credibilidade,
        },
        {
            title: "Comodidade",
            description:
                "Sem investimento inicial, salas prontas para uso e toda gestão do ambiente por nossa conta.",
            image: comodidade,
        },
        {
            title: "Flexibilidade",
            description:
                "Planos feitos para atender sua necessidade em diversos modelos de contratação, sem burocracia.",
            image: flexibilidade,
        },
        {
            title: "Networking",
            description:
                "Trabalhe em um ambiente dinâmico, conecte-se com outros profissionais de diversas áreas e aumente sua rede de contato.",
            image: networking,
        },
        {
            title: "Praticidade",
            description:
                "Toda gestão do ambiente sob nossa responsabilidade e tudo em um único boleto, proporcionando economia de tempo para você.",
            image: praticidade,
        },
    ],
};
