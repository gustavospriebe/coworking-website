import { benefitsConfig } from "@/config/Benefits";
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
                <div className="grid grid-cols-2 gap-12 pt-4 md:grid-cols-3 lg:space-y-0 lg:text-center">
                    {Benefits.map((item, index) => (
                        <div key={index}>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black lg:mx-auto">
                                <item.icon color="#84E341" size={32} />
                            </div>
                            <div>
                                <p className="mt-4 break-normal text-lg font-medium leading-6 text-black">
                                    {item.title}
                                </p>
                                <p className="mt-4 text-base text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
