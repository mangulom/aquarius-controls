import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'donut-radio',
  styleUrl: 'donut-radio.css',
  shadow: false
})
export class DonutRadio {

  @Prop() name!: string;
  @Prop() value!: string;
  @Prop() label: string = '';
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() color: string = '';

  render() {
    return (
      <label class={{
        'donut-radio': true,
        'disabled': this.disabled
      }}>
        <input
          type="radio"
          name={this.name}
          value={this.value}
          checked={this.checked}
          disabled={this.disabled}
          color={this.color}
        />

        <span class="control"></span>

        {this.label && <span class="text">{this.label}</span>}
      </label>
    );
  }
}
