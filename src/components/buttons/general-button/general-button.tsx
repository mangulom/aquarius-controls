import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'general-button',
  styleUrl: 'general-button.css',
  shadow: false
})
export class GeneralButton {

  @Prop() label: string = 'Aceptar';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = ''; // nueva prop

  render() {
    return (
      <button disabled={this.disabled}>
        {this.icon && <i class={this.icon}></i>}
        <span>{this.label}</span>
      </button>
    );
  }
}
