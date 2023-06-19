import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <div className="hero-bg w-full px-7 md:px-12 lg:px-16">
            <div className=" mx-auto w-full max-w-7xl space-y-6 py-36 lg:py-48">
                <div className=" flex flex-1 flex-col items-center gap-7 text-center">
                    <h1 className="mt-8 font-exotwo text-4xl font-bold tracking-tight text-whiter md:text-7xl lg:mt-0">
                        Um ponto de
                        <span className="md:block">
                            {" "}
                            encontro e{" "}
                            <span className="text-green-secundary md:text-whiter">
                                conexões construtivas
                            </span>
                        </span>
                    </h1>
                    <p className="max-w-3xl font-exo text-sm leading-normal text-quaternary sm:text-lg sm:leading-8  lg:text-xl">
                        Sua empresa em um espaço referência na cidade de Tubarão
                    </p>
                    <div className="flex flex-1 flex-col items-center justify-center gap-7 sm:flex-row ">
                        <Link
                            href="https://api.whatsapp.com/send?phone=5548996294577&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida"
                            target="_blank"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "text-principal gap-2 bg-green-principal font-exotwo hover:bg-green-principal/70"
                            )}
                            id="btn-contato"
                        >
                            <p>Entre em contato</p>
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="https://api.whatsapp.com/send?phone=5548996294577&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20visita"
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "border-green-principal/70 font-exotwo font-medium text-whiter hover:bg-green-principal/70 hover:text-whiter "
                            )}
                            id="btn-agende"
                        >
                            Agende uma visita
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
