import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-general',
  styleUrl: 'card-general.css',
  shadow: true
})
export class CardGeneral {

  /** Ancho del card */
  @Prop() width: string = '300px';

  /** Alto del card */
  @Prop() height: string = 'auto';

  private getStyle(): { [key: string]: string } {
    return {
      width: this.width,
      height: this.height,
      display: 'block'
    };
  }

  render() {
    return (
      <div class="card" style={this.getStyle()}>
        <div class="card-inner">
          <slot></slot>
        </div>
      </div>
    );
  }
}
