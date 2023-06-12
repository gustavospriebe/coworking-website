"use client";

import cafe from "@/public/cafe.jpg";
import climatizacao from "@/public/climatizacao.jpg";
import happy from "@/public/happy.jpg";
import lounge from "@/public/loude.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import "react-awesome-slider/dist/styles.css";
import { Separator } from "./ui/separator";
import { CardComponent } from "./Card";


const teste = [1, 2, 3, 4, 5, 6];

export function CarouselComponent() {
    const [cards, setCards] = useState(0);

    // useEffect(() => {
    //     function changeState() {
    //         setCards((prevStateIndex) => (prevStateIndex + 1) % teste.length);
    //     }

    //     const interval = setInterval(changeState, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [cards]);

    return (
        <div className="w-full bg-bg-black">
            <div className="mx-7 flex h-screen max-w-6xl flex-col items-start gap-5 py-20 md:flex-row lg:gap-8">
                <div className="max-w-[420px]">
                    <p className="text-green-secundary">Nossa Estrutura</p>
                    <p className="mb-4 text-4xl text-whiter">Nossa Estrutura</p>
                    <Separator className="my-2 w-4/5 text-whiter/20" />
                    <p className="mb-4 text-base text-whiter">
                        Conheça tudo que podemos oferecer
                    </p>
                    <p className="max-w-[500px] text-secundary mb-6">
                    Aqui sua empresa poderá ter um espaço comercial de qualidade, com custo reduzido e muitas outras vantagens.
                    </p>

                            <CardComponent />
                    {/* <div className="-mx-5 w-screen scroll-m-0 overflow-y-hidden overflow-x-scroll pl-5  ">
                        <div className="flex gap-x-3 gap-y-3 sm:gap-x-5">
                        </div>
                    </div> */}
                </div>
                <div className="w-full border text-center">2</div>
            </div>
        </div>
    );
}
