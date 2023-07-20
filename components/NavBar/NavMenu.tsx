"use client";

import closemenu from "@/assets/closemenu.svg";
import logo from "@/assets/logo.svg";
import menu from "@/assets/menu.svg";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationBarTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navConfig } from "@/config/NavMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import NavMobileMenu from "./NavMobileMenu";

export function NavigationMenuComponent() {
    const items = navConfig.NavMenu;
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        // bg-bg-black px-6 sm:px-9 lg:px-12

        <div className="w-full bg-bg-black px-7 py-4 md:px-12 lg:px-16">
            <div className="mx-auto w-full max-w-7xl" x-data="{open: false}">
                <div className="flex items-center justify-between bg-bg-black">
                    <Link href="/" id="btn-logo">
                        <Image
                            alt="Flowbite React Logo"
                            className="
            h-10 w-24 sm:h-12 sm:w-28 lg:h-16 lg:w-32"
                            src={logo}
                        />
                    </Link>
                    <NavigationMenu className="hidden select-none bg-bg-black md:flex">
                        <NavigationMenuList>
                            {items.length
                                ? items.map((item, index) => (
                                      <NavigationMenuItem key={index}>
                                          <Link
                                              href={item.href}
                                              legacyBehavior
                                              passHref
                                              id={`nav-link-${index}`}
                                          >
                                              <NavigationMenuLink
                                                  className={cn(
                                                      navigationBarTriggerStyle(),
                                                      "font-exo, hover:text-whiter"
                                                  )}
                                              >
                                                  {item.title}
                                              </NavigationMenuLink>
                                          </Link>
                                      </NavigationMenuItem>
                                  ))
                                : null}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center gap-2 sm:gap-2">
                        <Link
                            href="https://api.whatsapp.com/send?phone=5548996294577&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida"
                            id="btn-contact-nav"
                            className={cn(
                                buttonVariants({ size: "sm" }),
                                "text-principal gap-2 bg-green-principal font-exotwo hover:bg-green-principal/70"
                            )}
                        >
                            Entre em contato
                        </Link>
                        <Button
                            variant="ghost"
                            id="mobile-menu-button"
                            className="px-1 hover:bg-bg-black md:hidden"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >
                            {showMobileMenu ? (
                                <Image
                                    alt=""
                                    src={closemenu}
                                    className="h-8 w-8"
                                />
                            ) : (
                                <Image alt="" src={menu} className="h-8 w-8" />
                            )}
                        </Button>
                    </div>
                    {showMobileMenu && items && (
                        <NavMobileMenu
                            setShowMobileMenu={setShowMobileMenu}
                            items={items}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
