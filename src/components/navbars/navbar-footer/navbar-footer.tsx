import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

export interface NavbarItem {
  label: string;
  icon?: string;
  route?: string;
  subitems?: NavbarItem[];
}

@Component({
  tag: 'navbar-footer',
  styleUrl: 'navbar-footer.css',
  shadow: false
})
export class NavbarFooter {

  @Prop() items: NavbarItem[] = [];
  @State() openIndex: number | null = null;

  // Evento custom
  @Event({ bubbles: true, composed: true }) navigate: EventEmitter<string>;

  toggleDropdown(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  handleClick(event: MouseEvent, route?: string) {
    event.stopPropagation(); // Evita que se cierre el dropdown al hacer click
    if (route) {
      this.navigate.emit(route); // Emitir la ruta
    }
  }

  render() {
    return (
      <footer class="navbar-footer">
        <div class="navbar-buttons">
          {this.items.map((item, index) => (
            <div class="nav-item-wrapper">
              <button
                class="nav-item"
                onClick={(event) => item.route ? this.handleClick(event, item.route) : this.toggleDropdown(index)}
              >
                {item.icon && <i class={item.icon}></i>}
                <span>{item.label}</span>
              </button>

              {item.subitems && (
                <div class={{
                  'subitems-container': true,
                  'open': this.openIndex === index
                }}>
                  {item.subitems.map(sub => (
                    <button class="subitem" onClick={(event) => this.handleClick(event, sub.route)}>
                      {sub.icon && <i class={sub.icon}></i>}
                      <span>{sub.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </footer>
    );
  }
}
