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
                <div className="flex w-full gap-6 rounded-sm bg-[#212121] p-2">
                    <div className="card-details group relative flex h-72 w-full cursor-pointer items-end justify-center overflow-hidden rounded-3xl transition-all duration-700 hover:items-center ">
                        <Image
                            src={structure}
                            alt=""
                            className="z-10 h-full w-full object-cover opacity-75 group-hover:blur-sm"
                        />
                        <div className="absolute z-20 flex flex-wrap items-center justify-center gap-2 p-8 text-whiter">
                            <p className="font-exotwo text-xl font-semibold">
                                Salas de Reunião
                            </p>
                            <p className="hidden font-nunitosans text-lg group-hover:block">
                                ughalkdfjhgfshg dflkg lfdjshkjldfhsgkjlhsdfkl
                                gkdjfsjjkgdfsj
                            </p>
                        </div>
                    </div>

                    <div className="card-details flex h-72 w-full cursor-pointer items-end justify-center overflow-hidden rounded-3xl transition-all duration-700 hover:items-center hover:justify-end">
                        <Image
                            src={structure}
                            alt=""
                            className="z-10 h-full w-full object-cover opacity-75 hover:blur-sm"
                        />
                        <div className="group absolute z-20 flex max-w-max items-center justify-center gap-2 p-8 text-whiter">
                            <p className="hidden font-nunitosans text-lg group-hover:block">
                                ughalkdfjhgfshg dflkg lfdjshkjldfhsgkjlhsdfkl
                                gkdjfsjjkgdfsj
                            </p>
                            <p className="font-exotwo text-xl font-semibold">
                                Salas de Reunião
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
