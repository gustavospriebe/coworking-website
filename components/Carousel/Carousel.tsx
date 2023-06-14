"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { carouselConfig } from "@/config/Carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import "react-awesome-slider/dist/styles.css";
import { CardComponent } from "./Card";

export function CarouselComponent() {
    const items = carouselConfig.Carousel;
    console.log(items);
    const [activeHighlight, setActiveHighlight] = useState<number>(0);

    useEffect(() => {
        function changeState() {
            setActiveHighlight((prevState) => (prevState + 1) % items.length);
        }

        const interval = setInterval(changeState, 6000);
        return () => {
            clearInterval(interval);
        };
    }, [activeHighlight, items.length]);
    return (
        <>
            <div id="teste" className="w-full bg-bg-black px-7 py-16 md:px-12 lg:px-16 lg:py-24 ">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="relative m-auto items-center align-middle">
                        <div className="items-center gap-12 text-left lg:inline-flex lg:gap-20">
                            <Image
                                className="aspect-[4/3] w-full   object-cover shadow-md  after:animate-in lg:ml-auto"
                                alt="hero"
                                src={items[activeHighlight].image}
                            />
                            <div className="mt-6 flex flex-col lg:mt-0">
                                <SectionHeader
                                    sectionName="Nossa Estrutura"
                                    sectionHeader="Conheça tudo que podemos oferecer"
                                    colorSeparator="bg-whiter/20"
                                />
                                <div className="mx-auto mt-6 lg:max-w-7xl">
                                    <CardComponent
                                        activeHighlight={activeHighlight}
                                        setActiveHighlight={setActiveHighlight}
                                        items={items}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
