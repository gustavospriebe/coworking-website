export interface NavItem {
    title: string;
    href: string;
    disabled?: boolean;
}


export interface NavMenu {
    NavMenu: NavItem[];
}
