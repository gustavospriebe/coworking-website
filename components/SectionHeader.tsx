import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

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
                    "mb-2 font-exotwo",
                    colorName ?? "text-green-secundary"
                )}
            >
                {sectionName}
            </p>
            <p
                className={cn(
                    "font-exo text-2xl font-medium tracking-tight sm:text-4xl",
                    colorHeader ?? "text-whiter"
                )}
            >
                {sectionHeader}
            </p>
            <Separator
                className={cn(
                    "my-5",
                    colorSeparator ? `${colorSeparator}/20` : "bg-black/20"
                )}
            />
        </div>
    );
}
