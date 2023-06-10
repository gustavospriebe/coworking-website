"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationBarTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navConfig } from "@/config/NavMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
// import { Icons } from "@/components/icons";


export function NavigationMenuComponent() {
    const items = navConfig.NavMenu;
    console.log(items);

    return (
        <NavigationMenu className="bg-bg-black">
            <NavigationMenuList>
                {items.length
                    ? items.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationBarTriggerStyle()}
                                >
                                    {item.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))
                    : null}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
