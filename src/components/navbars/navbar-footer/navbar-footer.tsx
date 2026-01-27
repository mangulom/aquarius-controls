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

  // Evento garantizado para Angular
  @Event({ bubbles: true, composed: true }) navigate: EventEmitter<string>;

  toggleDropdown(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  handleClick(route?: string) {
    if (route) {
      console.log('Emit route:', route); // <-- Verifica en consola
      this.navigate.emit(route);
    }
  }

  render() {
    return (
      <footer class="navbar-footer">
        <div class="navbar-buttons">
          {this.items.map((item, index) => (
            <div class="nav-item-wrapper" key={index}>
              {/* Botón principal */}
              <button
                class="nav-item"
                onClick={() => item.route ? this.handleClick(item.route) : this.toggleDropdown(index)}
              >
                {item.icon && <i class={item.icon}></i>}
                <span>{item.label}</span>
              </button>

              {/* Subitems */}
              {item.subitems && (
                <div class={{ 'subitems-container': true, 'open': this.openIndex === index }}>
                  {item.subitems.map((sub, subIndex) => (
                    <button
                      class="subitem"
                      key={subIndex}
                      onClick={() => this.handleClick(sub.route)}
                    >
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
