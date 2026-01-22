export declare class HoldExpandButton {
    label: string;
    icon: string;
    disabled: boolean;
    /** Color del botón: PRIMARY, DANGER, WARNING, SUCCESS, INFO, SECONDARY */
    color: string;
    /** Tiempo de presión en ms */
    holdTime: number;
    expanded: boolean;
    private timer;
    private startHold;
    private endHold;
    render(): any;
}
