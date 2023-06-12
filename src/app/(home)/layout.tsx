import { CardComponent } from "@/components/Card";
import { NavigationMenuComponent } from "@/components/NavMenu";

interface HomeProps {
    children: React.ReactNode;
}

export default function Home({ children }: HomeProps) {
    return (
        <div className="">
            <NavigationMenuComponent />
            {children}
            {/* <CardComponent /> */}
            {/* <Footer /> */}
        </div>
    );
}
