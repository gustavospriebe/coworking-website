import { Benefits } from "types";
import {
    Lightbulb,
    MapPin,
    MessagesSquare,
    Newspaper,
    Clock4,
} from "lucide-react";

export const benefitsConfig: Benefits = {
    Benefits: [
        {
            title: "Credibilidade / Destaque",
            description:
                "Localização privilegiada no centro de Tubarão, Santa Catarina. Arquitetura criativa e inovadora, sua empresa no primeiro edifício modular da América Latina.",
            icon: MapPin,
        },
        {
            title: "Comodidade",
            description:
                "Sem investimento inicial, salas prontas para uso e toda gestão do ambiente por nossa conta.",
            icon: Lightbulb,
        },
        {
            title: "Flexibilidade",
            description:
                "Planos feitos para atender sua necessidade em diversos modelos de contratação, sem burocracia.",
            icon: Newspaper,
        },
        {
            title: "Networking",
            description:
                "Trabalhe em um ambiente dinâmico, conecte-se com outros profissionais de diversas áreas e aumente sua rede de contato.",
            icon: MessagesSquare,
        },
        {
            title: "Praticidade",
            description:
                "Toda gestão do ambiente sob nossa responsabilidade e tudo em um único boleto, proporcionando economia de tempo para você.",
            icon: Clock4,
        },
    ],
};
