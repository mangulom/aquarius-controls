import type { Components, JSX } from "../types/components";

interface GeneralButton extends Components.GeneralButton, HTMLElement {}
export const GeneralButton: {
    prototype: GeneralButton;
    new (): GeneralButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
