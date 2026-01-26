import type { Components, JSX } from "../types/components";

interface DonutRadio extends Components.DonutRadio, HTMLElement {}
export const DonutRadio: {
    prototype: DonutRadio;
    new (): DonutRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
