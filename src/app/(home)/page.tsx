import { CarouselComponent } from "@/components/Carousel/Carousel";
import { FAQ } from "@/components/FAQ/FAQ";
import { Hero } from "@/components/Hero/Hero";
import { Partners } from "@/components/Partners/Partners";
import { Footer } from "@/components/Footer/Footer";
import { Benefits } from "@/components/Benefits/Benefits";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Benefits />
            {/* planos preto */}
            <Partners />
            <CarouselComponent />
            <FAQ />
            {/* blog preto */}
            <Contact />
            <Footer />
        </>
    );
}
