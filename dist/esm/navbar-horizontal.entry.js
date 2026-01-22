import { r as registerInstance, h } from './index-CZ9uDaiH.js';

const navbarHorizontalCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}.navbar{display:flex;gap:10px;background:#0063A7;padding:10px}.nav-item-wrapper{position:relative}.nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:80px;background:#007BFF;color:white;border:none;border-radius:8px;cursor:pointer;font-size:0.9rem;gap:4px;transition:background 0.2s}.nav-item:hover{background:#0056b3}.nav-item i{font-size:1.5rem}.subitems{position:absolute;top:0;left:100%;display:flex;flex-direction:column;background:#f0f0f0;border-radius:6px;padding:5px;box-shadow:0 2px 6px rgba(0,0,0,0.2);z-index:10}.subitem{display:flex;align-items:center;gap:6px;padding:6px 10px;background:white;border:none;border-radius:4px;cursor:pointer;font-size:0.85rem;white-space:nowrap}.subitem i{font-size:1rem}.subitem:hover{background:#e0e0e0}`;

const NavbarHorizontal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Lista de items principales */
    items = [];
    openIndex = null; // para manejar dropdown
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    render() {
        return (h("nav", { key: '5e7fef785ad05329c45d8a1e6e688ea2e6edc334', class: "navbar" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item", onClick: () => this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && this.openIndex === index && (h("div", { class: "subitems" }, item.subitems.map(sub => (h("button", { class: "subitem" }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label)))))))))));
    }
};
NavbarHorizontal.style = navbarHorizontalCss();

export { NavbarHorizontal as navbar_horizontal };
