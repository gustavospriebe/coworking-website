"use client";

import cafe from "@/public/cafe.jpg";
import climatizacao from "@/public/climatizacao.jpg";
import happy from "@/public/happy.jpg";
import lounge from "@/public/loude.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import {carouselConfig} from '@/config/Carousel'
import "react-awesome-slider/dist/styles.css";
import { Separator } from "./ui/separator";
import { CardComponent } from "./Card";

type Highlights = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const cards = [1, 2, 3];

export function CarouselComponent() {
    const items = carouselConfig.Carousel
    console.log(items)
    const [activeHighlight, setActiveHighlight] = useState<number>(0);

    useEffect(() => {
        function changeState() {
            setActiveHighlight((prevstate) => (prevstate + 1) % items.length);
        }

        const interval = setInterval(changeState, 8000);
        return () => {
            clearInterval(interval);
        };
    }, [activeHighlight]);
    return (
        <div className="w-full min-h-full bg-bg-black px-7">
            <div className="m-auto flex max-w-6xl flex-col items-start gap-5 py-16 md:flex-row lg:gap-8">
                <div className="max-w-[420px]">
                    <p className="mb-2 text-green-secundary">Nossa Estrutura</p>
                    <p className="mb-4 text-2xl text-whiter">
                        Conheça tudo que podemos oferecer
                    </p>
                    <Separator className="my-4 text-whiter/20" />
                   {/*  <p className="mb-6 max-w-[500px] text-secundary">
                        Aqui sua empresa poderá ter um espaço comercial de
                        qualidade, com custo reduzido e muitas outras vantagens.
                    </p> */}

                    <CardComponent
                        activeHighlight={activeHighlight}
                        setActiveHighlight={setActiveHighlight}
                        items = {items} 

                    />
                    {/* <div className="-mx-5 w-screen scroll-m-0 overflow-y-hidden overflow-x-scroll pl-5  ">
                        <div className="flex gap-x-3 gap-y-3 sm:gap-x-5">
                        </div>
                    </div> */}
                </div>
                <div className="w-full text-center text-whiter space-y-2">

                    <Image src={items[activeHighlight].image} alt='' className='aspect-video object-cover w-full brightness-50 rounded-md shadow-md' />

                   <p className='text-whiter relative text-xl bottom-30 w-2/3 m-auto'>{items[activeHighlight].description}</p> 
                   </div>
            </div>
        </div>
    );
}
