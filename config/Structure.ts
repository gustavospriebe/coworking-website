import box2 from "@/public/box02.webp";
import box1 from "@/public/box1.webp";
import eventos from "@/public/eventos.webp";
import level from "@/public/level.jpg";
import sala1e3 from "@/public/sala1e3.webp";
import sala2 from "@/public/sala2.webp";
import structure1 from "@/public/structure1.webp";
import structure2 from "@/public/structure2.webp";
import structure3 from "@/public/structure3.webp";
import treinamento from "@/public/treinamento.webp";
import { Structure } from "types";

export const structureConfig: Structure = {
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
                        "• Até 8 pessoas;",
                        "• TV;",
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
                        "• Até 8 pessoas;",
                        "• TV;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Design moderno.",
                    ],
                },
                {
                    name: "Box 2",
                    image: box2,
                    description: [
                        "• Até 8 pessoas;",
                        "• TV;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Design moderno.",
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
                        "• Até 8 pessoas;",
                        "• TV;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Design moderno.",
                    ],
                },
                {
                    name: "Escritório privado",
                    image: structure3,
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
                    name: "Sala de treinamento",
                    image: treinamento,
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
                    name: "Espaço para eventos",
                    image: eventos,
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
                    name: "Escritório virtual",
                    image: level,
                    description: [
                        "• Até 8 pessoas;",
                        "• TV;",
                        "• Ambiente climatizado;",
                        "• Internet de alta velocidade;",
                        "• Café e água disponíveis;",
                        "• Design moderno.",
                    ],
                },
            ],
        },
    ],
};
