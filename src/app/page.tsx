"use client";

import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <header className="h-20 w-full bg-bg-black px-9 py-6 sm:h-24 xl:h-28 xl:px-12">
                <Image src={logo} alt="" className="h-full w-auto" />
            </header>
        </main>
    );
}
