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

enum Highlights {
    Unstyled = "1-18",
    Composable = "20-37",
    Customizable = "39-55",
    Consistent = "57-74",
}

export function CardComponent({ className, ...props }: CardProps) {
    const [activeHighlight, setActiveHighlight] = useState<Highlights>(
        Highlights.Unstyled
    );
    return (
        <Card
            className={cn(
                "cursor-pointer border-none  bg-[#ffffff0e] p-0 text-whiter shadow-md",
                className
            )}
            {...props}
        >
            <CardHeader className="p-4">
                <CardTitle className="font-bold">Notifications</CardTitle>
                <CardDescription className="text-secundary">
                    You have 3 unread messages.
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
