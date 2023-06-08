import { Button } from "flowbite-react";
import { ReactNode } from "react";

interface ButtonPProps {
    children: ReactNode;
}

export function ButtonP({ children }: ButtonPProps) {
    return (
        <Button
            className="
        bg-green-principal font-exotwo font-semibold text-[#282828] hover:bg-green-principal/70 "
        >
            {children}
        </Button>
    );
}
