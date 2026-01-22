import type { Components, JSX } from "../types/components";

interface NavbarFooter extends Components.NavbarFooter, HTMLElement {}
export const NavbarFooter: {
    prototype: NavbarFooter;
    new (): NavbarFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
