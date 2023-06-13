import { CarouselComponent } from "@/components/Carousel/Carousel";
import { Hero } from "@/components/Hero/Hero";
import { Partners } from "@/components/Partners/Partners";

export default function Home() {
    return (
        <>
            <Hero />
            <CarouselComponent />
            <Partners />
        </>
    );
}
