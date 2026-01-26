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

  private onClick = () => {
    const group = document.querySelectorAll(`donut-radio[name="${this.name}"]`);

    group.forEach((radio: any) => {
      if (radio !== this.el) {
        radio.checked = false;
      }
    });

    this.checked = true;
  };

  render() {
    return (
      <label class="radio">
        <input
          type="radio"
          checked={this.checked}
          onClick={this.onClick}
          color={this.color}
        />

        <span class="control"></span>
        <span class="label">{this.label}</span>
      </label>
    );
  }
}
