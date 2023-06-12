import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { BellRing, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { ProgressBar } from "./Progress";
import { Carousel } from "types";


const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
];

type CardProps = React.ComponentProps<typeof Card>;

interface CardComponentProps extends CardProps {
    activeHighlight: number;
    items: Carousel[];
    setActiveHighlight: (x: number) => void;
}

export function CardComponent({
    className,
    activeHighlight,
    items,
    setActiveHighlight,
    ...props
}: CardComponentProps) {
    return (
        // scroll-m-0  overflow-y-hidden hidden overflow-x-scroll
        <div className="space-y-2 w-full">
            {items.map((_, index) => (
                <Card
                    key={index}
                    className={cn(
                        "cursor-pointer border-none p-0 text-whiter shadow-md",
                        activeHighlight === index
                            ? "card-active"
                            : "card-ghost",
                        className
                    )}
                    {...props}
                    onMouseDown={() => setActiveHighlight(index)}
                    onClick={() => setActiveHighlight(index)}
                >
                    <CardHeader className="space-y-2 p-4">
                        <CardTitle className="font-bold">
                        {items[index].title}
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
