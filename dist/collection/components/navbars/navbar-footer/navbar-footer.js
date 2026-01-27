import { h } from "@stencil/core";
export class NavbarFooter {
    items = [];
    openIndex = null;
    // Evento garantizado para Angular
    navigate;
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    handleClick(route) {
        if (route) {
            console.log('Emit route:', route); // <-- Verifica en consola
            this.navigate.emit(route);
        }
    }
    render() {
        return (h("footer", { key: '7750ed4e2de3294d6ba7e3beeb6624e47ec9b8b7', class: "navbar-footer" }, h("div", { key: '0d3507d132f87a69c6f9ff1ae118c34503739b59', class: "navbar-buttons" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper", key: index }, h("button", { class: "nav-item", onClick: () => item.route ? this.handleClick(item.route) : this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && (h("div", { class: { 'subitems-container': true, 'open': this.openIndex === index } }, item.subitems.map((sub, subIndex) => (h("button", { class: "subitem", key: subIndex, onClick: () => this.handleClick(sub.route) }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label))))))))))));
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
    static get events() {
        return [{
                "method": "navigate",
                "name": "navigate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
