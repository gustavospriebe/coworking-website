import { CardComponent } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { NavigationMenuComponent } from "@/components/NavMenu";

export default function Home() {
    return (
        <div className="">
            <NavigationMenuComponent />
            <Hero />
            <CardComponent />
        </div>
    );
}
