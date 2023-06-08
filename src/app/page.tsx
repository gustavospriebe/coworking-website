"use client";

import logo from "@/assets/logo.svg";
import menu from "@/assets/menu.svg";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <header className="flex h-20 w-full items-center justify-between bg-bg-black px-9 py-6 sm:h-24 lg:h-28 lg:px-12">
                <Image src={logo} alt="" className="h-10 w-auto sm:h-12" />
                <Image src={menu} alt="" className="h-8 w-auto lg:hidden" />
            </header>
            <div></div>
        </main>
    );
}
