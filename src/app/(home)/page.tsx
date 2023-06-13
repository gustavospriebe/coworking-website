import { CarouselComponent } from "@/components/Carousel";
import {Partners} from "@/components/Partners";
import { Hero } from "@/components/Hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Hero />
            <CarouselComponent />
            <Partners />
        </>
    );
}
