import { Button } from "flowbite-react";
import { ReactNode } from "react";

interface ButtonSProps {
    children: ReactNode;
}

export function ButtonS({ children }: ButtonSProps) {
    return (
        <Button
            className="
        bg-green-principal font-exotwo font-semibold text-primary hover:bg-green-principal/70 "
        >
            {children}
        </Button>
    );
}
