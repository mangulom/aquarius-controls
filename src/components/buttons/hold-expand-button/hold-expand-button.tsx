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

  /** Color del botón: PRIMARY, DANGER, WARNING, SUCCESS, INFO, SECONDARY */
  @Prop() color: string = 'PRIMARY';

  /** Tiempo de presión en ms */
  @Prop() holdTime: number = 1000;

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
    const colorClass = `btn-${this.color.toLowerCase()}`;

    return (
      <button
        disabled={this.disabled}
        class={`hold-button ${colorClass} ${this.expanded ? 'expanded' : ''}`}
        onMouseDown={this.startHold}
        onMouseUp={this.endHold}
        onMouseLeave={this.endHold}
        onTouchStart={this.startHold}
        onTouchEnd={this.endHold}
      >
        {this.icon && <i class={this.icon}></i>}
        <span class="label">{this.label}</span>
      </button>
    );
  }
}
