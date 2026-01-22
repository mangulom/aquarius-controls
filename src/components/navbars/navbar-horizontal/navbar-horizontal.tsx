import { Component, Prop, h, State } from '@stencil/core';

export interface NavbarItem {
  label: string;
  icon?: string;         // Clases Font Awesome
  subitems?: NavbarItem[]; 
}

@Component({
  tag: 'navbar-horizontal',
  styleUrl: 'navbar-horizontal.css',
  shadow: false
})
export class NavbarHorizontal {

  /** Lista de items principales */
  @Prop() items: NavbarItem[] = [];

  @State() openIndex: number | null = null; // para manejar dropdown

  toggleDropdown(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  render() {
    return (
      <nav class="navbar">
        {this.items.map((item, index) => (
          <div class="nav-item-wrapper">
            <button class="nav-item" onClick={() => this.toggleDropdown(index)}>
              {item.icon && <i class={item.icon}></i>}
              <span>{item.label}</span>
            </button>

            {/* Subitems */}
            {item.subitems && this.openIndex === index && (
              <div class="subitems">
                {item.subitems.map(sub => (
                  <button class="subitem">
                    {sub.icon && <i class={sub.icon}></i>}
                    <span>{sub.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }
}
