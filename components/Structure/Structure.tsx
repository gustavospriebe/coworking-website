import { structureConfig } from "@/config/Structure";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";

export function Structure() {
    const { Structure } = structureConfig;

    return (
        <div className="w-full bg-bg-black px-7 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeader
                    sectionName="Nosso espaço"
                    sectionHeader="Conheça tudo que podemos oferecer"
                    colorSeparator="bg-whiter/20"
                />
                {Structure.map((item, index) => (
                    <div
                        key={index}
                        className="mt-4 items-center gap-2 space-y-8 md:gap-4 lg:flex lg:space-y-4"
                    >
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
                ))}
            </div>
        </div>
    );
}
