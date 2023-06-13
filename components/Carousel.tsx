"use client";

import cafe from "@/public/cafe.jpg";
import climatizacao from "@/public/climatizacao.jpg";
import happy from "@/public/happy.jpg";
import lounge from "@/public/loude.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { carouselConfig } from "@/config/Carousel";
import "react-awesome-slider/dist/styles.css";
import { Separator } from "./ui/separator";
import { CardComponent } from "./Card";

type Highlights = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const cards = [1, 2, 3];

export function CarouselComponent() {
    const items = carouselConfig.Carousel;
    console.log(items);
    const [activeHighlight, setActiveHighlight] = useState<number>(0);

    useEffect(() => {
        function changeState() {
            setActiveHighlight((prevstate) => (prevstate + 1) % items.length);
        }

        const interval = setInterval(changeState, 6000);
        return () => {
            clearInterval(interval);
        };
    }, [activeHighlight]);
    return (
        <>
            <div className="relative mx-auto w-full items-center  bg-bg-black px-7 py-16 md:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="relative m-auto items-center align-middle">
                        <div className="items-center gap-12 text-left lg:inline-flex lg:gap-20">
                            <Image
                                className="aspect-[4/3] w-full   object-cover after:animate-in  shadow-md lg:ml-auto"
                                alt="hero"
                                src={items[activeHighlight].image}
                            />
                            <div className="mt-6 flex flex-col lg:mt-0">
                                <div className="max-w-[420px]">
                                    <div>
                                        <p className="mb-2 font-exotwo text-green-secundary">
                                            Nossa Estrutura
                                        </p>
                                        <p className="text-2xl font-exo font-medium tracking-tight text-whiter sm:text-3xl">
                                            Conheça tudo que podemos oferecer
                                        </p>
                                        <Separator className="mt-5 bg-whiter/20" />
                                    </div>
                                </div>
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

{
    /* // <div classNameName="w-full min-h-full bg-bg-black px-7">
    //     <div classNameName="m-auto flex max-w-6xl flex-col items-start gap-5 py-16 md:flex-row lg:gap-8">
    //         <div classNameName="max-w-[420px]">
    //             <p classNameName="mb-2 text-green-secundary">Nossa Estrutura</p>
    //             <p classNameName="mb-4 text-2xl text-whiter">
    //                 Conheça tudo que podemos oferecer
    //             </p>
    //             <Separator classNameName="my-4 text-whiter/20" />
    //            {/*  <p classNameName="mb-6 max-w-[500px] text-secundary">
    //                 Aqui sua empresa poderá ter um espaço comercial de
    //                 qualidade, com custo reduzido e muitas outras vantagens.
    //             </p> 

    //             <CardComponent
    //                 activeHighlight={activeHighlight}
    //                 setActiveHighlight={setActiveHighlight}
    //                 items = {items} 

    //             />
    //             {/* <div classNameName="-mx-5 w-screen scroll-m-0 overflow-y-hidden overflow-x-scroll pl-5  ">
    //                 <div classNameName="flex gap-x-3 gap-y-3 sm:gap-x-5">
    //                 </div>
    //             </div>
    //         </div>
    //         <div classNameName="w-full text-center text-whiter space-y-2">

    //             <Image src={items[activeHighlight].image} alt='' classNameName='aspect-video object-cover w-full brightness-50 rounded-md shadow-md' />

    //            <p classNameName='text-whiter relative text-xl bottom-30 w-2/3 m-auto'>{items[activeHighlight].description}</p> 
    //            </div>
    //     </div>
    // </div> */
}
