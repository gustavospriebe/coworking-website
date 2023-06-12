"use client";

import { BellRing, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
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

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
];

type CardProps = React.ComponentProps<typeof Card>;

type Highlights = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const cards = [2, 3, 4, 5, 6, 7, 8];

export function CardComponent({ className, ...props }: CardProps) {
    const [activeHighlight, setActiveHighlight] = useState(1);
    return (
        // scroll-m-0  overflow-y-hidden overflow-x-scroll
        <div className="-mx-10 space-y-2 pl-5">
            <Card
                className={cn(
                    "cursor-pointer border-none  p-0 text-whiter shadow-md",
                    activeHighlight === 1 ? "card-active" : "card-ghost",
                    className
                )}
                {...props}
                onMouseDown={() => setActiveHighlight(1)}
                onClick={() => setActiveHighlight(1)}
            >
                <CardHeader className="p-4">
                    <CardTitle className="font-bold">Notifications</CardTitle>
                </CardHeader>
            </Card>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    className={cn(
                        "cursor-pointer border-none p-0 text-whiter shadow-md",
                        activeHighlight === card ? "card-active" : "card-ghost",
                        className
                    )}
                    {...props}
                    onMouseDown={() => setActiveHighlight(card)}
                    onClick={() => setActiveHighlight(card)}
                >
                    <CardHeader className="p-4">
                        <CardTitle className="font-bold">
                            Notifications
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}

// <Card
// className={cn(
//     "cursor-pointer border-none p-0 text-whiter shadow-md",
//     activeHighlight === 2 ? "card-active" : "card-ghost",
//     className
// )}
// {...props}
// onMouseDown={() => setActiveHighlight(2)}
// onClick={() => setActiveHighlight(2)}
// >
// <CardHeader className="p-4">
//     <CardTitle className="font-bold">Notifications</CardTitle>
// </CardHeader>
// </Card>
// <Card
// className={cn(
//     "cursor-pointer border-none p-0 text-whiter shadow-md",
//     activeHighlight === 3 ? "card-active" : "card-ghost",
//     className
// )}
// {...props}
// onMouseDown={() => setActiveHighlight(3)}
// onClick={() => setActiveHighlight(3)}
// >
// <CardHeader className="p-4">
//     <CardTitle className="font-bold">Notifications</CardTitle>
// </CardHeader>
// </Card>
// <Card
// className={cn(
//     "cursor-pointer border-none p-0 text-whiter shadow-md",
//     activeHighlight === 4 ? "card-active" : "card-ghost",
//     className
// )}
// {...props}
// onMouseDown={() => setActiveHighlight(4)}
// onClick={() => setActiveHighlight(4)}
// >
// <CardHeader className="p-4">
//     <CardTitle className="font-bold">Notifications</CardTitle>
// </CardHeader>
// </Card>
// <Card
// className={cn(
//     "cursor-pointer border-none p-0 text-whiter shadow-md",
//     activeHighlight === 5 ? "card-active" : "card-ghost",
//     className
// )}
// {...props}
// onMouseDown={() => setActiveHighlight(5)}
// onClick={() => setActiveHighlight(5)}
// >
// <CardHeader className="p-4">
//     <CardTitle className="font-bold">Notifications</CardTitle>
// </CardHeader>
// </Card>
// <Card
// className={cn(
//     "cursor-pointer border-none p-0 text-whiter shadow-md",
//     activeHighlight === 6 ? "card-active" : "card-ghost",
//     className
// )}
// {...props}
// onMouseDown={() => setActiveHighlight(6)}
// onClick={() => setActiveHighlight(6)}
// >
// <CardHeader className="p-4">
//     <CardTitle className="font-bold">Notifications</CardTitle>
// </CardHeader>
// </Card>
// <Card
// className={cn(
//     "cursor-pointer border-none p-0 text-whiter shadow-md",
//     activeHighlight === 7 ? "card-active" : "card-ghost",
//     className
// )}
// {...props}
// onMouseDown={() => setActiveHighlight(7)}
// onClick={() => setActiveHighlight(7)}
// >
// <CardHeader className="p-4">
//     <CardTitle className="font-bold">Notifications</CardTitle>
// </CardHeader>
// </Card>
// <Card
// className={cn(
//     "cursor-pointer border-none p-0 text-whiter shadow-md",
//     activeHighlight === 8 ? "card-active" : "card-ghost",
//     className
// )}
// {...props}
// onMouseDown={() => setActiveHighlight(8)}
// onClick={() => setActiveHighlight(8)}
// >
// <CardHeader className="p-4">
//     <CardTitle className="font-bold">Notifications</CardTitle>
// </CardHeader>
// </Card>
