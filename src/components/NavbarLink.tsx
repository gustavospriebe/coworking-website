import { Navbar } from "flowbite-react";
import { ReactNode } from "react";

interface NavbarLinkProps {
    children: ReactNode;
}

export function NavbarLink({ children }: NavbarLinkProps) {
    return (
        <Navbar.Link
            className="
        text-whiter hover:text-whiter/70  "
        >
            {children}
        </Navbar.Link>
    );
}
