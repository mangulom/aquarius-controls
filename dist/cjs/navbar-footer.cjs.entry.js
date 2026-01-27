'use strict';

var index = require('./index-BhkWo07D.js');

const navbarFooterCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}:host .navbar-footer{position:fixed;bottom:0;width:100%;background:#0063A7;display:flex;flex-direction:column;align-items:center;padding:6px 0;z-index:1000}:host .navbar-buttons{display:flex;gap:10px;margin-bottom:4px}:host .nav-item-wrapper{position:relative}:host .nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px 14px;min-width:60px;height:60px;background:#0063A7;color:white;border:none;border-radius:8px;cursor:pointer;font-size:0.85rem;gap:2px;white-space:nowrap;transition:background 0.2s}:host .nav-item:hover{background:#0056a0}:host .nav-item i{font-size:1.3rem}:host .subitems-container{position:absolute;bottom:100%;left:50%;transform:translateX(-50%) translateY(20px);opacity:0;display:flex;flex-direction:column;background:#0063A7;border-radius:12px;padding:8px 0;min-width:180px;pointer-events:none;transition:all 0.3s ease;z-index:10}:host .subitems-container.open{transform:translateX(-50%) translateY(0);opacity:1;pointer-events:auto}:host .subitem{display:flex;align-items:center;gap:10px;padding:8px 16px;background:transparent;color:white;border:2px solid transparent;border-radius:6px;cursor:pointer;font-size:0.85rem;white-space:nowrap;text-align:left;transition:background 0.2s, border 0.2s}:host .subitem i{font-size:1rem}:host .subitem:hover{background:rgba(255, 255, 255, 0.2);border:2px solid white}:host .footer-text{width:100%;text-align:center;font-size:0.6rem;color:white;border-top:1px solid white;padding-top:2px}`;

const NavbarFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    items = [];
    openIndex = null;
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    render() {
        return (index.h("footer", { key: 'a926e955edad51d274d2c544481588e0e0571498', class: "navbar-footer" }, index.h("div", { key: '52c44c9b62a37a9160798d76ee71588b0a7ddfce', class: "navbar-buttons" }, this.items.map((item, index$1) => (index.h("div", { class: "nav-item-wrapper" }, index.h("button", { class: "nav-item", onClick: () => this.toggleDropdown(index$1) }, item.icon && index.h("i", { class: item.icon }), index.h("span", null, item.label)), item.subitems && (index.h("div", { class: {
                'subitems-container': true,
                'open': this.openIndex === index$1
            } }, item.subitems.map(sub => (index.h("button", { class: "subitem" }, sub.icon && index.h("i", { class: sub.icon }), index.h("span", null, sub.label))))))))))));
    }
};
NavbarFooter.style = navbarFooterCss();

exports.navbar_footer = NavbarFooter;
