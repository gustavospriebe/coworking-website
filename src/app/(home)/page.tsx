import { Benefits } from "@/components/Benefits/Benefits";
import { Blog } from "@/components/Blog/Blog";
import { CarouselComponent } from "@/components/Carousel/Carousel";
import { Contact } from "@/components/Contact/Contact";
import { FAQ } from "@/components/FAQ/FAQ";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Map } from "@/components/Map";
import { Partners } from "@/components/Partners/Partners";

export default function Home() {
    return (
        <>
            <Hero />
            <Benefits />
            {/* planos preto */}
            <Partners />
            <CarouselComponent />
            <FAQ />
            <Blog />
            <Contact />
            <Map />
            <Footer />
        </>
    );
}
