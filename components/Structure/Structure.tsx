import structure from "@/public/structure1.webp";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";

export function Structure() {
    return (
        <div className="w-full bg-bg-black px-7 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeader
                    sectionName="Planos"
                    sectionHeader="Conheça tudo que podemos oferecer"
                    colorSeparator="bg-whiter/20"
                />
                <div className="items-center space-y-8 lg:flex lg:space-y-4">
                    <p className="font-exotwo text-2xl font-semibold text-whiter">
                        {/* Categoria */}
                        Salas de Reunião
                    </p>
                    <div className="flex w-full gap-2">
                        <div className="card-details group relative flex h-72 w-full cursor-pointer items-end justify-center overflow-hidden rounded-3xl transition-all duration-700 hover:items-center">
                            <Image
                                // Foto da estrutura
                                src={structure}
                                alt=""
                                className="z-10 h-full w-full object-cover opacity-75 group-hover:blur-sm group-hover:brightness-50"
                            />
                            <div className="absolute z-20 flex w-full items-center justify-center gap-4 p-10 text-whiter group-hover:justify-between lg:group-hover:justify-around">
                                <p className="font-exo text-xl font-semibold group-hover:text-2xl">
                                    {/* Nome da estrutura */}
                                    Sala 1
                                </p>
                                {/* Map das caracteristicas */}
                                <div className="hidden space-y-2 font-nunitosans text-base group-hover:block">
                                    <p className="card-description">
                                        • Até 8 pessoas;
                                    </p>
                                    <p className="card-description">• TV;</p>
                                    <p className="card-description">
                                        • Ambiente climatizado;
                                    </p>
                                    <p className="card-description">
                                        • Internet de alta velocidade;
                                    </p>
                                    <p className="card-description">
                                        • Café e água disponíveis;
                                    </p>
                                    <p className="card-description">
                                        • Design moderno.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-details group relative flex h-72 w-full cursor-pointer items-end justify-center overflow-hidden rounded-3xl transition-all duration-700 hover:items-center">
                            <Image
                                // Foto da estrutura
                                src={structure}
                                alt=""
                                className="z-10 h-full w-full object-cover opacity-75 group-hover:blur-sm group-hover:brightness-50"
                            />
                            <div className="absolute z-20 flex w-full items-center justify-center gap-4 p-10 text-whiter group-hover:justify-between lg:group-hover:justify-around">
                                <p className="font-exo text-xl font-semibold group-hover:text-2xl">
                                    {/* Nome da estrutura */}
                                    Sala 1
                                </p>
                                {/* Map das caracteristicas */}
                                <div className="hidden space-y-2 font-nunitosans text-base group-hover:block">
                                    <p className="card-description">
                                        • Até 8 pessoas;
                                    </p>
                                    <p className="card-description">• TV;</p>
                                    <p className="card-description">
                                        • Ambiente climatizado;
                                    </p>
                                    <p className="card-description">
                                        • Internet de alta velocidade;
                                    </p>
                                    <p className="card-description">
                                        • Café e água disponíveis;
                                    </p>
                                    <p className="card-description">
                                        • Design moderno.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-details group relative flex h-72 w-full cursor-pointer items-end justify-center overflow-hidden rounded-3xl transition-all duration-700 hover:items-center">
                            <Image
                                // Foto da estrutura
                                src={structure}
                                alt=""
                                className="z-10 h-full w-full object-cover opacity-75 group-hover:blur-sm group-hover:brightness-50"
                            />
                            <div className="absolute z-20 flex w-full items-center justify-center gap-4 p-10 text-whiter group-hover:justify-between lg:group-hover:justify-around">
                                <p className="font-exo text-xl font-semibold group-hover:text-2xl">
                                    {/* Nome da estrutura */}
                                    Sala 1
                                </p>
                                {/* Map das caracteristicas */}
                                <div className="hidden space-y-2 font-nunitosans text-base group-hover:block">
                                    <p className="card-description">
                                        • Até 8 pessoas;
                                    </p>
                                    <p className="card-description">• TV;</p>
                                    <p className="card-description">
                                        • Ambiente climatizado;
                                    </p>
                                    <p className="card-description">
                                        • Internet de alta velocidade;
                                    </p>
                                    <p className="card-description">
                                        • Café e água disponíveis;
                                    </p>
                                    <p className="card-description">
                                        • Design moderno.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
