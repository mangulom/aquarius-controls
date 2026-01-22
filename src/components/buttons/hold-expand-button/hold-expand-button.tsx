import { Component, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'hold-expand-button',
    styleUrl: 'hold-expand-button.css',
    shadow: false
})
export class HoldExpandButton {

    @Prop() label: string = 'Guardar';
    @Prop() icon: string = 'fas fa-save';
    @Prop() disabled: boolean = false;
    @Prop() holdTime: number = 2000; // ms

    @State() expanded: boolean = false;

    private timer: any;

    private startHold = () => {
        if (this.disabled) return;

        this.timer = setTimeout(() => {
            this.expanded = true;
        }, this.holdTime);
    };

    private endHold = () => {
        clearTimeout(this.timer);
        this.expanded = false;
    };

    render() {
        return (
            <button
                class={{
                    'hold-btn': true,
                    'expanded': this.expanded
                }}
                disabled={this.disabled}
                onMouseDown={this.startHold}
                onMouseUp={this.endHold}
                onMouseLeave={this.endHold}
                onTouchStart={this.startHold}
                onTouchEnd={this.endHold}
            >
                <i class={this.icon}></i>
                <span class="label">{this.label}</span>
            </button>
        );
    }
}
