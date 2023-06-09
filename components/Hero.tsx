import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <div>
            <section className="hero-bg space-y-6 py-36 lg:py-48">
                <div className=" flex flex-1 flex-col items-center gap-7 text-center">
                    <span className="font-exotwo text-2xl font-extrabold text-whiter sm:text-3xl lg:text-4xl xl:text-5xl ">
                        Um ponto de encontro e
                        <p className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
                            conexões construtivas
                        </p>
                    </span>
                    <p className="max-w-[42rem] font-exo text-sm leading-normal text-quaternary sm:text-lg sm:leading-8  lg:text-xl">
                        Sua empresa em um espaço referência na cidade de Tubarão
                    </p>
                    <div className="flex flex-1 flex-col items-center justify-center gap-7 sm:flex-row ">
                        <Link
                            href="/login"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "text-principal gap-2 bg-green-principal hover:bg-green-principal/70"
                            )}
                        >
                            <p>Entre em contato</p>
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#"
                            // {siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "border-green-principal font-medium text-whiter hover:bg-green-principal/70 hover:text-whiter "
                            )}
                        >
                            Agende uma visita
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
