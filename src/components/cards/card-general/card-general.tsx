import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.css',
  shadow: false
})
export class AppCard {

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
