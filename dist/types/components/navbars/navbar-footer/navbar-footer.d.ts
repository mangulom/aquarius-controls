export interface NavbarItem {
    label: string;
    icon?: string;
    route?: string;
    subitems?: NavbarItem[];
}
export declare class NavbarFooter {
    items: NavbarItem[];
    openIndex: number | null;
    toggleDropdown(index: number): void;
    handleClick(event: MouseEvent, route?: string): void;
    private el;
    connectedCallback(): void;
    render(): any;
}
