import { h } from "@stencil/core";
export class NavbarFooter {
    items = [];
    openIndex = null;
    navigate; // Evento custom para Angular
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    handleClick(route) {
        if (route) {
            this.navigate.emit(route); // Emite la ruta si existe
        }
    }
    render() {
        return (h("footer", { key: '942559200bf62a45783513a9d1322d897c7a1ccf', class: "navbar-footer" }, h("div", { key: '7a87e56d5f8750a08bd3ed8857b077f497641a66', class: "navbar-buttons" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item", onClick: () => item.route ? this.handleClick(item.route) : this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && (h("div", { class: {
                'subitems-container': true,
                'open': this.openIndex === index
            } }, item.subitems.map(sub => (h("button", { class: "subitem", onClick: () => this.handleClick(sub.route) }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label))))))))))));
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
