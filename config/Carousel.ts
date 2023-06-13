import cafe from "@/public/cafe.jpg";
import climatizacao from "@/public/climatizacao.jpg";
import happy from "@/public/happy.jpg";
import level from "@/public/level.jpg";
import loude from "@/public/loude.jpg";
import { Carousel } from "types";

export const carouselConfig: Carousel = {
    Carousel: [
        {
            title: "Primeiro prédio modular da America Latina",
            description:
                "A inovação está em nosso DNA, desde a construção. Em colaboração com a Brasil Ao Cubo, startup especializada em gestão ágil de obras, introduzimos um conceito pioneiro.",
            image: level,
        },
        {
            title: "Copa Almaz",
            description:
                "Nossa copa compartilhada oferece acesso livre a geladeira, micro-ondas, café e água, promovendo momentos de convívio e refeições entre colegas coworkers.",
            image: cafe,
        },
        {
            title: "Happy Hour",
            description:
                "O happy hour Almaz já é conhecido entre os coworkers e pessoas da cidade. Conversas descontraídas, cardápio do Premier Coffee e chope gelado.",
            image: happy,
        },
        {
            title: "Lounge 6o andar",
            description: "Nosso andar de cima é um espaço perfeito.",
            image: loude,
        },
        {
            title: "Climatização",
            description:
                "Para melhor desempenho e conforto da sua equipe, todo o espaço Almaz é climatizado.",
            image: climatizacao,
        },
    ],
};
