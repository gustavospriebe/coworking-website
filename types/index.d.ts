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

export interface PartnersItem {
    name?: string;
    logo?: StaticImageData;
}

export interface Partners {
    Partners: PartnersItem[];
    Videos: string[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQ {
    FAQ: FAQItem[];
}