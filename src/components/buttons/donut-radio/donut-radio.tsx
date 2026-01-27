import { Component, Prop, h, Element, State } from '@stencil/core';

@Component({
  tag: 'donut-radio',
  styleUrl: 'donut-radio.css',
  shadow: true,
})
export class DonutRadio {
  @Element() el!: HTMLElement;

  @Prop() name!: string;
  @Prop() label!: string;
  @Prop() color: string = 'PRIMARY';

  @State() checked = false;

  // Convierte nombre de color a hexadecimal
  private resolveColor(): string {
    const colors: Record<string, string> = {
      PRIMARY: '#0d6efd',
      SUCCESS: '#198754',
      DANGER: '#dc3545',
      WARNING: '#ffc107',
      INFO: '#0dcaf0',
      SECONDARY: '#6c757d',
      DARK: '#212529',
      LIGHT: '#ffffff',
    };

    return colors[this.color?.toUpperCase()] || this.color;
  }

  private syncGroup() {
    const group = document.querySelectorAll(
      `donut-radio[name="${this.name}"]`
    );

    group.forEach((radio: any) => {
      if (radio !== this.el) {
        radio.checked = false;
      }
    });
  }

  private onClick = () => {
    this.syncGroup();
    this.checked = true;
  };

  render() {
    const style = {
      '--radio-color': this.resolveColor(),
    };

    return (
      <label class="radio" style={style}>
        <input
          type="radio"
          checked={this.checked}
          onClick={this.onClick}
        />

        <span class="control"></span>
        <span class="label">{this.label}</span>
      </label>
    );
  }
}
