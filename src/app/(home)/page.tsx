import { CarouselComponent } from "@/components/Carousel/Carousel";
import { FAQ } from "@/components/FAQ/FAQ";
import { Hero } from "@/components/Hero/Hero";
import { Partners } from "@/components/Partners/Partners";

export default function Home() {
    return (
        <>
            <Hero />
            <FAQ />
            <CarouselComponent />
            <Partners />
        </>
    );
}
