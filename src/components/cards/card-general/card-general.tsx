import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-general',
  styleUrl: 'card-general.css',
  shadow: false
})
export class CardGeneral {

  /** Ancho del card */
  @Prop() width: string = '300px';

  /** Alto del card */
  @Prop() height: string = 'auto';

  render() {
    const style = {
      width: this.width,
      height: this.height
    };

    return (
      <div class="card" style={style}>
        <div class="card-inner">
          <slot></slot>
        </div>
      </div>
    );
  }
}
