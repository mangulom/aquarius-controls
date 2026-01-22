import { Component, Prop, h, State } from '@stencil/core';

export interface NavbarItem {
  label: string;
  icon?: string;
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

  toggleDropdown(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  render() {
    return (
      <footer class="navbar-footer">
        <div class="navbar-buttons">
          {this.items.map((item, index) => (
            <div class="nav-item-wrapper">
              <button class="nav-item" onClick={() => this.toggleDropdown(index)}>
                {item.icon && <i class={item.icon}></i>}
                <span>{item.label}</span>
              </button>

              {/* Cuadro de subitems */}
              {item.subitems && (
                <div class={{
                  'subitems-container': true,
                  'open': this.openIndex === index
                }}>
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
        </div>

        <div class="footer-text">
          REGINA BILLING - Powered by Aquarius Consulting S.A. - Todos los Derechos Reservados ® 2026
        </div>
      </footer>
    );
  }
}
