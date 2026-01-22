import { r as registerInstance, h } from './index-CZ9uDaiH.js';

const navbarFooterCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}.navbar-footer{position:fixed;bottom:0;width:100%;background:#0063A7;display:flex;flex-direction:column;align-items:center;padding:6px 0;z-index:1000}.navbar-buttons{display:flex;gap:10px;margin-bottom:4px}.nav-item-wrapper{position:relative}.nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;width:60px;height:60px;background:#0063A7;color:white;border:none;border-radius:8px;cursor:pointer;font-size:0.75rem;gap:2px}.nav-item i{font-size:1.2rem}.subitems-up{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;background:#e0e0e0;border-radius:6px;padding:4px;box-shadow:0 2px 6px rgba(0,0,0,0.2);z-index:10}.subitem{display:flex;align-items:center;gap:6px;padding:6px 10px;background:white;border:none;border-radius:4px;cursor:pointer;font-size:0.75rem;white-space:nowrap}.subitem i{font-size:1rem}.subitem:hover{background:#dcdcdc}.footer-text{width:100%;text-align:center;font-size:0.6rem;color:white;border-top:1px solid white;padding-top:2px}`;

const NavbarFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Lista de items principales */
    items = [];
    openIndex = null;
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    render() {
        return (h("footer", { key: '625a4fbd2a21eda2391e5c595fce3a9f4c9eed69', class: "navbar-footer" }, h("div", { key: 'c77d0b666469e4091c1ca038bde0d69faffea8ae', class: "navbar-buttons" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item", onClick: () => this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && this.openIndex === index && (h("div", { class: "subitems-up" }, item.subitems.map(sub => (h("button", { class: "subitem" }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label)))))))))), h("div", { key: '47b21f087d1e97f2b3d5e3b8a533c398a2534d8c', class: "footer-text" }, "REGINA BILLING - Powered by Aquarius Consulting S.A. - Todos los Derechos Reservados \u00AE 2026")));
    }
};
NavbarFooter.style = navbarFooterCss();

export { NavbarFooter as navbar_footer };
