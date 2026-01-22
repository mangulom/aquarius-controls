export interface NavbarItem {
    label: string;
    icon?: string;
    subitems?: NavbarItem[];
}
export declare class NavbarFooter {
    /** Lista de items principales */
    items: NavbarItem[];
    render(): any;
}
