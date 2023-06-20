// import { Blog } from "types";
import structure1 from "@/public/structure1.webp";
import structure2 from "@/public/structure2.webp";
import structure3 from "@/public/structure3.webp";
import box2 from "@/public/box02.webp";
import sala1e3 from "@/public/sala1e3.webp";
import sala2 from "@/public/sala2.webp";
import box1 from "@/public/box1.webp";
import treinamento from "@/public/treinamento.webp";
import eventos from "@/public/eventos.webp";
import level from "@/public/level.jpg";

export const structureConfig = {
    Structure: [
        {
            category: "Salas de Reunião",
            assets: [
                {
                    name: "Sala 1",
                    image: structure1,
                    description: [
                        "• Até 8 pessoas;",
                        "• TV;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Design moderno.",
                    ],
                },
                {
                    name: "Sala 2",
                    image: sala2,
                    description: [
                        "• Até 6 pessoas;",
                        "• Smart TV;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Design moderno.",
                    ],
                },
                {
                    name: "Sala 3",
                    image: sala1e3,
                    description: [
                        "• Até 8 pessoas;",
                        "• TV;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Design moderno.",
                    ],
                },
                {
                    name: "Box 1",
                    image: box1,
                    description: [
                        "• Até 4 pessoas;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Ambiente descontraído e aconchegante.",
                    ],
                },
                {
                    name: "Box 2",
                    image: box2,
                    description: [
                        "• Até 4 pessoas;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Ambiente descontraído e aconchegante.",
                    ],
                },
            ],
        },
        {
            category: "Estrutura",
            assets: [
                {
                    name: "Estações de trabalho",
                    image: structure2,
                    description: [
                        "• Mesa fixa;",
                        "• Horário ilimitado;",
                        "• Endereço fiscal;",
                        "• Secretária concierge;",
                        "• 2h de sala de reunião/mês.",
                        "• 15% desconto em salas de reunião;",
                        "• Grab and go Premier Coffee.",
                    ],
                },
                {
                    name: "Escritório privado",
                    image: structure3,
                    description: [
                        "• Horário ilimitado;",
                        "• Endereço fiscal;",
                        "• Secretária concierge;",
                        "• 2h de sala de reunião/mês.",
                        "• 15% desconto em salas de reunião;",
                        "• 5% de desconto em produtos;",
                        "• Grab and go Premier Coffee.",
                    ],
                },

                {
                    name: "Sala de treinamento",
                    image: treinamento,
                    description: [
                        "• Até 25 pessoas;",
                        "• Layout adaptável;",
                        "• Smart TV 4K;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Flip chart.",
                    ],
                },
                {
                    name: "Espaço para eventos",
                    image: eventos,
                    description: [
                        "• Até 50 pessoas;",
                        "• Projetor;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Ambiente descontraído;",
                        "• Flip chart.",
                    ],
                },
                {
                    name: "Escritório virtual",
                    image: level,
                    description: [
                        "• Endereço fiscal para você abrir sua empresa e emitir NF;",
                        "• Endereço comercial para colocar em materiais promocionais;",
                        "• Desconto em salas de reunião;",
                        "• Almaz em todo seu material promocional, cartão de visitas, folders e websites;",
                        "• Recebimento de correspondências.",
                    ],
                },
            ],
        },
    ],
};
