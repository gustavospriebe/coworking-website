import { benefitsConfig } from "@/config/Benefits";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";

export function Benefits() {
    const { Benefits } = benefitsConfig;
    return (
        <section className="w-full px-7 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl">
                <SectionHeader
                    sectionName="Benefícios"
                    sectionHeader="Porque ter seu espaço conosco"
                    colorHeader="text-black"
                />
                <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:space-y-0 lg:text-center">
                    {Benefits.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black lg:mx-auto">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <p className="mt-4 text-lg break-normal font-medium leading-6 text-black">
                                    {item.title}
                                </p>
                            </div>
                            <div className="mt-4 text-base text-gray-500">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
