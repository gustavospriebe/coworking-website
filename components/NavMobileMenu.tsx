import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import React from "react";

interface NavMobileMenuProps {
    children?: React.ReactNode;
    items: NavItem[];
}

export default function NavMobileMenu({ children, items }: NavMobileMenuProps) {
    // prevent scrolling while mobile menu is open
    useLockBody();

    return (
        <div
            className={cn(
                "fixed inset-0 top-20 z-50  bg-bg-black/60  p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
            )}
        >
            <div className="relative z-20 grid gap-4 rounded-md bg-bg-black p-4 text-whiter shadow-md">
                <span className="pl-2 text-2xl font-bold underline">Menu</span>
                <nav className="flex flex-col  text-sm">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "w-full items-center rounded-md p-2 text-sm font-medium  hover:underline",
                                item.disabled && "cursor-not-allowed opacity-60"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
