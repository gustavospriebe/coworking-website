import { Footer } from "@/components/Footer/Footer";
import { NavigationMenuComponent } from "@/components/NavBar/NavMenu";

interface HomeProps {
    children: React.ReactNode;
}

export default function Home({ children }: HomeProps) {
    return (
        <div className="">
            <NavigationMenuComponent />
            {children}
            <Footer />
        </div>
    );
}
