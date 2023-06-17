import Image from "next/image";
import level from "@/public/level.jpg";
import { SectionHeader } from "../SectionHeader";

export function Blog() {
    return (
        <section className="bg-whiter py-10 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                {/* <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Latest from blog
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-0">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis.
                        </p>
                    </div>
                </div> */}
                <SectionHeader
                    sectionName="Blog"
                    sectionHeader="Entre em contato, conheça a Almaz"
                    colorHeader="text-black"
                />

                {/* Posts */}
                <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 md:max-w-full md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                    <div className="overflow-hidden rounded bg-white shadow">
                        <div className="p-5">
                            <div className="relative">
                                <a
                                    href="#"
                                    title=""
                                    className="aspect-w-4 aspect-h-3 block"
                                >
                                    <Image
                                        className="h-full w-full object-cover"
                                        src={level}
                                        alt=""
                                    />
                                </a>

                                <div className="absolute left-4 top-4">
                                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                                        {" "}
                                        Lifestyle{" "}
                                    </span>
                                </div>
                            </div>
                            <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500">
                                {" "}
                                March 21, 2020{" "}
                            </span>
                            <p className="mt-5 text-2xl font-semibold">
                                <a href="#" title="" className="text-black">
                                    {" "}
                                    How to build coffee inside your home in 5
                                    minutes.{" "}
                                </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit.
                            </p>
                            <a
                                href="#"
                                title=""
                                className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
                            >
                                Continue Reading
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

                    <div className="overflow-hidden rounded bg-white shadow">
                        <div className="p-5">
                            <div className="relative">
                                <a
                                    href="#"
                                    title=""
                                    className="aspect-w-4 aspect-h-3 block"
                                >
                                    <Image
                                        className="h-full w-full object-cover"
                                        src={level}
                                        alt=""
                                    />
                                </a>

                                <div className="absolute left-4 top-4">
                                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                                        {" "}
                                        Marketing{" "}
                                    </span>
                                </div>
                            </div>
                            <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500">
                                {" "}
                                April 04, 2020{" "}
                            </span>
                            <p className="mt-5 text-2xl font-semibold">
                                <a href="#" title="" className="text-black">
                                    {" "}
                                    Ho7 Tips to run your remote team faster and
                                    better.{" "}
                                </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit.
                            </p>
                            <a
                                href="#"
                                title=""
                                className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
                            >
                                Continue Reading
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

                    <div className="overflow-hidden rounded bg-white shadow">
                        <div className="p-5">
                            <div className="relative">
                                <a
                                    href="#"
                                    title=""
                                    className="aspect-w-4 aspect-h-3 block"
                                >
                                    <Image
                                        className="h-full w-full object-cover"
                                        src={level}
                                        alt=""
                                    />
                                </a>

                                <div className="absolute left-4 top-4">
                                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                                        {" "}
                                        Productivity{" "}
                                    </span>
                                </div>
                            </div>
                            <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500">
                                {" "}
                                May 12, 2020{" "}
                            </span>
                            <p className="mt-5 text-2xl font-semibold">
                                <a href="#" title="" className="text-black">
                                    {" "}
                                    5 Productivity tips to write faster at
                                    morning.{" "}
                                </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit.
                            </p>
                            <a
                                href="#"
                                title=""
                                className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
                            >
                                Continue Reading
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
                </div>
            </div>
        </section>
    );
}
