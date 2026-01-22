import { Component, Prop, h } from '@stencil/core';

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

  /** Lista de items principales */
  @Prop() items: NavbarItem[] = [];

  render() {
    return (
      <footer class="navbar-footer">
        <div class="navbar-buttons">
          {this.items.map((item) => (
            <div class="nav-item-wrapper">
              <button class="nav-item">
                {item.icon && <i class={item.icon}></i>}
                <span>{item.label}</span>
              </button>

              {/* Subitems siempre visibles */}
              {item.subitems && (
                <div class="subitems-up">
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
