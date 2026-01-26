import type { Components, JSX } from "../types/components";

interface TableGeneral extends Components.TableGeneral, HTMLElement {}
export const TableGeneral: {
    prototype: TableGeneral;
    new (): TableGeneral;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
