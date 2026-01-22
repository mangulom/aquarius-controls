export declare class HoldExpandButton {
    label: string;
    icon: string;
    disabled: boolean;
    holdTime: number;
    expanded: boolean;
    private timer;
    private startHold;
    private endHold;
    render(): any;
}
