import { benefitsConfig } from "@/config/Benefits";
import Image from "next/image";

export function Benefits() {
    const { Benefits } = benefitsConfig;
    return (
        <section>
            <div className="relative mx-auto w-full max-w-7xl items-center px-5 pt-24 md:px-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl py-12 lg:max-w-7xl">
                    <div>
                        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:space-y-0 lg:text-center">
                            {Benefits.map((item,index) => (<div key={index}>
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black lg:mx-auto">
                                        <Image src={item.image} alt='' width={30} height={30}/>
                                    </div>
                                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="mt-4 text-base text-gray-500">
                                    {item.description}
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
