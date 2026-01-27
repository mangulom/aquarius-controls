import { EventEmitter } from '../../../stencil-public-runtime';
export interface NavbarItem {
    label: string;
    icon?: string;
    route?: string;
    subitems?: NavbarItem[];
}
export declare class NavbarFooter {
    items: NavbarItem[];
    openIndex: number | null;
    navigate: EventEmitter<string>;
    toggleDropdown(index: number): void;
    handleClick(route?: string): void;
    render(): any;
}
