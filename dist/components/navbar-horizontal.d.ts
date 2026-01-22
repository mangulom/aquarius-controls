import type { Components, JSX } from "../types/components";

interface NavbarHorizontal extends Components.NavbarHorizontal, HTMLElement {}
export const NavbarHorizontal: {
    prototype: NavbarHorizontal;
    new (): NavbarHorizontal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
