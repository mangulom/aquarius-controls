import { h } from "@stencil/core";
export class NavbarFooter {
    items = [];
    openIndex = null;
    // Evento custom
    navigate;
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    handleClick(event, route) {
        event.stopPropagation(); // Evita que se cierre el dropdown al hacer click
        if (route) {
            this.navigate.emit(route); // Emitir la ruta
        }
    }
    render() {
        return (h("footer", { key: 'ec1c509c3f23578954df5e69c288e8c496c125e2', class: "navbar-footer" }, h("div", { key: '171cabaa84043fcbf6a4c7aa0919a58b2c0b2ae6', class: "navbar-buttons" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item", onClick: (event) => item.route ? this.handleClick(event, item.route) : this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && (h("div", { class: {
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
