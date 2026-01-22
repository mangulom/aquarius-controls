import type { Components, JSX } from "../types/components";

interface HoldExpandButton extends Components.HoldExpandButton, HTMLElement {}
export const HoldExpandButton: {
    prototype: HoldExpandButton;
    new (): HoldExpandButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
