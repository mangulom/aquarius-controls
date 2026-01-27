import { h } from "@stencil/core";
export class NavbarFooter {
    items = [];
    openIndex = null;
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    handleClick(event, route) {
        event.stopPropagation();
        if (route) {
            console.log('Emit route:', route);
            // Emite evento nativo del DOM
            this.el.dispatchEvent(new CustomEvent('navigate', {
                detail: route,
                bubbles: true,
                composed: true
            }));
        }
    }
    el;
    connectedCallback() {
        this.el = this;
    }
    render() {
        return (h("footer", { key: 'b465a034edb9adddb716a95e67120af1ab400a78', class: "navbar-footer" }, h("div", { key: 'd105ca4fd8e14f9ddf078971749a6d12d855417a', class: "navbar-buttons" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item", onClick: (event) => item.route ? this.handleClick(event, item.route) : this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && (h("div", { class: {
                'subitems-container': true,
                'open': this.openIndex === index
            } }, item.subitems.map(sub => (h("button", { class: "subitem", onClick: (event) => this.handleClick(event, sub.route) }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label))))))))))));
    }
    static get is() { return "navbar-footer"; }
    static get originalStyleUrls() {
        return {
            "$": ["navbar-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["navbar-footer.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "NavbarItem[]",
                    "resolved": "NavbarItem[]",
                    "references": {
                        "NavbarItem": {
                            "location": "local",
                            "path": "C:/Proyectos/aquarius-controls/aquarius-controls/src/components/navbars/navbar-footer/navbar-footer.tsx",
                            "id": "src/components/navbars/navbar-footer/navbar-footer.tsx::NavbarItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "openIndex": {}
        };
    }
}
