import { structureConfig } from "@/config/Structure";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import { Separator } from "@/components/ui/separator";

export function Structure() {
    const { Structure } = structureConfig;

    return (
        <div id="salas" className="w-full bg-bg-black px-5 py-16 ">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeader
                    sectionName="Nossas salas"
                    sectionHeader="Espaços que atendem suas necessidades"
                    colorSeparator="bg-whiter/20"
                />
                <p className="text-whiter">
                    Almaz Coworking é um espaço colaborativo, estrategicamente
                    pensado, com objetivo de conectar pessoas, fomentar
                    networking e colaborar para a construção de um ambiente
                    inovador na cidade de Tubarão, Santa Catarina.
                </p>
                {Structure.map((item, index) => (
                    <div key={index}>
                        <div className="mt-4 hidden gap-2 space-y-8 md:flex md:flex-col md:gap-4 lg:flex-row lg:items-center lg:space-y-4">
                            <p className="font-exotwo text-2xl font-semibold text-whiter lg:w-[150px]">
                                {item.category}
                            </p>
                            <div className="flex w-full flex-col gap-4 md:flex-row lg:gap-2">
                                {item.assets.map((asset, assetIndex) => (
                                    <div
                                        key={assetIndex}
                                        className=" card-details group relative flex h-60 max-h-[320px] min-h-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl  shadow-sm shadow-secundary transition-all duration-700 md:h-96 md:items-end md:hover:items-center"
                                    >
                                        <Image
                                            src={asset.image}
                                            alt=""
                                            className="z-10 h-full w-full object-cover opacity-75 brightness-75
                                        after:blur-[2px] md:blur-none md:brightness-100  md:group-hover:blur-[2px] md:group-hover:brightness-75"
                                        />
                                        <div className="absolute z-20 flex w-full flex-col items-center justify-center gap-4 px-2 pb-10 text-whiter group-hover:justify-between lg:flex-row lg:gap-0 lg:group-hover:justify-around">
                                            <p className="font-exo text-lg font-semibold md:text-xl md:group-hover:text-2xl">
                                                {asset.name}
                                            </p>
                                            <div className="block space-y-2 font-nunitosans text-sm md:hidden md:text-base md:group-hover:block">
                                                {asset.description.map(
                                                    (desc, descIndex) => (
                                                        <p
                                                            key={descIndex}
                                                            className="card-description"
                                                        >
                                                            {desc}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col items-center gap-4 space-y-4 md:hidden">
                            <p className="font-exotwo text-2xl font-semibold text-whiter lg:w-[150px]">
                                {item.category}
                            </p>
                            <Separator className="my-5 bg-whiter/20" />
                            <div className="flex w-full flex-col justify-center gap-6 md:flex-row ">
                                {item.assets.map((asset, assetIndex) => (
                                    <div
                                        key={assetIndex}
                                        className=" group flex cursor-pointer flex-col items-center justify-center gap-6  sm:flex-row"
                                    >
                                        <Image
                                            src={asset.image}
                                            alt=""
                                            className="h-full w-full rounded-3xl sm:max-w-[335px] object-cover opacity-75 brightness-75"
                                        />
                                        <div className="flex w-full flex-col items-center justify-center gap-4 px-2 text-whiter">
                                            <p className="font-exo text-xl font-semibold">
                                                {asset.name}
                                            </p>
                                            <div className="space-y-2 font-nunitosans text-sm mt-2">
                                                {asset.description.map(
                                                    (desc, descIndex) => (
                                                        <p
                                                            key={descIndex}
                                                            className="card-description"
                                                        >
                                                            {desc}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                S
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
