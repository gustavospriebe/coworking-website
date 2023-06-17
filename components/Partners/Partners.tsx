import { Player } from "@/components/Partners/Player";
import { SectionHeader } from "@/components/SectionHeader";
import { partnersConfig } from "@/config/Partners";
import Image from "next/image";

export function Partners() {
    const items = partnersConfig.Partners;

    return (
        <section aria-labelledby="logocloud-two">
            <div className="w-full px-7 py-16 md:px-12 lg:px-16 lg:py-24 ">
                <div className=" mx-auto w-full max-w-7xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div>
                        <div className="w-full">
                            <div className="space-y-8">
                                <SectionHeader
                                    sectionName="Parceiros"
                                    sectionHeader="Quem faz parte do Almaz"
                                    colorHeader="text-black"
                                />
                                <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 shadow-xl">
                                    <div className="absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-[1rem] bg-gray-800"></div>
                                    <div className="absolute -left-[17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
                                    <div className="absolute -left-[17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
                                    <div className="absolute -right-[17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800"></div>
                                    <div className="relative h-[572px] w-[272px] overflow-hidden rounded-[2rem] bg-black">
                                        <Player />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-0.5 sm:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-5 col-span-1 flex justify-center px-8 py-8"
                            >
                                <Image
                                    className="max-h-12 opacity-50"
                                    src={item.logo}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
