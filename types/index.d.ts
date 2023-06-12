export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
}

export interface NavMenu {
    NavMenu: NavItem[];
}

export interface CarouselItem {
    title: string;
    description: string;
    image?: StaticImageData;
}

export interface Carousel {
    Carousel: CarouselItem[];
}