'use strict';

var index = require('./index-BbrHyRZC.js');

const navbarFooterCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}.navbar-footer{position:fixed;bottom:0;width:100%;background:#0063A7;display:flex;flex-direction:column;align-items:center;padding:6px 0;z-index:1000}.navbar-buttons{display:flex;gap:10px;margin-bottom:4px}.nav-item-wrapper{display:flex;flex-direction:column;align-items:center}.nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 14px;min-width:60px;height:60px;background:#0063A7;color:white;border:none;border-radius:8px;cursor:pointer;font-size:0.85rem;gap:2px;white-space:nowrap}.nav-item i{font-size:1.3rem}.subitems-up{display:flex;flex-direction:column;background:#0063A7;padding:4px 0;gap:2px;width:100%}.subitem{display:flex;align-items:center;gap:6px;padding:6px 12px;background:transparent;color:white;border:none;cursor:pointer;font-size:0.75rem;white-space:nowrap;text-align:left;transition:background 0.2s}.subitem i{font-size:1rem}.subitem:hover{background:rgba(255, 255, 255, 0.2);}.footer-text{width:100%;text-align:center;font-size:0.6rem;color:white;border-top:1px solid white;padding-top:2px}`;

const NavbarFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Lista de items principales */
    items = [];
    render() {
        return (index.h("footer", { key: '624f3d4b276397642083653810f1c2260d3a2988', class: "navbar-footer" }, index.h("div", { key: 'b40ec9c5e48c755dda8570fcf4dbc6a6f82024ba', class: "navbar-buttons" }, this.items.map((item) => (index.h("div", { class: "nav-item-wrapper" }, index.h("button", { class: "nav-item" }, item.icon && index.h("i", { class: item.icon }), index.h("span", null, item.label)), item.subitems && (index.h("div", { class: "subitems-up" }, item.subitems.map(sub => (index.h("button", { class: "subitem" }, sub.icon && index.h("i", { class: sub.icon }), index.h("span", null, sub.label)))))))))), index.h("div", { key: 'fc61be5d5713c991bedd6dec801cfae512c7510a', class: "footer-text" }, "REGINA BILLING - Powered by Aquarius Consulting S.A. - Todos los Derechos Reservados \u00AE 2026")));
    }
};
NavbarFooter.style = navbarFooterCss();

exports.navbar_footer = NavbarFooter;
