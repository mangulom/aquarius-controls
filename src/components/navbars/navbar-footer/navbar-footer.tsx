import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

export interface NavbarItem {
  label: string;
  icon?: string;
  route?: string;          // <-- Agregado
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

  @Event() navigate: EventEmitter<string>; // Evento custom para Angular

  toggleDropdown(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  handleClick(route?: string) {
    if (route) {
      this.navigate.emit(route); // Emite la ruta si existe
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
                onClick={() => item.route ? this.handleClick(item.route) : this.toggleDropdown(index)}
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
                    <button class="subitem" onClick={() => this.handleClick(sub.route)}>
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