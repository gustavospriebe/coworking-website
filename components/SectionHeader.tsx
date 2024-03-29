import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { Separator } from "./ui/separator";

interface SectionHeaderProps {
    sectionName: string;
    sectionHeader: string;
    colorName?: string;
    colorHeader?: string;
    colorSeparator?: string;
}

export function SectionHeader({
    sectionName,
    sectionHeader,
    colorName,
    colorHeader,
    colorSeparator,
}: SectionHeaderProps) {
    return (
        <div>
            <p
                className={cn(
                    "mb-2 inline p-1 font-exotwo font-semibold",
                    colorName ?? "text-green-principal"
                )}
            >
                <Balancer>{sectionName}</Balancer>
            </p>
            <p
                className={cn(
                    "font-exo text-3xl font-semibold tracking-tight sm:text-4xl",
                    colorHeader ?? "text-whiter"
                )}
            >
                {sectionHeader}
            </p>
            <Separator
                className={cn("my-5", colorSeparator ?? "bg-black/20")}
            />
        </div>
    );
}
