export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
}

export interface NavMenu {
    NavMenu: NavItem[];
}
export interface FooterItem {
    title: string;
    href: string;
    disabled?: boolean;
}

export interface FooterMenu {
    FooterMenu: FooterItem[];
}

export interface CarouselItem {
    title: string;
    description: string;
    image?: any;
}

export interface Carousel {
    Carousel: CarouselItem[];
}
export interface BenefitsItem {
    title: string;
    description: string;
    icon: any;
}

export interface Benefits {
    Benefits: BenefitsItem[];
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

export interface BlogPost {
    title: string;
    description: string;
    image: any;
    tag: string;
    link: string;
    date: string;
}

export interface Blog {
    Blog: BlogPost[];
}

export interface StructureItem {
    category: string;
    assets: {
        image: StaticImageData;
        name: string;
        description: string[];
    }[];
}

export interface Structure {
    Structure: StructureItem[];
}
