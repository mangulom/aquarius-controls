export interface NavbarItem {
    label: string;
    icon?: string;
    subitems?: NavbarItem[];
}
export declare class NavbarFooter {
    items: NavbarItem[];
    openIndex: number | null;
    toggleDropdown(index: number): void;
    render(): any;
}
