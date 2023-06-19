import { blogConfig } from "@/config/Blog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../SectionHeader";
import { buttonVariants } from "../ui/button";

export function Blog() {
    const { Blog } = blogConfig;

    return (
        <section className="w-full px-7 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div className="mx-auto flex max-w-7xl flex-col">
                <SectionHeader
                    sectionName="Blog"
                    sectionHeader="Conteúdos especiais para você"
                    colorHeader="text-black"
                />

                <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 rounded-md md:max-w-full lg:mt-16 lg:grid-cols-3">
                    {Blog.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded bg-white shadow-md"
                        >
                            <div className="p-5 md:p-8 lg:p-5">
                                <div className="relative">
                                    <a
                                        href={item.link}
                                        title=""
                                        className="aspect-w-4 aspect-h-3 block"
                                    >
                                        <Image
                                            className="aspect-video h-full w-full object-cover transition-all hover:scale-105"
                                            src={item.image}
                                            alt=""
                                        />
                                    </a>

                                    <div className="absolute left-4 top-4">
                                        <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>
                                <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500">
                                    {item.date}
                                </span>
                                <p className="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" className="text-black">
                                        {item.title}
                                    </a>
                                </p>
                                <p className="mt-4 text-base text-gray-600">
                                    {item.description}
                                </p>
                                <a
                                    href={item.link}
                                    title=""
                                    className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent text-base font-semibold text-green-principal transition-all duration-200 hover:border-green-principal focus:border-green-principal"
                                >
                                    Continue lendo
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <Link
                    href="https://api.whatsapp.com/send?phone=5548996294577&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida"
                    target="_blank"
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "text-principal mx-auto mt-8 w-full max-w-[220px] bg-green-principal font-exotwo hover:bg-green-principal/70 sm:w-2/4"
                    )}
                    id="btn-blog"
                >
                    <p>Leia outros artigos</p>
                </Link>
            </div>
        </section>
    );
}
