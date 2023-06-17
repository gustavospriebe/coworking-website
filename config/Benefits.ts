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
                "sdgasdfgadfgsdfgsdfgsdfg.",
            image: level,
        },
        {
            title: "Copa Almaz",
            description:
                "sdfggsdfgsdfgsfgsdfgsdfgsdfgsdfg.",
            image: cafe,
        },
        {
            title: "Happy Hour",
            description:
                "asdfasfasdffasdfasdasdfasdf.",
            image: happy,
        },
        {
            title: "Lounge 6o andar",
            description: "sdafgdfghfsdbgsdfgbdfsdfbsdfbbbsdfbsdfbsdfsdfbb.",
            image: loude,
        },
        {
            title: "Climatização",
            description:
                "sdfg dfsgdf gsdfg sdfgsdfg sdfg sdfg sdfgsdfgsdfgsdf.",
            image: climatizacao,
        },
    ],
};
