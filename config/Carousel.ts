import cafe from '@/public/cafe.jpg';
import climatizacao from '@/public/climatizacao.jpg';
import happy from '@/public/happy.jpg';
import loude from '@/public/loude.jpg';
import { Carousel } from "types";

export const carouselConfig: Carousel[] = {
    Carousel: [
        {
            title: "Copa Almaz",
            description:"Uma copa compartilhada disponível para todos, com geladeira, micro-ondas, café e água liberados o tempo todo. Além de uma bancada espaçosa para tomar um cafézinho ou fazer um lanche com seus colegar coworkers.",
            image: cafe,
        },
        {
            title: "Happy Hour",
            description:"O happy hour Almaz já é conhecido entre os coworkers e pessoas da cidade. Conversas descontraídas, cardápio do Premier Coffee e chope gelado.",
            image: happy,
        },
        {
            title: "Lounge 6o andar",
            description:"Nosso andar de cima é um espaço perfeito.",
            image: loude,
        },
        {
            title: "Climatização",
            description:"Para melhor desempenho e conforto da sua equipe, todo o espaço Almaz é climatizado.",
            image: climatizacao,
        },
    ],
};

