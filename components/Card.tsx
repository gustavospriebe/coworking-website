import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CarouselItem } from "types";

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
];

type CardProps = React.ComponentProps<typeof Card>;

interface CardComponentProps extends CardProps {
    activeHighlight: number;
    items: CarouselItem[];
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
        <div className="-ml-10 grid list-none grid-cols-2 gap-4 pl-5 lg:grid-cols-1 lg:gap-3">
            {items.map((_, index) => (
                <Card
                    key={index}
                    className={cn(
                        "flex cursor-pointer items-center border-none p-0 text-whiter shadow-md  sm:items-start sm:justify-start sm:text-left",
                        activeHighlight === index
                            ? "card-active"
                            : "card-ghost",
                        className
                    )}
                    {...props}
                    onMouseDown={() => setActiveHighlight(index)}
                    onClick={() => setActiveHighlight(index)}
                >
                    <CardHeader className="space-y-2  p-4">
                        <CardTitle className="font-exotwo  font-bold">
                            {items[index].title}
                        </CardTitle>
                        <CardDescription className="hidden font-nunitosans sm:flex">
                            {items[index].description}
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
