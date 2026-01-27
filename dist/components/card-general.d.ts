import type { Components, JSX } from "../types/components";

interface CardGeneral extends Components.CardGeneral, HTMLElement {}
export const CardGeneral: {
    prototype: CardGeneral;
    new (): CardGeneral;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
