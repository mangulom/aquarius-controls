import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'general-button',
  styleUrl: 'general-button.css',
  shadow: false
})
export class GeneralButton {

  @Prop() label: string = 'Aceptar';
  @Prop() disabled: boolean = false;
  @Prop() icon: string = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"

  render() {
    return (
      <button disabled={this.disabled} class="general-button">
        {this.icon && <i class={this.icon}></i>}
        <span>{this.label}</span>
      </button>
    );
  }
}
